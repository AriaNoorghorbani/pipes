import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string): any {
    if(value.length === 0 || filteredString === ''){
      return value
    };

    const filterArray = [];
    for(let item of value){
      if(item.status === filteredString){
        filterArray.push(item)
      }
    }
    return filterArray
  }
}