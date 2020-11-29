import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFormatPipe } from './dateFormat.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [
      DateFormatPipe
    ],
    exports: [
      DateFormatPipe
    ]
  })
  export class PipesModule { }
  