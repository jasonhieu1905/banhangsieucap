import { Ng2Uploader } from './uploader.service';
import { Directive, ElementRef, EventEmitter, Component } from '@angular/core';

@Component({
  selector: '[ng-file-select]',
  templateUrl: './uploader.component.html',
  inputs: ['options: ng-file-select'],
  outputs: ['onUpload'],
  host: { '(change)': 'onFiles()' }
})
export class NgFileSelect {
  uploader: Ng2Uploader;
  options: any;
  onUpload: EventEmitter<any> = new EventEmitter();

  constructor(public el: ElementRef) {
    this.uploader = new Ng2Uploader();
    setTimeout(() => {
      this.uploader.setOptions(this.options);
    });

    this.uploader._emitter.subscribe((data) => {
      this.onUpload.emit(data);
    });
  }

  onFiles(): void {
    let files = this.el.nativeElement.files;
    if (files.length) {
      this.uploader.addFilesToQueue(files);
    }
  }
}