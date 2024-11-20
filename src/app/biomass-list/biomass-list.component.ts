import { Component, OnInit } from '@angular/core';
import { BiomassService } from './biomass.service';
import { FilterDto } from '../Models/FilterDto';

@Component({
  selector: 'app-biomass-list',
  templateUrl: './biomass-list.component.html',
  styleUrls: ['./biomass-list.component.css']
})
export class BiomassListComponent implements OnInit{
  biomassList:any=[];
  constructor(private biomassService:BiomassService){}
  ngOnInit(){
    this.biomassList=this.biomassService.fetchBiomasses(new FilterDto());
  }
  
}
