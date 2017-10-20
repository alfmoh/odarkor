import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){

  }

  transform(content: string){
    // return this.sanitizer.bypassSecurityTrustStyle(content);
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
