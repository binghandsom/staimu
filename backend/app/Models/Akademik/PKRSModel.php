<?php

namespace App\Models\Akademik;

use Illuminate\Database\Eloquent\Model;

class PKRSModel extends Model {    
     /**
     * nama tabel model ini.
     *
     * @var string
     */
    protected $table = 'pe3_pkrs';
    /**
     * primary key tabel ini.
     *
     * @var string
     */
    protected $primaryKey = 'id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',        
        'user_id',        
        'nim',        
        'penyelenggaraan_id', 
        'tambah', 
        'hapus', 
        'batal',         
        'sah',        
    ];
    /**
     * enable auto_increment.
     *
     * @var string
     */
    public $incrementing = false;
    /**
     * activated timestamps.
     *
     * @var string
     */
    public $timestamps = true;
        
    public function mahasiswa()
    {
        return $this->belongsTo('App\Models\SPMB\FormulirPendaftaranModel','user_id','user_id');
    }
}