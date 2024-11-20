import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterDto } from '../Models/FilterDto';

@Injectable({
  providedIn: 'root'
})
export class BiomassService {

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
  
  fetchBiomasses(filterDto:FilterDto){
    this.http.post<any>(this.apiUrl, filterDto, this.getNormalHeaders()).subscribe(response => {
    return response['date'];
  }, error => {
    return null;
  });
  }
}
