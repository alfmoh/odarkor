import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCase'
})
export class CustomTitleCasePipe implements PipeTransform {


  transform(value: string, args?: any): any {
    if (!value) return null;

    let words = value.split(" ");
    for (var index = 0; index < words.length; index++) {
      var word = words[index];
      if (index > 0 && this.isPreposition(word)) {
        words[index] = word.toLowerCase();
      }
      else {
        words[index] = this.toTitleCase(word);
      }
    }
    return words.join(" ");

  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let lowerCaseWords = ["a","an","of", "the"];

    return lowerCaseWords.includes(word.toLowerCase());

  }

}
