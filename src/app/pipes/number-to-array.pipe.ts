import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toArr'})
export class NumberToArrayPipe implements PipeTransform {
  transform(value): any {
    const res = [];
    for (let i = 0; i < value; i++) {
        res.push(i);
    }
    return res;
  }
}
