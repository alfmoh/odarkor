import { ControlValueAccessor } from '@angular/forms/src/directives';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: 'input[type=file]',
  host: {
    "(change)": "onChange($event.target.files)",
    "(blur)": "onTouched()"
  },
  providers: [
      {
        provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true
      }
  ]
})
export class FileValueAccessor implements ControlValueAccessor {

value: any;
onChange = (_) => {};
onTouched = (_) => {};

    writeValue(value) {}

    registerOnChange(fn: any) {this.onChange = fn;}

    registerOnTouched(fn: any) { this.onTouched = fn;}
}
