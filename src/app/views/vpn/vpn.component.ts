import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { MikrotikService, MikrotikStat, PppStat } from '../../mikrotik.service';

@Component({
  templateUrl: 'vpn.component.html'
})
export class VpnComponent implements OnInit {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  vpns: PppStat[];

  constructor(private mikrotikService: MikrotikService) {}

  ngOnInit(): void {
      this.getVpnData();
  }

  getVpnData() {
    this.mikrotikService.getVpnData().pipe( takeUntil(this.ngUnsubscribe) ).subscribe((data: PppStat[]) => {
      this.vpns = data;

      this.getVpnData();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
