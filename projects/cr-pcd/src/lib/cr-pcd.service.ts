import { Injectable } from '@angular/core';
import { provinces, cantons, districts } from './data';

@Injectable({
  providedIn: 'root'
})
export class CrPcdService {

  constructor() { }

  getProvinces() {
    return provinces;
  }

  getCantons(provinceId: string) {
    return cantons[provinceId];
  }

  getDistricts(cantonId: string) {
    return districts[cantonId];
  }
}
