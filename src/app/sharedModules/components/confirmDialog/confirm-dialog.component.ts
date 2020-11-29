import { Component, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmResult } from '../../models/confirm-result.enum';

@Component({
    selector: 'confirm-dialog',
    styleUrls: ['./confirm-dialog.component.scss'],
    templateUrl: './confirm-dialog.component.html'
  })
  export class ConfirmDialogComponent {
  
    @Input('infoText')
    public infoText: string;
    
    @Input('buttonOptional')
    public buttonOptional: string;
  
    @Input('buttonPositive')
    public buttonPositive: string;
  
    @Input('buttonNegative')
    public buttonNegative: string;
  
    type = ConfirmResult;
    
    constructor(@Inject(MAT_DIALOG_DATA) public data) {
      this.infoText = data && data.infoText;
      this.buttonPositive = data && data.buttonPositive;
      this.buttonOptional = data && data.buttonOptional;
      this.buttonNegative = data && data.buttonNegative;
    }
}
  

  
