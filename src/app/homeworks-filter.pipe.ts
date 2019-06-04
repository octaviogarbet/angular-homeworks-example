import { Pipe, PipeTransform } from '@angular/core';
import { Homework } from './models/homework';

@Pipe({
  name: 'HomeworksFilter'
})
export class HomeworksFilterPipe implements PipeTransform {

  transform(list: Homework[], arg: string): Homework[] {
    return list.filter(
      x => x.description.toLocaleLowerCase()
        .includes(arg.toLocaleLowerCase())
    );
  }

}
