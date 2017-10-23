import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[requiredFile]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: FileValidator, multi: true
    }
  ]
})
export class FileValidator implements Validator {

 static validate(c: FormControl) : {[key: string]: any}{
   return c.value == null || c.value.length == 0 ? {"required": true} : null;
 }

 validate(c: FormControl) : {[key: string]: any} {
   return FileValidator.validate(c);
 }

}
