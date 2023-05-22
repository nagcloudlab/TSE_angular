import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foo'
})
export class FooPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value + ":foo";
  }

}
