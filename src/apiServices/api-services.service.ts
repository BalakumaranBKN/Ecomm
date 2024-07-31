import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseModel } from '../dataTypes/Station';
import { HttpClient } from '@angular/common/http';
import { CONSTANT } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  apiEndPoint: string = '';

  constructor(private http: HttpClient) { }

  getAllStations(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(
      this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION
    );
  }
}
