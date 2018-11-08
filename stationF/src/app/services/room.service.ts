import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Room} from '../models/room';
import { Subject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class RoomService {
  //Declaring Variables
  private rooms: Room[] = [];
  private roomsUpdated = new Subject<Room[]>();
  constructor(private http: HttpClient) { }

// Return List Of Rooms
  getRooms(){
    this.http.get<{message: string, rooms: any}>('http://localhost:3000/api/rooms');
    /*  .pipe(map((roomData) => {
        return roomData.rooms.map(room => {
          return {
            name: room.name,
            description: room.description,
            capacity: room.capacity,
            equipements: room.equipements,
            id: room.id
          };
        });
      }))
      .subscribe((transformedRooms) => {
        this.rooms = transformedRooms;
        this.roomsUpdated.next([...this.rooms]);
      });*/
  }
  getRoomUpdateListener() {
    return this.roomsUpdated.asObservable();
  }
}
