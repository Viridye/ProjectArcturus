import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(date: _moment.Moment, format: string = "DD/MM/YYYY"): string {
    if (_moment.isMoment(date) && date.isValid()) {
      return date.format(format);
    }
    else {
      return "";
    }
  }
}