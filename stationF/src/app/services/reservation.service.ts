import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) { }
  // Return List of Reservations
  getReservations() {
    return this.http.get('/server/api/reservation/list');
  }

}
