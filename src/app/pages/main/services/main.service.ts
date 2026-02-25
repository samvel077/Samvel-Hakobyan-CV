import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';

import { environment } from '@environments/environment';

import { IMainInfo } from '../models';

@Injectable()
export class MainService {
  getMainContent(): HttpResourceRef<IMainInfo | undefined> {
    return httpResource<IMainInfo>(
      () => `${environment.BASE_URL}assets/json/main-info.json?v=1.0`
    );
  }
}
