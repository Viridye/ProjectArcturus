import { Component, ViewEncapsulation, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/sharedModules/components/confirmDialog/confirm-dialog.component';
import { ConfirmResult } from 'src/app/sharedModules/models/confirm-result.enum';
import { Employee } from 'src/app/sharedModules/models/employee.model';
import { EmployeesSevice } from '../../service/employees.service';
import { EmployeeDialogComponent } from '../employeeDialogComponent/employee-dialog.component';

@Component({
  selector: 'employees-component',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit {

    @ViewChild('input',{static: true}) searchInput;

    public pageTitle: string = 'Employees';
    displayedColumns: string[] = ['firstName', 'lastName', 'position', 'birthdate','_id'];

    public dataSource = new MatTableDataSource<Employee>();
    public positions: string[] = [];
    
    private subPosition: Subscription;

    constructor(public employeesSevice: EmployeesSevice,
        public dialog: MatDialog) {
        document.getElementById('headerPageTitle').innerHTML = this.pageTitle;
        //change webapp title
        document.title = `Project Arcturus | ${this.pageTitle}`;
    }

    ngOnInit() {
        // we need positions for add new and edit + for generating dummy data, so why not dl at start and just have them? :)
        this.subPosition = this.employeesSevice.getPositions().subscribe(data => {
            this.positions = data?.positions;
        },
        // if for some reason we dont get data and end up in error, then we just put none as position
        error => {
            this.positions = ['None'];
        } );
        
        // this is just basic store data to service to just not lose them if we change page. 
        // for something more complex we can use state management like NGRX or Akita,
        // but here this one should be ok, because if we remove help page then we have only one page and then who cares.
        // but this is just not lose data if we go to help and back :D
        // and search value we store too because datasource is in last state and that counts search too.
        if( this.employeesSevice.dataStorage != null) {
            this.dataSource = this.employeesSevice.dataStorage;
            this.searchInput.nativeElement.value = this.employeesSevice.searchValue;
        }    
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
        this.employeesSevice.dataStorage = this.dataSource;
        this.subPosition.unsubscribe();

    }

    public applySearch(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.employeesSevice.searchValue = filterValue.trim().toLowerCase();
    }

    public createEmployee(): void {
        let employee:Employee = new Employee; 
        this.employeeDialog(employee, -1);
    }

    public editEmployee(index: number): void {
        this.employeeDialog(this.dataSource.filteredData[index], index);
    }

    public deleteEmployee(index: number): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '250px',
            data: {infoText: 'Do you want delete record?', buttonPositive: 'Confirm', buttonNegative: 'Cancel'},
            autoFocus: false
        })
        dialogRef.afterClosed().subscribe((result : ConfirmResult) => {
            if (result == ConfirmResult.Positive) {
                // we get index of filtered data, so if we want to delete record then we must find index of it in data
                let indexOfData: number = this.dataSource.data.findIndex(x => x == this.dataSource.filteredData[index]);
                this.dataSource.data.splice(indexOfData,1);
                this.dataSource._updateChangeSubscription();
            }
        })
    }

    // this is for edit and add new
    private employeeDialog(employee: Employee, index: number): void {
        const dialogRef = this.dialog.open(EmployeeDialogComponent, {
            width: '500px',
            data: {employee: employee, positions: this.positions, buttonPositive: 'Confirm', buttonNegative: 'Cancel', buttonOptional: 'Discard'},
            autoFocus: false
        })
        dialogRef.afterClosed().subscribe((result : [ConfirmResult,Employee]) => {
            if (result[0] == ConfirmResult.Positive) {
                if(index == -1){
                    this.dataSource.data.unshift(result[1]);
                }
                else {
                    this.dataSource.data[index] = result[1];
                }                
                this.dataSource._updateChangeSubscription();
            }
        })
    }



    // this one is just to generate some dummy data to work with
    public generateTestData(): void {
        let employees: Employee[] = [];
        let firstNames: string[] = ["Jakub","Martin","Michal","Pavel","Jindra","David","Vojta","Juraj","Honza","Petr"];
        let lastNames: string[] = ["Svoboda","Fiala","Zeman","Urban","Musil","Holub","Soukup","Valenta","Janda","Mach"];
        let positions: string[] = this.positions;

        for (let index = 0; index < 50; index++){
            let employee:Employee = new Employee;
            employee.firstName = firstNames[this.getRandomNumber(0,9)]
            employee.lastName = lastNames[this.getRandomNumber(0,9)];
            employee.position = (positions.length > 0) ? positions[this.getRandomNumber(0,positions.length - 1)] : "";
            // dates are terrible(date + time + timezone are worst) and moment is only way how to do some work with them.
            employee.birthdate = moment(new Date(this.getRandomNumber(1980,2000),this.getRandomNumber(1,12),this.getRandomNumber(1,28)))
            employees.push(employee);
        }
        this.dataSource.data = employees;
        this.dataSource._updateChangeSubscription();
    }

    private getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

}
