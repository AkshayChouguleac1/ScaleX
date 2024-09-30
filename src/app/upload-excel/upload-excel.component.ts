import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent implements OnInit{
  uploadExcelForm!:FormGroup;
  uploadedExcel!:any[];
  excelFormObj!:Object;
  constructor(){}

  ngOnInit(): void {
    this.uploadExcelForm = new FormGroup({
      uploader:new FormControl("",Validators.email),
      uploadedFile:new FormControl()
    })
  }

  uploadExcelFile(event:any){
    this.excelFormObj={'uploader':this.uploadExcelForm.get('uploader')?.value,"uploadedFile":this.uploadedExcel};
    this.uploadedExcel=event.target.value;
    this.uploadExcelForm.get('uploadedFile')?.setValue(this.uploadedExcel)
  }

  toUploadExcel(){
    console.log(this.uploadExcelForm.value)
  }

}
