import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { IMainInfo } from '../models';

@Injectable()
export class MainService {
  private http = inject(HttpClient);

  getMainContent(): Observable<IMainInfo> {
    return this.http.get<IMainInfo>(
      `${environment.BASE_URL}assets/json/main-info.json?v=1.0`
    );
  }
}
