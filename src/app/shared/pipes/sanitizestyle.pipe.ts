import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeStyle'
})
export class SanitizeStylePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){

  }

  transform(content: string):SafeHtml{
    return this.sanitizer.bypassSecurityTrustStyle(content);
  }

}
