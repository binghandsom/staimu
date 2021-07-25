<?php

namespace App\Http\Controllers\Akademik;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DMaster\ProgramStudiModel;
use App\Models\Akademik\PenyelenggaraanMatakuliahModel;
use App\Models\Akademik\RegisterMahasiswaModel;
use App\Models\Akademik\DulangModel;
use App\Models\Akademik\PKRSModel;
use App\Models\Akademik\KRSModel;
use App\Models\Akademik\KRSMatkulModel;

use App\Models\System\ConfigurationModel;

use Exception;
use Ramsey\Uuid\Uuid;

class PKRSController extends Controller
{
    /**
     * daftar krs
     */
    public function index(Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_BROWSE');
        $daftar_pkrs=[];  
            
        $this->validate($request, [
            'ta'=>'required',
            'semester_akademik'=>'required',
            'prodi_id'=>'required'
        ]);

        $ta=$request->input('ta');
        $prodi_id=$request->input('prodi_id');
        $semester_akademik=$request->input('semester_akademik');

        $daftar_pkrs = PKRSModel::select(\DB::raw('
                                pe3_pkrs.id,
                                pe3_pkrs.nim,
                                pe3_formulir_pendaftaran.nama_mhs,
                                pe3_formulir_pendaftaran.ta AS tahun_masuk,
                                pe3_penyelenggaraan.kmatkul,
                                pe3_penyelenggaraan.nmatkul,
                                pe3_penyelenggaraan.sks,
                                pe3_pkrs.tambah,
                                pe3_pkrs.hapus,
                                pe3_pkrs.batal,
                                \'N.A\' AS ket,    
                                pe3_pkrs.created_at,
                                pe3_pkrs.updated_at
                            '))
                            ->join('pe3_formulir_pendaftaran','pe3_formulir_pendaftaran.user_id','pe3_pkrs.user_id')
                            ->join('pe3_penyelenggaraan','pe3_penyelenggaraan.id','pe3_pkrs.penyelenggaraan_id')
                            ->orderBy('nama_mhs','ASC');
                            
        
        if ($request->has('search'))
        {
            $daftar_pkrs=$daftar_pkrs->whereRaw('(pe3_pkrs.nim LIKE \''.$request->input('search').'%\' OR pe3_formulir_pendaftaran.nama_mhs LIKE \'%'.$request->input('search').'%\')')        
                        ->orderBy('tasmt','desc')
                        ->get();
        }  
        else
        {
            $daftar_pkrs=$daftar_pkrs->where('pe3_penyelenggaraan.kjur',$prodi_id)
                                    ->where('pe3_penyelenggaraan.tahun',$ta)
                                    ->where('pe3_penyelenggaraan.idsmt',$semester_akademik)
                                    ->get();
        }
        $daftar_pkrs->transform(function ($item,$key) {                
            if ($item->tambah == 1) {
                $ket = 'TAMBAH';
            } if ($item->hapus == 1) {
                $ket = 'HAPUS';
                }if ($item->batal == 1) {
                $ket = 'BATAL';
            }if ($item->sah == 1) {
                $ket = 'SAH';
            }
            $item->ket = $ket;
            return $item;
        });    
        
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',  
                                    'daftar_pkrs'=>$daftar_pkrs,
                                    'message'=>'Daftar perubahan krs mahasiswa berhasil diperoleh' 
                                ], 200);  
        
    }
    public function show (Request $request,$id)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_SHOW');
        try
        {
            $krs=KRSModel::select(\DB::raw('
                        pe3_krs.id,
                        pe3_krs.nim,
                        pe3_register_mahasiswa.nirm,
                        pe3_formulir_pendaftaran.nama_mhs,
                        pe3_formulir_pendaftaran.jk,
                        pe3_formulir_pendaftaran.no_formulir,
                        pe3_register_mahasiswa.tahun AS tahun_pendaftaran,
                        pe3_kelas.nkelas,
                        pe3_krs.jumlah_matkul_1,
                        pe3_krs.jumlah_sks_1,
                        CONCAT(COALESCE(pe3_dosen.gelar_depan,"")," ",pe3_dosen.nama_dosen," ",COALESCE(pe3_dosen.gelar_belakang,"")) AS nama_dosen,
                        pe3_dosen.nidn,
                        pe3_krs.kjur,
                        pe3_krs.tahun,
                        pe3_krs.idsmt,
                        pe3_krs.tasmt,
                        pe3_krs.sah,
                        pe3_krs.created_at,
                        pe3_krs.updated_at
                    '))
                    ->join('pe3_register_mahasiswa','pe3_register_mahasiswa.user_id','pe3_krs.user_id')
                    ->join('pe3_formulir_pendaftaran','pe3_formulir_pendaftaran.user_id','pe3_krs.user_id')
                    ->join('pe3_kelas','pe3_kelas.idkelas','pe3_register_mahasiswa.idkelas')
                    ->leftJoin('pe3_dosen','pe3_dosen.user_id','pe3_register_mahasiswa.dosen_id')
                    ->find($id);

            if (is_null($krs))
            {
                throw new Exception ("KRS dengan ($id) gagal diperoleh");
            }
            if ($krs->sah == 0) 
            {
                throw new Exception ("Mohon maaf belum bisa melakukan PKRS karena KRS-nya belum disahkan oleh Dosen Wali");
            }
            $daftar_matkul=[];
            $daftar_matkul=KRSMatkulModel::select(\DB::raw('
                                            pe3_krsmatkul.id,
                                            A.kmatkul,
                                            A.nmatkul,
                                            A.sks,
                                            A.semester,
                                            CONCAT(COALESCE(B.gelar_depan,\' \'),B.nama_dosen,\' \',COALESCE(B.gelar_belakang,\'\')) AS nama_dosen_penyelenggaraan,
                                            CONCAT(COALESCE(E.gelar_depan,\' \'),E.nama_dosen,\' \',COALESCE(E.gelar_belakang,\'\')) AS nama_dosen_kelas,
                                            \'\' AS nama_dosen,
                                            COALESCE(D.nmatkul,\'N.A\') AS nama_kelas,
                                            C.kelas_mhs_id,
                                            pe3_krsmatkul.penyelenggaraan_id,
                                            pe3_krsmatkul.batal,
                                            pe3_krsmatkul.created_at,
                                            pe3_krsmatkul.updated_at
                                        '))
                                        ->join('pe3_penyelenggaraan AS A','A.id','pe3_krsmatkul.penyelenggaraan_id')
                                        ->leftJoin('pe3_dosen AS B','A.user_id','B.user_id')
                                        ->leftJoin('pe3_kelas_mhs_peserta AS C','pe3_krsmatkul.id','C.krsmatkul_id') 
                                        ->leftJoin('pe3_kelas_mhs AS D','D.id','C.kelas_mhs_id')
                                        // ->leftJoin('pe3_kelas_mhs_penyelenggaraan AS D','D.kelas_mhs_id','C.kelas_mhs_id')
                                        // ->leftJoin('pe3_penyelenggaraan_dosen AS E','E.id','D.penyelenggaraan_dosen_id')
                                        ->leftJoin('pe3_dosen AS E','E.user_id','D.user_id')
                                        ->where('krs_id',$krs->id)
                                        ->orderBy('semester','asc')
                                        ->orderBy('kmatkul','asc')
                                        ->get();
            
            $daftar_matkul->transform(function ($item,$key) {            
                if (is_null($item->nama_dosen_kelas) && is_null($item->nama_dosen_penyelenggaraan))
                {
                    $item->nama_dosen='N.A';
                }     
                else
                {
                    $item->nama_dosen=is_null($item->nama_dosen_kelas) ? $item->nama_dosen_penyelenggaraan:$item->nama_dosen_kelas;           
                }
                return $item;
            });
            $krs->jumlah_matkul_1=$daftar_matkul->count();
            $krs->jumlah_sks_1=$daftar_matkul->sum('sks');
            $krs->save();
            
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',  
                                    'krs'=>$krs,
                                    'krsmatkul'=>$daftar_matkul,
                                    'jumlah_matkul'=>$krs->jumlah_matkul_1,
                                    'jumlah_sks'=>$krs->jumlah_sks_1,
                                    'message'=>'Fetch data krs dan detail krs mahasiswa berhasil diperoleh' 
                                ],200)->setEncodingOptions(JSON_NUMERIC_CHECK);  
        }
        catch (Exception $e)
        {
            return Response()->json([
                'status'=>0,
                'pid'=>'fetchdata',               
                'message'=>[$e->getMessage()]
            ], 422); 
        }       
    }
    public function penyelenggaraan (Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_SHOW');

        $this->validate($request, [
            'nim'=>'required',      
            'prodi_id'=>'required',     
            'ta'=>'required',     
            'semester_akademik'=>'required',     
            'pid'=>'required',     
        ]);
        
        $prodi_id=$request->input('prodi_id');
        $ta=$request->input('ta');
        $nim=$request->input('nim');
        $semester_akademik=$request->input('semester_akademik');
        
        $datamhs=RegisterMahasiswaModel::select(\DB::raw('tahun'))
								        ->whereRaw("nim=\"$nim\"")
                                        ->first();
        
        if (is_null($datamhs))
        {
            return Response()->json([
                                        'status'=>0,
                                        'pid'=>'fetchdata',    
                                        'message'=>["Data MHS dengan NIM ($nim) gagal diperoleh"]
                                    ], 422); 
        }
        else
        {        
            $penyelenggaraan=PenyelenggaraanMatakuliahModel::select(\DB::raw('
                                        id,
                                        kmatkul,    
                                        nmatkul,
                                        sks,
                                        semester,
                                        ta_matkul
                                    '))       
                                    ->where('tahun',$ta)
                                    ->where('idsmt',$semester_akademik)
                                    ->where('kjur',$prodi_id)
                                    ->where('ta_matkul',$datamhs->tahun)
                                    ->whereNotIn('id',function($query) use ($nim,$ta,$semester_akademik){
                                        $query->select('penyelenggaraan_id')
                                            ->from('pe3_krsmatkul')
                                            ->where('nim',$nim)
                                            ->where('tahun',$ta)
                                            ->where('idsmt',$semester_akademik);                                   
                                    })
                                    ->orderBy('semester','ASC')          
                                    ->orderBy('kmatkul','ASC')          
                                    ->get();

            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'fetchdata',  
                                        'penyelenggaraan'=>$penyelenggaraan,                                    
                                        'message'=>'Fetch data matakuliah yang diselenggarakan dan belum terdaftar di KRS berhasil diperoleh' 
                                    ],200)->setEncodingOptions(JSON_NUMERIC_CHECK);
        }
    }
    /**
     * digunakan untul menyimpan krs mahasiswa
     */
    public function store (Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_STORE');
        
        $this->validate($request, [
            'nim'=>'required|exists:pe3_register_mahasiswa,nim',     
            'dulang_id'=>'required|exists:pe3_dulang,id',     
        ]);
        
        $nim=$request->input('nim');
        $dulang_id=$request->input('dulang_id');

        $dulang = DulangModel::find($dulang_id);

        $krs=KRSModel::create([
            'id'=>Uuid::uuid4()->toString(),
            'user_id'=>$dulang->user_id,
            'dulang_id'=>$dulang_id,
            'nim'=>$nim,
            'kjur'=>$dulang->register_mahasiswa->kjur, 
            'idsmt'=>$dulang->idsmt, 
            'tahun'=>$dulang->tahun, 
            'tasmt'=>$dulang->tasmt,         
            'sah'=>0,        
        ]);
        \App\Models\System\ActivityLog::log($request,[
                                                    'object' => $krs, 
                                                    'object_id' => $krs->id, 
                                                    'user_id' => $this->getUserid(), 
                                                    'message'=>"Menyimpan krs mahasiswa berhasil dilakukan."
                                                ]);
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'store',  
                                    'krs'=>$krs,
                                    'message'=>'menyimpan krs mahasiswa berhasil'
                                ], 200);  
    }
    public function storematkul (Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_STORE');

        $matkul_selected=json_decode($request->input('matkul_selected'), true);
        $request->merge(['matkul_selected'=>$matkul_selected]);   

        $this->validate($request, [      
            'krs_id'=>'required|exists:pe3_krs,id',     
            'matkul_selected'=>'required',
        ]);
        $krs_id=$request->input('krs_id');
        
        $krs=KRSModel::find($krs_id);

        $daftar_matkul=[];
        foreach ($matkul_selected as $v)
        {
            $daftar_matkul[]=[
                'id'=>Uuid::uuid4()->toString(),
                'krs_id'=>$krs_id,
                'nim'=>$krs->nim,
                'penyelenggaraan_id'=>$v['id'],
                'batal'=>0,
                'kjur'=>$krs->kjur,
                'idsmt'=>$krs->idsmt,
                'tahun'=>$krs->tahun,    
                'created_at'=>\Carbon\Carbon::now(),
                'updated_at'=>\Carbon\Carbon::now()
            ];
            PKRSModel::create([
                'id'=>Uuid::uuid4()->toString(),
                'user_id'=>$krs->user_id,
                'nim'=>$krs->nim,
                'penyelenggaraan_id'=>$v['id'],
                'tambah'=>1,
                'hapus'=>0,
                'batal'=>0,
                'sah'=>0,
            ]);
        }
        KRSMatkulModel::insert($daftar_matkul);
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'store',                                      
                                    'message'=>(count($daftar_matkul)).' Matakuliah baru telah berhasil ditambahkan'
                                ], 200);  
    }  
    public function updatestatus (Request $request,$id)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_UPDATE');

        $krsmatkul = KRSMatkulModel::find($id); 
        
        if (is_null($krsmatkul))
        {
            return Response()->json([
                                    'status'=>0,
                                    'pid'=>'update',    
                                    'message'=>["PKRS dengan ($id) gagal diverifikasi"]
                                ], 422); 
        }
        else
        {
            $this->validate($request, [      
                'status'=>'required',
            ]);
            
            $user = \DB::transaction(function () use ($request, $krsmatkul) {
                $status = $request->input('status');
                \App\Models\System\ActivityLog::log($request,[
                    'object' => $krsmatkul, 
                    'object_id' => $krsmatkul->id, 
                    'user_id' => $this->getUserid(), 
                    'message' => "Merubah status menjadi $status matakuliah KRS dengan id ('.$krsmatkul->id.') berhasil"
                ]);

                $krsmatkul->batal=$status;
                $krsmatkul->save();

                $krs = $krsmatkul->krs;
                if ($status)
                {
                    PKRSModel::create([
                        'id'=>Uuid::uuid4()->toString(),
                        'user_id'=>$krs->user_id,
                        'nim'=>$krs->nim,
                        'penyelenggaraan_id'=>$krsmatkul->penyelenggaraan_id,
                        'tambah'=>0,
                        'hapus'=>0,
                        'batal'=>1,
                        'sah'=>0,
                    ]);
                }
                else
                {
                    PKRSModel::create([
                        'id'=>Uuid::uuid4()->toString(),
                        'user_id'=>$krs->user_id,
                        'nim'=>$krs->nim,
                        'penyelenggaraan_id'=>$krsmatkul->penyelenggaraan_id,
                        'tambah'=>0,
                        'hapus'=>0,
                        'batal'=>0,
                        'sah'=>1,
                    ]);
                }
            });       
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'update', 
                                        'krsmatkul'=>$krsmatkul,   
                                        'message' => 'Memverifikasi Perubahan KRS dengan id ('.$id.') berhasil'
                                    ], 200);    
        }
    }  
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroymatkul(Request $request,$id)
    { 
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_DESTROY');

        $krsmatkul = KRSMatkulModel::find($id); 
        
        if (is_null($krsmatkul))
        {
            return Response()->json([
                                    'status'=>0,
                                    'pid'=>'destroy',    
                                    'message'=>["Matakuliah dalam KRS dengan ($id) gagal dihapus"]
                                ], 422); 
        }
        else
        {
            $user = \DB::transaction(function () use ($request, $krsmatkul) {
                \App\Models\System\ActivityLog::log($request, [
                    'object' => $krsmatkul, 
                    'object_id' => $krsmatkul->id, 
                    'user_id' => $this->getUserid(), 
                    'message' => 'Menghapus matakuliah KRS dengan id ('.$krsmatkul->id.') berhasil'
                ]);
                
                \DB::table("pe3_kelas_mhs_peserta")
                        ->where('krsmatkul_id', $krsmatkul->id)
                        ->delete();

                $krs = $krsmatkul->krs;
                PKRSModel::create([
                    'id'=>Uuid::uuid4()->toString(),
                    'user_id'=>$krs->user_id,
                    'nim'=>$krs->nim,
                    'penyelenggaraan_id'=>$krsmatkul->penyelenggaraan_id,
                    'tambah'=>0,
                    'hapus'=>1,
                    'batal'=>0,
                    'sah'=>0,
                ]);

                $krsmatkul->delete();
            });       
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'destroy',    
                                        'message' => 'Menghapus matakuliah KRS dengan id ('.$id.') berhasil'
                                    ], 200);    
        }
                  
    }
    public function printpdf(Request $request,$id)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PKRS_SHOW');

        $krs=KRSModel::select(\DB::raw('
                        pe3_krs.id,
                        pe3_krs.nim,
                        CONCAT(COALESCE(pe3_dosen.gelar_depan,\' \'),pe3_dosen.nama_dosen,\' \',COALESCE(pe3_dosen.gelar_belakang,\'\')) AS nama_dosen,
                        pe3_dosen.nidn,
                        pe3_register_mahasiswa.nirm,
                        pe3_formulir_pendaftaran.nama_mhs,
                        pe3_formulir_pendaftaran.jk,
                        pe3_krs.kjur,
                        pe3_prodi.nama_prodi,
                        pe3_krs.tahun,
                        pe3_krs.idsmt,
                        \'\' AS nama_semester,
                        pe3_krs.tasmt,
                        pe3_krs.sah,
                        pe3_krs.created_at,
                        pe3_krs.updated_at
                    '))
                    ->join('pe3_formulir_pendaftaran','pe3_formulir_pendaftaran.user_id','pe3_krs.user_id')
                    ->join('pe3_register_mahasiswa','pe3_register_mahasiswa.user_id','pe3_krs.user_id')
                    ->join('pe3_prodi','pe3_register_mahasiswa.kjur','pe3_prodi.id')
                    ->leftJoin('pe3_dosen','pe3_dosen.user_id','pe3_register_mahasiswa.dosen_id')
                    ->find($id);

        if (is_null($krs))
        {
            return Response()->json([
                                    'status'=>0,
                                    'pid'=>'destroy',    
                                    'message'=>["KRS dengan ($id) gagal diperoleh"]
                                ], 422); 
        }
        else
        {
            $prodi = new ProgramStudiModel();
            $kaprodi=$prodi->getKAProdi($krs->kjur);
            if (!is_null($kaprodi))
            {            
                $krs->nama_semester=\App\Helpers\HelperAkademik::getSemester($krs->idsmt);

                $daftar_matkul=KRSMatkulModel::select(\DB::raw('
                                                pe3_krsmatkul.id,
                                                A.kmatkul,
                                                A.nmatkul,
                                                A.sks,
                                                A.semester,
                                                CONCAT(COALESCE(B.gelar_depan,\' \'),B.nama_dosen,\' \',COALESCE(B.gelar_belakang,\'\')) AS nama_dosen_penyelenggaraan,
                                                CONCAT(COALESCE(F.gelar_depan,\' \'),F.nama_dosen,\' \',COALESCE(F.gelar_belakang,\'\')) AS nama_dosen_kelas,
                                                \'\' AS nama_dosen,
                                                pe3_krsmatkul.created_at,
                                                pe3_krsmatkul.updated_at
                                            '))
                                            ->join('pe3_penyelenggaraan AS A','A.id','pe3_krsmatkul.penyelenggaraan_id')
                                            ->leftJoin('pe3_dosen AS B','A.user_id','B.user_id')
                                            ->leftJoin('pe3_kelas_mhs_peserta AS C','pe3_krsmatkul.id','C.krsmatkul_id')
                                            ->leftJoin('pe3_kelas_mhs_penyelenggaraan AS D','D.kelas_mhs_id','C.kelas_mhs_id')
                                            ->leftJoin('pe3_penyelenggaraan_dosen AS E','E.id','D.penyelenggaraan_dosen_id')
                                            ->leftJoin('pe3_dosen AS F','F.user_id','E.user_id')
                                            ->where('krs_id',$krs->id)
                                            ->orderBy('semester','asc')
                                            ->orderBy('kmatkul','asc')
                                            ->get();
                
                $daftar_matkul->transform(function ($item,$key) {                 
                    if (is_null($item->nama_dosen_kelas) && is_null($item->nama_dosen_penyelenggaraan))
                    {
                        $item->nama_dosen='N.A';
                    }     
                    else
                    {
                        $item->nama_dosen=is_null($item->nama_dosen_kelas) ? $item->nama_dosen_penyelenggaraan:$item->nama_dosen_kelas;           
                    }
                    return $item;
                });
                $config = ConfigurationModel::getCache();
                $headers=[
                    'HEADER_1'=>$config['HEADER_1'],
                    'HEADER_2'=>$config['HEADER_2'],
                    'HEADER_3'=>$config['HEADER_3'],
                    'HEADER_4'=>$config['HEADER_4'],
                    'HEADER_ADDRESS'=>$config['HEADER_ADDRESS'],
                    'HEADER_LOGO'=>\App\Helpers\Helper::public_path("images/logo.png")
                ];
                $pdf = \Meneses\LaravelMpdf\Facades\LaravelMpdf::loadView('report.ReportKRS',
                                                                        [
                                                                            'headers'=>$headers,
                                                                            'data_krs'=>$krs,
                                                                            'daftar_matkul'=>$daftar_matkul,                            
                                                                            'jumlah_sks'=>$daftar_matkul->sum('sks'),
                                                                            'kaprodi'=>$kaprodi,
                                                                            'tanggal'=>\App\Helpers\Helper::tanggal('d F Y')
                                                                        ],
                                                                        [],
                                                                        [
                                                                            'title' => 'KRS',
                                                                        ]);

                $file_pdf=\App\Helpers\Helper::public_path("exported/pdf/krs_".$krs->id.'.pdf');
                $pdf->save($file_pdf);

                $pdf_file="storage/exported/pdf/krs_".$krs->id.".pdf";

                return Response()->json([
                                        'status'=>1,
                                        'pid'=>'fetchdata',
                                        'krs'=>$krs,
                                        'pdf_file'=>$pdf_file                                    
                                    ], 200);
            }
            else
            {
                return Response()->json([
                    'status'=>0,
                    'pid'=>'fetchdata',        
                    'message'=>'Ketua program studi belum disetting di halaman Data Master -> Program Studi'
                ], 422);
            }
        }        
    }
}