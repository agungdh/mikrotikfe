import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MikrotikService {
  private REST_API_SERVER = "http://192.168.0.3:8080";

  constructor(private httpClient: HttpClient) { }

  public getMikrotikData() {
    return this.httpClient.get(this.REST_API_SERVER + "/mikrotik/");
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