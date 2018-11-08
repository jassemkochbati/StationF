import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../models/reservation';
import {RoomService} from '../../services/room.service';
import {ReservationService} from '../../services/reservation.service';
import {Observable} from 'rxjs/Observable';
import {Room} from '../../models/room';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private roomService: RoomService, private reservationService: ReservationService) { }

  //Declaring variables

  reservation: Reservation=new Reservation();
  capacite: Number;
  equipements: String[];
  rooms: Room[] = [];
  private roomsSub: Subscription;
  isLoading = false;
  //********************
  ngOnInit() {

    /*this.isLoading = true;

    this.roomsSub = this.roomService.getRoomUpdateListener().subscribe((rooms: Room[]) => {
      this.isLoading = false;
      this.rooms = rooms;
    });*/
    console.log( this.roomService.getRooms());

  }

}
