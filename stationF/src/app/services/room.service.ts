import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Room} from '../models/room';
import { Subject, Observable } from 'rxjs';
import {Equipement} from '../models/equipement';

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
    return this.http.get<{message: string, rooms: any}>('http://localhost:3000/api/rooms')
      .pipe(map((data) =>{
        return data.rooms.map(room => {
          return {
            name: room.name,
            id: room._id,
            description: room.description,
            capacity: room.capacity,
            equipements: room.equipements.map(equipement =>{
              return{ name: equipement.name};
            })

          };
        });
      }))
      .subscribe((transformedRooms) => {
        this.rooms = transformedRooms;
        this.roomsUpdated.next([...this.rooms]);
      });
  }
  getRoomUpdateListener() {
    return this.roomsUpdated.asObservable();
  }
}
