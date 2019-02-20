import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) { return ''; }
    // const words = value.trim().split(' ');
    // for (let i = 0; i < words.length; ++i) {
    //   // if (!words[i]) { continue; }
    //   words[i] = words[i].slice(1) + words[i][0] + 'a';
    // }
    // return words.join(' ');

    return value
            .trim()
            .split(' ')
            .map((word) => word.slice(1) + word[0] + 'a')
            .join(' ');
  }

}
