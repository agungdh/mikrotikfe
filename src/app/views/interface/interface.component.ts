import { Component, OnInit } from '@angular/core';
import { MikrotikService, ResponseInterface } from '../../mikrotik.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  templateUrl: 'interface.component.html'
})
export class InterfaceComponent {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  interface: ResponseInterface;

  indihomeUpload = {
    canvasWidth: 300,
    needleValue: 0,
    centralLabel: '0',
    name: '',
    bottomLabel: '',
    options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        rangeLabel: ['0', '20'],
        needleStartValue: 0,
    }
  }

  indihomeDownload = {
    canvasWidth: 300,
    needleValue: 0,
    centralLabel: '0',
    name: '',
    bottomLabel: '',
    options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        rangeLabel: ['0', '100'],
        needleStartValue: 0,
    }
  }

  iconUpload = {
    canvasWidth: 300,
    needleValue: 0,
    centralLabel: '0',
    name: '',
    bottomLabel: '',
    options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        rangeLabel: ['0', '30'],
        needleStartValue: 0,
    }
  }

  iconDownload = {
    canvasWidth: 300,
    needleValue: 0,
    centralLabel: '0',
    name: '',
    bottomLabel: '',
    options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        rangeLabel: ['0', '30'],
        needleStartValue: 0,
    }
  }

  constructor(private mikrotikService: MikrotikService) {}

  ngOnInit(): void {
      this.getInterfaceData();
  }

  getInterfaceData() {
    this.mikrotikService.getInterfaceData().pipe( takeUntil(this.ngUnsubscribe) ).subscribe((data: ResponseInterface) => {
      this.interface = data;

      this.indihomeUpload.options.needleStartValue = (this.interface.indihome.upload / 1024 / 1024);
      this.indihomeUpload.needleValue = (this.interface.indihome.upload / 1024 / 1024);
      this.indihomeUpload.centralLabel = (this.interface.indihome.upload / 1024 / 1024).toFixed(2);

      this.indihomeDownload.options.needleStartValue = (this.interface.indihome.download / 1024 / 1024);
      this.indihomeDownload.needleValue = (this.interface.indihome.download / 1024 / 1024);
      this.indihomeDownload.centralLabel = (this.interface.indihome.download / 1024 / 1024).toFixed(2);

      this.iconUpload.options.needleStartValue = (this.interface.icon.upload / 1024 / 1024);
      this.iconUpload.needleValue = (this.interface.icon.upload / 1024 / 1024);
      this.iconUpload.centralLabel = (this.interface.icon.upload / 1024 / 1024).toFixed(2);

      this.iconDownload.options.needleStartValue = (this.interface.icon.download / 1024 / 1024);
      this.iconDownload.needleValue = (this.interface.icon.download / 1024 / 1024);
      this.iconDownload.centralLabel = (this.interface.icon.download / 1024 / 1024).toFixed(2);

      this.getInterfaceData();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
