import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmResult } from 'src/app/sharedModules/models/confirm-result.enum';
import { Employee } from 'src/app/sharedModules/models/employee.model';

@Component({
    selector: 'employee-dialog',
    styleUrls: ['./employee-dialog.component.scss'],
    templateUrl: './employee-dialog.component.html'
  })
  export class EmployeeDialogComponent {
  
    public form: FormGroup;

    @Input('employee')
    public employee: Employee;

    @Input('positions')
    public positions: string[] = [];
    
    @Input('buttonOptional')
    public buttonOptional: string;
  
    @Input('buttonPositive')
    public buttonPositive: string;
  
    @Input('buttonNegative')
    public buttonNegative: string;
  
    type = ConfirmResult;
    
    constructor(@Inject(MAT_DIALOG_DATA) public data,
        private fb: FormBuilder) {
            
        this.employee = data && data.employee;
        this.positions = data && data.positions;
        this.buttonPositive = data && data.buttonPositive;
        this.buttonOptional = data && data.buttonOptional;
        this.buttonNegative = data && data.buttonNegative;

        this.form = this.validationRules();
        this.form.reset(Object.assign({}, data.employee));
        this.form.markAllAsTouched();
    }

    validationRules(): FormGroup {
        return this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            position: ['', Validators.required],
            birthdate: null
        });
      }

      public discard(): void{
        this.form.reset(Object.assign({}, this.employee));
      }
}
  

  
