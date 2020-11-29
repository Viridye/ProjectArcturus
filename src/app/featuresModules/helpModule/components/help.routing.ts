import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './helpComponent/help.component';



 //DEFINE routes
  const routes: Routes = [
    { path: '', component: HelpComponent }
  ];

 @NgModule({
     imports: [RouterModule.forChild(routes)],
     declarations: [
     ],
 })

 export class HelpRouting { }