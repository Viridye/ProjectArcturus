import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employeesComponent/employees.component';



 //DEFINE routes
  const routes: Routes = [
    { path: '', component: EmployeesComponent }
  ];

 @NgModule({
     imports: [RouterModule.forChild(routes)],
     declarations: [
     ],
 })

 export class EmployeesRouting { }