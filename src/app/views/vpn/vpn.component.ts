import { Component, OnInit } from '@angular/core';
import { MikrotikService, MikrotikStat, PppStat } from '../../mikrotik.service';

@Component({
  templateUrl: 'vpn.component.html'
})
export class VpnComponent implements OnInit {
  vpns: PppStat[];

  constructor(private mikrotikService: MikrotikService) {}

  ngOnInit(): void {
      this.mikrotikService.getMikrotikData().subscribe((data: MikrotikStat) => {
        this.vpns = data.ppps;
      });
  }
}
