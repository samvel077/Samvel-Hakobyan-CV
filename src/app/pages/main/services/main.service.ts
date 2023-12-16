import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IMainInfo } from "@core/interfaces/main-info.interface";
import { environment } from "@environments/environment";

@Injectable()
export class MainService {

    constructor(private http: HttpClient) {
    }

    public getMainContent(): Observable<IMainInfo> {
      return this.http.get<IMainInfo>(`${environment.BASE_URL}assets/json/main-info.json`);
    }
}
