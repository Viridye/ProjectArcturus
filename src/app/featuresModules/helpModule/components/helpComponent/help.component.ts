import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'help-component',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelpComponent implements OnInit, AfterViewInit {
  public pageTitle: string = 'Help';

  constructor() {
    document.getElementById('headerPageTitle').innerHTML = this.pageTitle;

    //change webapp title
    document.title = `Project Arcturus | ${this.pageTitle}`;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }


  ngOnDestroy(): void {
  }

}
