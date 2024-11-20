import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  apiUrl = "http://localhost:8080/biomass/uploadFile";

  constructor(private http: HttpClient) { }

  public getNormalHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  public getFileHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return httpOptions;
  }

  uploadExcel(formData:FormData){
    this.http.post<any>(this.apiUrl, formData, this.getFileHeaders()).subscribe(response => {
    // Handle successful response
  }, error => {
    // Handle error response
  });
  }
}
