import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';

import { environment } from '@environments/environment';

import { IMainInfo } from '../models';

@Injectable()
export class MainService {
  getMainContent(): HttpResourceRef<IMainInfo | undefined> {
    return httpResource<IMainInfo>(
      () => `${environment.API_URL}/samvel-hakobyan-cv/main-info.json`
    );
  }
}
