<?php

namespace App\Models\Report;

use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use \PhpOffice\PhpSpreadsheet\Cell\DataType;

use App\Models\Keuangan\TransaksiModel;
use App\Models\Keuangan\TransaksiDetailModel;

use App\Helpers\Helper;

class ReportKeuanganDulangMHSBaruModel extends ReportModel
{   
  public function __construct($dataReport)
  {
      parent::__construct($dataReport); 
  }    
  public function printtoexcel1()  
  {
    $ta=$this->dataReport['TA'];
    $prodi_id=$this->dataReport['prodi_id'];
    $nama_prodi=$this->dataReport['nama_prodi'];

    $this->spreadsheet->getProperties()->setTitle("Report Dulang MHS Baru");
    $this->spreadsheet->getProperties()->setSubject("Report Dulang MHS Baru");

    $sheet = $this->spreadsheet->getActiveSheet();    
    $sheet->setTitle ('LAPORAN SPP');

    $sheet->getParent()->getDefaultStyle()->applyFromArray([
        'font' => [
            'name' => 'Arial',
            'size' => '9',
        ],
    ]);

    $row=2;
    $sheet->mergeCells("A$row:H$row");				                
    $sheet->setCellValue("A$row","LAPORAN DAFTAR ULANG MAHASISWA BARU");

    $row+=1;
    $sheet->mergeCells("A$row:H$row");		
    $sheet->setCellValue("A$row"," PROGRAM STUDI $nama_prodi TAHUN AKADEMIK $ta"); 
    
    $styleArray=array( 
        'font' => array('bold' => true,'size'=>'11'),
        'alignment' => array('horizontal'=>Alignment::HORIZONTAL_CENTER,
                            'vertical'=>Alignment::HORIZONTAL_CENTER),								
    );           
    
    $sheet->getStyle("A1:A$row")->applyFromArray($styleArray);

    $sheet->getRowDimension(26)->setRowHeight(22);
    $sheet->getColumnDimension('A')->setWidth(7);
    $sheet->getColumnDimension('B')->setWidth(25);
    $sheet->getColumnDimension('C')->setWidth(20);
    $sheet->getColumnDimension('D')->setWidth(17);
    $sheet->getColumnDimension('E')->setWidth(50);
    $sheet->getColumnDimension('F')->setWidth(23);
    $sheet->getColumnDimension('G')->setWidth(15);    
    $sheet->getColumnDimension('H')->setWidth(22);
    
    $row+=2;    
    $sheet->setCellValue("A$row",'NO');    
    $sheet->setCellValue("B$row",'KODE BILLING');
    $sheet->setCellValue("C$row",'TANGGAL TRANSAKSI');
    $sheet->setCellValue("D$row",'NIM');
    $sheet->setCellValue("E$row",'NAMA MAHASISWA');
    $sheet->setCellValue("F$row",'KELAS');
    $sheet->setCellValue("G$row",'STATUS');    
    $sheet->setCellValue("H$row",'JUMLAH');
    

    $styleArray=array(
        'font' => array('bold' => true),
        'alignment' => array('horizontal'=>Alignment::HORIZONTAL_CENTER,
                            'vertical'=>Alignment::HORIZONTAL_CENTER),
        'borders' => array('allBorders' => array('borderStyle' =>Border::BORDER_THIN))
    );
    $sheet->getStyle("A$row:H$row")->applyFromArray($styleArray);
    $sheet->getStyle("A$row:H$row")->getAlignment()->setWrapText(true);
    
    $data = TransaksiDetailModel::select(\DB::raw('                                                  
                                                CONCAT(pe3_transaksi.no_transaksi,\' \') AS no_transaksi,
                                                pe3_transaksi_detail.biaya,
                                                pe3_transaksi_detail.jumlah,
                                                pe3_transaksi_detail.bulan,                                                  
                                                pe3_transaksi_detail.tahun,                                                  
                                                pe3_transaksi_detail.sub_total,
                                                pe3_formulir_pendaftaran.nama_mhs,
                                                pe3_kelas.nkelas,
                                                pe3_transaksi.no_faktur,
                                                pe3_transaksi.kjur,
                                                pe3_transaksi.ta,
                                                pe3_transaksi.idsmt,
                                                pe3_transaksi.idkelas,
                                                pe3_transaksi.no_formulir,                                                        
                                                COALESCE(pe3_transaksi.nim,\'N.A\') AS nim,
                                                pe3_transaksi.status,
                                                pe3_status_transaksi.nama_status                                               
                                            '))
                                            ->join('pe3_transaksi','pe3_transaksi_detail.transaksi_id','pe3_transaksi.id')
                                            ->join('pe3_formulir_pendaftaran','pe3_formulir_pendaftaran.user_id','pe3_transaksi_detail.user_id')
                                            ->join('pe3_status_transaksi','pe3_transaksi.status','pe3_status_transaksi.id_status')                                              
                                            ->leftJoin('pe3_kelas','pe3_kelas.idkelas','pe3_transaksi.idkelas')        
                                            ->where('pe3_transaksi_detail.kombi_id',102)
                                            ->where('pe3_transaksi.ta',$ta)
                                            ->where('pe3_transaksi.kjur',$prodi_id)                                                                                          
                                            ->orderBy('pe3_formulir_pendaftaran.nama_mhs','ASC')
                                            ->get();

    $no=1;    
    $row+=1;
    $row_awal=$row; 
    $total_paid=0;
    $total_unpaid=0;
    $total_cancel=0;
    foreach ($data as $v)
    {
      $sheet->setCellValue("A$row",$no);
      $sheet->setCellValueExplicit("B$row",$v->no_transaksi,\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);
      $sheet->setCellValue("C$row",Helper::tanggal('d F Y',$v->tanggal));
      $sheet->setCellValueExplicit("D$row",$v->nim,\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);
      $sheet->setCellValue("E$row",$v->nama_mhs);
      $sheet->setCellValue("F$row",$v->nkelas);
      $sheet->setCellValue("G$row",$v->nama_status);      
      $sheet->setCellValueExplicit("H$row",Helper::formatUang($v->sub_total),\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);     
      switch($v->status)
      {
        case 0:                
          $total_unpaid += $v->sub_total;
          $sheet->getStyle("A$row:H$row")->getFill()
                      ->setFillType(Fill::FILL_SOLID)
                      ->getStartColor()->setARGB('FFFF00');
        break;
        case 1:                
          $total_paid += $v->sub_total;
            
        break;
        case 2:                
          $total_cancel += $v->sub_total;
          $sheet->getStyle("A$row:H$row")->getFill()
                      ->setFillType(Fill::FILL_SOLID)
                      ->getStartColor()->setARGB('FF9999');
        break;
      }
      $row+=1;
      $no+=1;
    }    

    $row-=1;          
    $styleArray=array(								
        'alignment' => array('horizontal'=>Alignment::HORIZONTAL_CENTER,
                            'vertical'=>Alignment::HORIZONTAL_CENTER),
        'borders' => array('allBorders' => array('borderStyle' =>Border::BORDER_THIN))
    );   																					 
    $sheet->getStyle("A$row_awal:H$row")->applyFromArray($styleArray);
    $sheet->getStyle("A$row_awal:H$row")->getAlignment()->setWrapText(true);

    $styleArray=array(								
        'alignment' => array('horizontal'=>Alignment::HORIZONTAL_LEFT)
    );																					 
    $sheet->getStyle("E$row_awal:E$row")->applyFromArray($styleArray);
    $sheet->getStyle("H$row_awal:H$row")->applyFromArray($styleArray);
    
    $row+=1;
    $row_awal_mhs=$row;    
    $sheet->setCellValue("G$row",'SUB TOTAL PAID');
    $sheet->setCellValueExplicit("H$row",Helper::formatUang($total_paid),\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);
    $row+=1;    
    $sheet->setCellValue("G$row",'SUB TOTAL UNPAID');
    $sheet->setCellValueExplicit("H$row",Helper::formatUang($total_unpaid),\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);
    $row+=1;    
    $sheet->setCellValue("G$row",'SUB TOTAL CANCEL');
    $sheet->setCellValueExplicit("H$row",Helper::formatUang($total_cancel),\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);
    $row+=1;    
    $sheet->setCellValue("G$row",'TOTAL');
    $sheet->setCellValueExplicit("H$row",Helper::formatUang($total_paid+$total_unpaid+$total_cancel),\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);

    $styleArray=array(
      'font' => array('bold' => true)
    );
    $sheet->getStyle("H$row_awal_mhs:H$row")->applyFromArray($styleArray);

    $styleArray=array(								
      'alignment' => array('horizontal'=>Alignment::HORIZONTAL_RIGHT)
    );																					 
    $sheet->getStyle("H$row_awal:H$row")->applyFromArray($styleArray);  
    
    $generate_date=date('Y-m-d_H_m_s');
    return $this->download("registrasi_krs_$generate_date.xlsx");
  }    
}