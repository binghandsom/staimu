<?php

namespace App\Http\Controllers\SPMB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use GuzzleHttp\Client;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\SPMB\FormulirPendaftaranModel;
use App\Models\System\ConfigurationModel;
use App\Helpers\Helper;
use App\Mail\MahasiswaBaruRegistered;
use App\Mail\VerifyEmailAddress;

use Ramsey\Uuid\Uuid;

class PMBController extends Controller {         
    /**
     * digunakan untuk mendapatkan calon mahasiswa baru yang baru mendaftar di halaman pendaftaran
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $this->hasPermissionTo('SPMB-PMB_BROWSE');

        $this->validate($request, [           
            'TA'=>'required',
            'prodi_id'=>'required'
        ]);
        
        $ta=$request->input('TA');
        $prodi_id=$request->input('prodi_id');

        $data = User::role('mahasiswabaru')
                    ->select(\DB::raw('users.id,users.username,users.name,users.email,users.nomor_hp,users.active,users.foto,users.created_at,users.updated_at'))
                    ->join('pe3_formulir_pendaftaran','pe3_formulir_pendaftaran.user_id','users.id')
                    ->where('users.ta',$ta)
                    ->where('kjur1',$prodi_id)
                    ->get();
        
        return Response()->json([
                                'status'=>1,
                                'pid'=>'fetchdata',
                                'pmb'=>$data,
                                'message'=>'Fetch data calon mahasiswa baru berhasil diperoleh'
                            ],200);  
    }    
    /**
     * digunakan untuk mendapatkan calon mahasiswa baru yang telah mengisi formulir pendaftaran
     *
     * @return \Illuminate\Http\Response
     */
    public function formulirpendaftaran(Request $request)
    {   
        $this->hasAnyPermission(['SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE','SPMB-PMB-LAPORAN-PRODI_BROWSE']);

        $this->validate($request, [           
            'TA'=>'required',
            'prodi_id'=>'required'
        ]);
        
        $ta=$request->input('TA');
        $prodi_id=$request->input('prodi_id');

        $data = FormulirPendaftaranModel::select(\DB::raw('users.id,users.name,users.nomor_hp,pe3_kelas.nkelas,users.active,users.foto,users.created_at,users.updated_at'))
                    ->join('users','pe3_formulir_pendaftaran.user_id','users.id')                    
                    ->join('pe3_kelas','pe3_formulir_pendaftaran.idkelas','pe3_kelas.idkelas')                    
                    ->where('users.ta',$ta)
                    ->where('kjur1',$prodi_id)            
                    ->whereNotNull('pe3_formulir_pendaftaran.idkelas')   
                    ->where('users.active',1)    
                    ->orderBy('users.name','ASC') 
                    ->get();
        
        return Response()->json([
                                'status'=>1,
                                'pid'=>'fetchdata',
                                'pmb'=>$data,
                                'message'=>'Fetch data calon mahasiswa baru berhasil diperoleh'
                            ],200);  
    }  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'=>'required',            
            'email'=>'required|string|email|unique:users',
            'nomor_hp'=>'required|unique:users',            
            'prodi_id'=>'required',
            'username'=>'required|string|unique:users',
            'password'=>'required',
            'captcha_response'=>[
                                'required',
                                function ($attribute, $value, $fail) 
                                {
                                    $client = new Client ();
                                    $response = $client->post(
                                        'https://www.google.com/recaptcha/api/siteverify',
                                        ['form_params'=>
                                            [
                                                'secret'=>ConfigurationModel::getCache('CAPTCHA_PRIVATE_KEY'),
                                                'response'=>$value
                                            ]
                                        ]);    
                                    $body = json_decode((string)$response->getBody());
                                    if (!$body->success)
                                    {
                                        $fail('Token Google Captcha, salah !!!.');
                                    }
                                }
                            ]
        ]);
        $user = \DB::transaction(function () use ($request){
            $now = \Carbon\Carbon::now()->toDateTimeString();                   
            $code=mt_rand(1000,9999);
            $ta=ConfigurationModel::getCache('DEFAULT_TAHUN_PENDAFTARAN');
            $user=User::create([
                'id'=>Uuid::uuid4()->toString(),
                'name'=>$request->input('name'),
                'email'=>$request->input('email'),
                'username'=> $request->input('username'),
                'password'=>Hash::make($request->input('password')),
                'nomor_hp'=>$request->input('nomor_hp'),
                'ta'=>$ta,
                'email_verified_at'=>'',
                'theme'=>'default',  
                'code'=>$code,          
                'active'=>0,          
                'created_at'=>$now, 
                'updated_at'=>$now
            ]);            
            $role='mahasiswabaru';   
            $user->assignRole($role);
            $permission=Role::findByName('mahasiswabaru')->permissions;
            $user->givePermissionTo($permission->pluck('name'));             
            
            FormulirPendaftaranModel::create([
                'user_id'=>$user->id,
                'nama_mhs'=>$request->input('name'),                
                'telp_hp'=>$request->input('nomor_hp'),
                'kjur1'=>$request->input('prodi_id'),
                'ta'=>$ta,
            ]);

            return $user;
        });
        $config_kirim_email = 0;
        if (!is_null($user) && $config_kirim_email==1)
        {
            app()->mailer->to($request->input('email'))->send(new VerifyEmailAddress($user->code));
        }       

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'store',
                                    'email'=>$user->email,                                                                                                  
                                    'message'=>'Data Mahasiswa baru berhasil disimpan.'
                                ],200); 

    }      
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storependaftar(Request $request)
    {
        $this->hasPermissionTo('SPMB-PMB_STORE');

        $this->validate($request, [
            'name'=>'required',            
            'email'=>'required|string|email|unique:users',
            'nomor_hp'=>'required|unique:users',            
            'prodi_id'=>'required',
            'username'=>'required|string|unique:users',
            'password'=>'required',            
        ]);
        $user = \DB::transaction(function () use ($request){
            $now = \Carbon\Carbon::now()->toDateTimeString();                   
            $code=0;
            $ta=ConfigurationModel::getCache('DEFAULT_TAHUN_PENDAFTARAN');
            $user=User::create([
                'id'=>Uuid::uuid4()->toString(),
                'name'=>$request->input('name'),
                'email'=>$request->input('email'),
                'username'=> $request->input('username'),
                'password'=>Hash::make($request->input('password')),
                'nomor_hp'=>$request->input('nomor_hp'),
                'ta'=>$ta,
                'email_verified_at'=>'',
                'theme'=>'default',  
                'code'=>$code,          
                'active'=>1,         
                'foto'=>'images/no_photo.png', 
                'created_at'=>$now, 
                'updated_at'=>$now
            ]);            
            $role='mahasiswabaru';   
            $user->assignRole($role);
            $permission=Role::findByName('mahasiswabaru')->permissions;
            $user->givePermissionTo($permission->pluck('name'));             
            
            FormulirPendaftaranModel::create([
                'user_id'=>$user->id,
                'nama_mhs'=>$request->input('name'),                
                'telp_hp'=>$request->input('nomor_hp'),
                'kjur1'=>$request->input('prodi_id'),
                'ta'=>$ta,
            ]);

            return $user;
        });
        $config_kirim_email = 0;
        if (!is_null($user) && $config_kirim_email==1)
        {
            app()->mailer->to($request->input('email'))->send(new VerifyEmailAddress($user->code));
        }       

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'store',
                                    'pendaftar'=>$user,                                                                                                  
                                    'message'=>'Data Mahasiswa baru berhasil disimpan.'
                                ],200); 

    }      
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updatependaftar(Request $request,$id)
    {
        $this->hasPermissionTo('SPMB-PMB_UPDATE');

        $user = User::find($id);
        if (is_null($user))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'update',                
                                    'message'=>["User ID ($id) gagal diupdate"]
                                ],422); 
        }
        else
        {
            $this->validate($request, [
                'username'=>[
                    'required',
                    'unique:users,username,'.$user->id
                ],              
                'email'=>'required|string|email|unique:users,email,'.$user->id,
                'nomor_hp'=>'required|string|unique:users,nomor_hp,'.$user->id,                   
            ]);
            
            $user = \DB::transaction(function () use ($request,$user){
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->nomor_hp = $request->input('nomor_hp');
                $user->username = $request->input('username');        
                if (!empty(trim($request->input('password')))) {
                    $user->password = Hash::make($request->input('password'));
                }
                $user->save();

                $formulir=FormulirPendaftaranModel::find($user->id);
                $formulir->nama_mhs=$request->input('name');
                $formulir->telp_hp=$request->input('telp_hp');
                $formulir->save();

                return $user;
            });
        }

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'store',
                                    'pendaftar'=>$user,                                                                                                  
                                    'message'=>'Data Mahasiswa baru berhasil diubah.'
                                ],200); 

    }      
    /**
     * Detail formulir pendaftaran
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$id)
    {
        $formulir=FormulirPendaftaranModel::select(\DB::raw('
                                                                users.id,
                                                                nama_mhs,
                                                                tempat_lahir,
                                                                tanggal_lahir,
                                                                jk,
                                                                nomor_hp,
                                                                email,
                                                                nama_ibu_kandung,
                                                                address1_desa_id,
                                                                address1_kelurahan,
                                                                address1_kecamatan_id,
                                                                address1_kecamatan,
                                                                address1_kabupaten_id,
                                                                address1_kabupaten,                                                                
                                                                address1_provinsi_id,
                                                                address1_provinsi,                                                                
                                                                alamat_rumah,
                                                                pe3_prodi.kode_fakultas,
                                                                kjur1,
                                                                idkelas,
                                                                users.ta,
                                                                idsmt
                                                            '))
                                            ->join('users','users.id','pe3_formulir_pendaftaran.user_id')
                                            ->leftJoin('pe3_prodi','pe3_prodi.id','pe3_formulir_pendaftaran.kjur1')
                                            ->find($id);
        if (is_null($formulir))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',                
                                    'message'=>["Formulir Pendaftaran dengan ID ($id) gagal diperoleh"]
                                ],422); 
        }
        else
        {
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'fetchdata',                
                                        'formulir'=>$formulir,
                                        'message'=>"Formulir Pendaftaran dengan ID ($id) berhasil diperoleh"
                                    ],200);        
        }

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function konfirmasi(Request $request)
    {
        $this->validate($request, [            
            'email'=>'required|string|email',
            'code'=>'required|numeric',                        
        ]);
        $now = \Carbon\Carbon::now()->toDateTimeString();       
        $email= $request->input('email');
        $code= $request->input('code');  
        
        $user = \DB::table('users')->where('email',$email)->where('code',$code)->get();        
        if ($user->count()>0)
        {
            $user=User::find($user[0]->id);
            $user->code=0;
            $user->active=1;
            $user->save();            
            app()->mailer->to($email)->send(new MahasiswaBaruRegistered($user));

            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'update',                                                                                                                                        
                                        'message'=>'Email Mahasiswa berhasil diverifikasi.'
                                    ],200);
        }
        else
        {
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'update',                                                                                                                                        
                                        'message'=>['Email Registrasi Mahasiswa gagal diverifikasi.']
                                    ],422);
        }

    }   
    /**
     * update formulir pendaftaran
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $formulir=FormulirPendaftaranModel::find($id);

        if (is_null($formulir))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'update',                
                                    'message'=>["Formulir Pendaftaran dengan ID ($id) gagal diperoleh"]
                                ],422); 
        }
        else
        {
           
            $this->validate($request, [
                'nama_mhs'=>'required',            
                'tempat_lahir'=>'required',            
                'tanggal_lahir'=>'required',            
                'jk'=>'required',            
                'nomor_hp'=>'required|unique:users,nomor_hp,'.$formulir->user_id,
                'email'=>'required|string|email|unique:users,email,'.$formulir->user_id,
                'nama_ibu_kandung'=>'required',

                'address1_provinsi_id'=>'required',
                'address1_provinsi'=>'required',
                'address1_kabupaten_id'=>'required',
                'address1_kabupaten'=>'required',
                'address1_kecamatan_id'=>'required',
                'address1_kecamatan'=>'required',
                'address1_desa_id'=>'required',
                'address1_kelurahan'=>'required',
                'alamat_rumah'=>'required',
                
                
                'kjur1'=>'required',
                'idkelas'=>'required',            
            ]);

            $formulir = \DB::transaction(function () use ($request,$formulir){            
                $formulir->nama_mhs=$request->input('nama_mhs');           
                $formulir->tempat_lahir=$request->input('tempat_lahir');           
                $formulir->tanggal_lahir=$request->input('tanggal_lahir');           
                $formulir->jk=$request->input('jk');           
                $formulir->telp_hp=$request->input('nomor_hp');           
                  
                $formulir->nama_ibu_kandung=$request->input('nama_ibu_kandung');    
                $formulir->address1_provinsi_id=$request->input('address1_provinsi_id');
                $formulir->address1_provinsi=$request->input('address1_provinsi');
                $formulir->address1_kabupaten_id=$request->input('address1_kabupaten_id');
                $formulir->address1_kabupaten=$request->input('address1_kabupaten');
                $formulir->address1_kecamatan_id=$request->input('address1_kecamatan_id');
                $formulir->address1_kecamatan=$request->input('address1_kecamatan');
                $formulir->address1_desa_id=$request->input('address1_desa_id');
                $formulir->address1_kelurahan=$request->input('address1_kelurahan');
                $formulir->alamat_rumah=$request->input('alamat_rumah');    
                $formulir->kjur1=$request->input('kjur1');    
                $formulir->idkelas=$request->input('idkelas');  

                $formulir->save();

                $user=$formulir->User;
                $user->name = $request->input('nama_mhs');
                $user->email = $request->input('email');
                $user->nomor_hp = $request->input('nomor_hp');
                $user->save();    

                $role='mahasiswabaru';   
                $user->assignRole($role);
                $permission=Role::findByName('mahasiswabaru')->permissions;
                $user->givePermissionTo($permission->pluck('name'));             
                
                $formulir=FormulirPendaftaranModel::find($formulir->user_id);
                return $formulir;
            });
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'store',
                                        'formulir'=>$formulir,                                                                                                  
                                        'message'=>'Formulir Pendaftaran Mahasiswa baru berhasil diubah.'
                                    ],200); 
        }
    }           
    /**
     * Menghapus calon mahasiwa baru
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    { 
        $this->hasPermissionTo('SPMB-PMB_DESTROY');

        $user = User::where('isdeleted','1')
                    ->find($id); 
        
        if (is_null($user))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'destroy',                
                                    'message'=>["Calon Mahasiswa Baru dengan ID ($id) gagal dihapus"]
                                ],422); 
        }
        else
        {
            $name=$user->name;
            $user->delete();

            \App\Models\System\ActivityLog::log($request,[
                                                                'object' => $this->guard()->user(), 
                                                                'object_id' => $this->guard()->user()->id, 
                                                                'user_id' => $this->guard()->user()->id, 
                                                                'message' => 'Menghapus Mahasiswa Baru ('.$name.') berhasil'
                                                            ]);
        
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'destroy',                
                                        'message'=>"Mahasiswa Baru ($name) berhasil dihapus"
                                    ],200);         
        }
                  
    }   
}