import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent implements OnInit{
  selectedFile!:File;
  uploaderEmaill!:string;
  constructor(private uploadService:UploadService){}

  ngOnInit(): void {
  }

  uploadExcelFile(event:any){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  toUploadExcel(){
    const formData = new FormData();
    formData.append('uploader',this.uploaderEmaill);
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.uploadService.uploadExcel(formData);
  }

}
