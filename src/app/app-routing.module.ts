import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPage } from './coreModule/pages/not-found/not-found.page';

const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () => import('./featuresModules/employeesModule/employees.module').then(m => m.EmployeesModule),
  },
  {
    path: 'help',
    loadChildren: () => import('./featuresModules/helpModule/components/help.module').then(m => m.HelpModule),
  },
  { 
    path: '',
    loadChildren: () => import('./featuresModules/helpModule/components/help.module').then(m => m.HelpModule),
  },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
