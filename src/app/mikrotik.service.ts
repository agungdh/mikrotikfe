import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { interval } from 'rxjs';
import { retryWhen } from 'rxjs/operators';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MikrotikService {
  constructor(private httpClient: HttpClient) { }

  public getVpnData() {
    return this.httpClient.get(environment.baseUrl + "/mikrotik/vpn").pipe(retryWhen(_ => {
      return interval(5000)
    }));
  }

  public getInterfaceData() {
    return this.httpClient.get(environment.baseUrl + "/mikrotik/interface").pipe(retryWhen(_ => {
      return interval(5000)
    }));
  }
}

export interface InterfaceMonitoring {
  upload: number,
  download: number,
}

export interface InterfaceStat {
  upload: number,
  download: number,
}

export interface Ppp {
  localAddress: string,
  remoteAddress: string,
  service: string,
  name: string,
  comment: string,
  uptime: string,
}

export interface QueueMonitoring {
  upload: number,
  download: number,
  uploading: number,
  downloading: number,
}

export interface PppStat {
  ppp: Ppp,
  stat: QueueMonitoring,
}

export interface MikrotikStat {
  icon: InterfaceMonitoring,
  indihome: InterfaceMonitoring,
  iconStat: InterfaceStat,
  indihomeStat: InterfaceStat,
  ppps: PppStat[],
}

export interface ResponseInterface {
  icon: InterfaceMonitoring,
  indihome: InterfaceMonitoring,
  iconStat: InterfaceStat,
  indihomeStat: InterfaceStat,
}