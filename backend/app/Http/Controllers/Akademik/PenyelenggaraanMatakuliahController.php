<?php

namespace App\Http\Controllers\Akademik;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Akademik\PenyelenggaraanMatakuliahModel;
use App\Models\Akademik\PenyelenggaraanDosenModel;
use App\Models\UserDosen;

use Ramsey\Uuid\Uuid;

class PenyelenggaraanMatakuliahController extends Controller
{
    /**
     * daftar penyelenggaraan
     */
    public function index(Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE');

        $this->validate($request, [
            'ta'=>'required',
            'semester_akademik'=>'required',
            'prodi_id'=>'required'
        ]);

        $ta=$request->input('ta');
        $prodi_id=$request->input('prodi_id');
        $semester_akademik=$request->input('semester_akademik');

        $penyelenggaraan=PenyelenggaraanMatakuliahModel::select(\DB::raw('
                                                            id,
                                                            kmatkul,
                                                            nmatkul,                                                            
                                                            sks,       
                                                            semester,
                                                            ta_matkul,                                                                                                                 
                                                            0 AS jumlah_dosen,
                                                            0 AS jumlah_mhs
                                                        '))
                                                        ->where('tahun',$ta)
                                                        ->where('idsmt',$semester_akademik)
                                                        ->where('kjur',$prodi_id)
                                                        ->orderBy('semester','ASC')                      
                                                        ->orderBy('kmatkul','ASC')    
                                                        ->orderBy('ta_matkul','ASC')    
                                                        ->get();
                                                        
        $penyelenggaraan->transform(function ($item,$key){
            $item->jumlah_dosen=\DB::table('pe3_penyelenggaraan_dosen')->where('penyelenggaraan_id',$item->id)->count();
            $item->jumlah_mhs=0;
            return $item;
        });

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',  
                                    'penyelenggaraan'=>$penyelenggaraan,                                                                                                                                   
                                    'message'=>'Fetch data penyelenggaraan matakuliah berhasil.'
                                ],200); 
    }
    /**
     * simpan
     */
    public function store(Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE');

        $matkul_selected=json_decode($request->input('matkul_selected'),true);
        $request->merge(['matkul_selected'=>$matkul_selected]);

        $this->validate($request, [            
            'ta'=>'required',
            'semester_akademik'=>'required',
            'prodi_id'=>'required',   
            'matkul_selected.*'=>'required',                   
        ]);
        $ta=$request->input('ta');
        $prodi_id=$request->input('prodi_id');
        $semester_akademik=$request->input('semester_akademik');

        $daftar_matkul=[];
        foreach ($matkul_selected as $v)
        {
            $daftar_matkul[]=[
                'id'=>Uuid::uuid4()->toString(),
                'matkul_id'=>$v['id'],
                'kmatkul'=>$v['kmatkul'],
                'nmatkul'=>$v['nmatkul'],
                'sks'=>$v['sks'],
                'semester'=>$v['semester'],
                'ta_matkul'=>$v['ta'],
                'idsmt'=>$semester_akademik,
                'tahun'=>$ta,
                'kjur'=>$prodi_id,
                'created_at'=>\Carbon\Carbon::now(),
                'updated_at'=>\Carbon\Carbon::now()
            ];
        }
        PenyelenggaraanMatakuliahModel::insert($daftar_matkul);

        return Response()->json([
                                'status'=>1,
                                'pid'=>'store',                    
                                'matkul_selected'=>$matkul_selected,                                            
                                'message'=>'Penyelenggaraan matakuliah berhasil ditambahkan.'
                            ],200);
    }
    public function show(Request $request,$id)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_SHOW');

        $penyelenggaraan = PenyelenggaraanMatakuliahModel::find($id);
        if (is_null($penyelenggaraan))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',                
                                    'message'=>["Penyelenggaraan dengan ($id) gagal diperoleh"]
                                ],422); 
        }
        else
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',                    
                                    'penyelenggaraan'=>$penyelenggaraan,                                            
                                    'message'=>"Penyelenggaraan dengan id ($id) matakuliah berhasil diperoleh."
                                ],200);
        }
    }
    public function pengampu (Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_SHOW');

        $this->validate($request, [            
            'pid'=>'required', 
            'idpenyelenggaraan'=>'required|exists:pe3_penyelenggaraan,id'           
        ]);
        
        $data=[];
        $idpenyelenggaraan=$request->input('idpenyelenggaraan');
        switch($request->input('pid'))
        {
            case 'belumterdaftar':
                $data=UserDosen::select(\DB::raw('
                                    user_id,
                                    nidn,                                    
                                    nama_dosen
                                '))       
                                ->where('active',1)                                  
                                ->whereNotIn('user_id',function($query) use ($idpenyelenggaraan){
                                    $query->select('user_id')
                                        ->from('pe3_penyelenggaraan_dosen')
                                        ->where('penyelenggaraan_id',$idpenyelenggaraan);                                        
                                })
                                ->orderBy('nama_dosen','ASC')                                                      
                                ->get();
            break;
            case 'terdaftar':
                $data=UserDosen::select(\DB::raw('
                                    pe3_penyelenggaraan_dosen.id,
                                    pe3_penyelenggaraan_dosen.penyelenggaraan_id,
                                    pe3_penyelenggaraan_dosen.user_id,
                                    pe3_dosen.nidn,                                    
                                    pe3_dosen.nama_dosen,
                                    pe3_penyelenggaraan_dosen.is_ketua,
                                    pe3_penyelenggaraan_dosen.created_at,
                                    pe3_penyelenggaraan_dosen.updated_at
                                '))       
                                ->join('pe3_penyelenggaraan_dosen','pe3_penyelenggaraan_dosen.user_id','pe3_dosen.user_id')                                                                  
                                ->where('penyelenggaraan_id',$idpenyelenggaraan)                                       
                                ->orderBy('nama_dosen','ASC')                                                      
                                ->get();
            break;
        }
        return Response()->json([
                                'status'=>1,
                                'pid'=>'fetchdata',                                
                                'dosen'=>$data,
                                'message'=>'Fetch data Dosen Pengampu berhasil diperoleh'
                            ],200);  
    }
    public function storedosenpengampu (Request $request)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE');

        $this->validate($request, [   
            'penyelenggaraan_id'=>'required|exists:pe3_penyelenggaraan,id',           
            'dosen_id'=>'required|exists:pe3_dosen,user_id',
            'is_ketua'=>'required'
        ]);
        $idpenyelenggaraan=$request->input('penyelenggaraan_id');
        if ($request->input('is_ketua'))
        {
            PenyelenggaraanDosenModel::where('penyelenggaraan_id',$idpenyelenggaraan)
                                    ->update(['is_ketua'=>false]);
        }
        $dosen=PenyelenggaraanDosenModel::create([
            'id'=>Uuid::uuid4()->toString(),
            'penyelenggaraan_id'=>$idpenyelenggaraan,
            'user_id'=>$request->input('dosen_id'),
            'is_ketua'=>$request->input('is_ketua')
        ]);
        
        return Response()->json([
                                'status'=>1,
                                'pid'=>'store',                    
                                'dosen'=>$dosen,                                            
                                'message'=>'Dosen pengampu Penyelenggaraan matakuliah ini berhasil ditambahkan.'
                            ],200);
    }

    public function updateketua(Request $request,$id)
    {
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_UPDATE');
        
        $dosen = PenyelenggaraanDosenModel::find($id); 

        if (is_null($dosen))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'destroy',                
                                    'message'=>["Dosen Pengampu dengan ($id) gagal dihapus"]
                                ],422); 
        }
        else
        {
            $this->validate($request, [                                     
                'is_ketua'=>'required'
            ]);
            $idpenyelenggaraan=$request->input('penyelenggaraan_id');

            PenyelenggaraanDosenModel::where('penyelenggaraan_id',$idpenyelenggaraan)
                                    ->update(['is_ketua'=>false]);

            $dosen->is_ketua=$request->input('is_ketua');
            $dosen->save();
            
            \App\Models\System\ActivityLog::log($request,[
                                                                'object' => $dosen, 
                                                                'object_id' => $dosen->id, 
                                                                'user_id' => $this->getUserid(), 
                                                                'message' => 'Mengupdate ketua group dosen pengampu dengan id penyelenggaraan ('.$idpenyelenggaraan.') berhasil'
                                                            ]);
            
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'destroy',                
                                        'message' => 'Mengupdate ketua group dosen pengampu dengan id penyelenggaraan ('.$idpenyelenggaraan.') berhasil'
                                    ],200);         
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    { 
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_DESTROY');

        $penyelenggaraan = PenyelenggaraanMatakuliahModel::find($id); 
        
        if (is_null($penyelenggaraan))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'destroy',                
                                    'message'=>["Penyelenggaraan dengan ($id) gagal dihapus"]
                                ],422); 
        }
        else
        {
            \App\Models\System\ActivityLog::log($request,[
                                                                'object' => $penyelenggaraan, 
                                                                'object_id' => $penyelenggaraan->id, 
                                                                'user_id' => $this->getUserid(), 
                                                                'message' => 'Menghapus penyelenggaraan matakuliah dengan id ('.$id.') berhasil'
                                                            ]);
            $penyelenggaraan->delete();
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'destroy',                
                                        'message'=>"Penyelenggaraan dengan ID ($id) berhasil dihapus"
                                    ],200);         
        }
                  
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroypengampu(Request $request,$id)
    { 
        $this->hasPermissionTo('AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_DESTROY');

        $dosen = PenyelenggaraanDosenModel::find($id); 
        
        if (is_null($dosen))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'destroy',                
                                    'message'=>["Dosen Pengampu dengan ($id) gagal dihapus"]
                                ],422); 
        }
        else
        {
            \App\Models\System\ActivityLog::log($request,[
                                                                'object' => $dosen, 
                                                                'object_id' => $dosen->id, 
                                                                'user_id' => $this->getUserid(), 
                                                                'message' => 'Menghapus penyelenggaraan dosen dengan id ('.$id.') berhasil'
                                                            ]);
            $dosen->delete();
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'destroy',                
                                        'message'=>"Penyelenggaraan Dosen dengan ID ($id) berhasil dihapus"
                                    ],200);         
        }
                  
    }
}
