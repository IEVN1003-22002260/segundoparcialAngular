import { Pipe, PipeTransform } from '@angular/core';
import { MaestrosUtl } from './maestrosUTL';

@Pipe({
  name: 'maestroFilter',
  standalone: true,
})
export class MaestroFilterPipe implements PipeTransform {
  transform(value: MaestrosUtl[], args: string): MaestrosUtl[] {
    if (!value) return [];
    let filter: string = args ? args.toLocaleLowerCase() : "";
    return filter
      ? value.filter((maestro: MaestrosUtl) =>
          maestro.nombre.toLocaleLowerCase().indexOf(filter) !== -1)
      : value;
  }
}