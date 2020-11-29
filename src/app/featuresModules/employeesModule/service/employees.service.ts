import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class EmployeesSevice {

    public dataStorage = null;
    public searchValue = "";

    constructor(public http: HttpClient){        
    }

    public getPositions(): Observable<any> {
        return this.http.get<any>("https://ibillboard.com/api/positions");
    }
}