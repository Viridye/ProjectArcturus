import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'not-found-page',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.scss'],
    encapsulation: ViewEncapsulation.None
})

export class NotFoundPage  {

private title: string = "Not found page";

    constructor() {
        document.getElementById("headerPageTitle").innerHTML = this.title;
        //change webapp title
        document.title = `Project Arcturus | ${this.title}`;
    }
}
