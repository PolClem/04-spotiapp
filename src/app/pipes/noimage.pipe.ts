import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(imgages: any[]): string {
    if (!imgages) {
      return 'assets/img/noimage.png';
    }

    if (imgages.length > 0) {
      return imgages[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }
}
