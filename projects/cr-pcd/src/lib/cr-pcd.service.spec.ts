import { TestBed } from '@angular/core/testing';

import { CrPcdService } from './cr-pcd.service';
import { provinces, cantons, districts } from './data';

describe('CrPcdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrPcdService = TestBed.get(CrPcdService);
    expect(service).toBeTruthy();
  });

  it('should return all provinces', () => {
    const service: CrPcdService = TestBed.get(CrPcdService);
    expect(service).toBeTruthy();
    expect(service.getProvinces()).toBe(provinces);
    expect(service.getProvinces()['1']).toBe(provinces['1']);
  });

  it('should return a province cantons', () => {
    const service: CrPcdService = TestBed.get(CrPcdService);
    expect(service).toBeTruthy();
    expect(service.getCantons('3')).toBe(cantons['3']);
  });

  it('should return a canton districts', () => {
    const service: CrPcdService = TestBed.get(CrPcdService);
    expect(service).toBeTruthy();
    expect(service.getDistricts('301')).toBe(districts[301]);
  });
});
