import { ControlValueAccessor } from '@angular/forms/src/directives';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AfterViewInit, Component, EventEmitter, forwardRef, Input, OnDestroy, Output } from '@angular/core';

const contentAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=>TinyMceComponent),
  multi: true
};

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>`,
  providers: [contentAccessor]
})
export class TinyMceComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
  onModelChange: any;
  onTouch: any;
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  registerOnTouched(fn){
    this.onTouch = fn;
  }

  registerOnChange(fn){
    this.onModelChange = fn;
  }

  writeValue(value){
    this.editor = value;
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
