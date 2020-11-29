import { NgModule } from '@angular/core';
import { EmployeesComponent } from './components/employeesComponent/employees.component';
import { EmployeesRouting } from './employees.routing';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/sharedModules/pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SharedComponentsModule } from 'src/app/sharedModules/components/shared-components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeDialogComponent } from './components/employeeDialogComponent/employee-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
    imports: [
        CommonModule,
        EmployeesRouting,
        MatTableModule,
        PipesModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule, 
        MatButtonModule,
        MatMenuModule,
        SharedComponentsModule,
        MatDialogModule,
        FlexLayoutModule,
        MatInputModule,
        MatSelectModule, 
        MatDatepickerModule,
        MatMomentDateModule
    ],
    declarations: [EmployeesComponent,
        EmployeeDialogComponent],
    exports: [EmployeesComponent,
        EmployeeDialogComponent]
})
export class EmployeesModule {}