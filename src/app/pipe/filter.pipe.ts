import { Pipe, PipeTransform } from '@angular/core';
import { ContactClass } from './../models/contact-model-class';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public resultFilter: ContactClass []= [];

  transform(contactList: ContactClass[] = [], filterText:string ): any {
    this.resultFilter = [];

    if(!filterText){return contactList}

    contactList.forEach(element => {
      if ((element.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1) 
          || ((element.lastName.toLowerCase().indexOf(filterText.toLowerCase()) > -1))
          || ((element.email.toLowerCase().indexOf(filterText.toLowerCase()) > -1))
          ) {
        this.resultFilter.push(element);
      }
  })
    return this.resultFilter;
  }

}
