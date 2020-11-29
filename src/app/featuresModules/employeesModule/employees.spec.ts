import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { Employee } from 'src/app/sharedModules/models/employee.model';
import { EmployeesSevice } from "./service/employees.service";

describe('eservice : employees ', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [EmployeesSevice]
        });
    });

    it('should return expected position (HttpClient called once)', inject([EmployeesSevice], (service: EmployeesSevice) => {
        const expectedResult: any[] = [{ positions: ["full-stack developer","front-end developer","sw admin","help desk","scrum master","product manager"]}];      
      
        service.getPositions().subscribe(
          data => expect(data).toEqual(expectedResult, 'expected positions'),
          fail
        );
    }));
})