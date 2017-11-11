import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo',
})
export class TituloPipe implements PipeTransform {
  transform(value: string, default_:string="Titulo") {
    return (value?value:default_)
  }
}