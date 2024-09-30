import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';

const routes: Routes = [
  {path:"upload",component:UploadExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
