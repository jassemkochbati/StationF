import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reservation} from '../models/reservation';
import {Subject} from '../../../node_modules/rxjs';
import {  Router } from '@angular/router';
import {map} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ReservationService {
//Declaring Variables
  private reservationUpdated = new Subject<Reservation[]>();
  private reservations: Reservation[] = [];


  constructor(private http: HttpClient , private router: Router) { }


  // Return List of Reservations
  getReservations() {
    return this.http.get<{message: string, reservations: any}>('http://localhost:3000/api/reservations/list')
      .pipe(map((data) =>{
      return data.reservations.map(reservation => {
        return {
          id: reservation._id,
          idRoom: reservation.idRoom,
          beginDate: reservation.beginDate,
          endDate: reservation.endDate


        };
      });
    }))
      .subscribe((transformedReservations) => {
        this.reservations = transformedReservations;
        this.reservationUpdated.next([...this.reservations]);
      });
  }
  getReservationUpdateListener() {
    return this.reservationUpdated.asObservable();
  }
  //*******************************************************************

  // Add a Reservation
  createReservation(reservation: Reservation) {
    const reservationF: Reservation = {id: null, idRoom: reservation.idRoom,beginDate: reservation.beginDate, endDate: reservation.endDate};
    return this.http.post<{message: string, reservationId: string}>('http://localhost:3000/api/reservations/create', reservationF)
      .subscribe((responseData) => {
        const id = responseData.reservationId;
        reservationF.id = id;
        this.reservationUpdated.next([...this.reservations]);
        this.router.navigate(['/home']);
      });
  }


}
