import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../models/reservation';
import {RoomService} from '../../services/room.service';
import {ReservationService} from '../../services/reservation.service';
import {Observable} from 'rxjs/Observable';
import {Room} from '../../models/room';
import { Subscription } from 'rxjs';
import {Equipement} from '../../models/equipement';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private roomService: RoomService, private reservationService: ReservationService) { }

  //Declaring variables

  public reservation: Reservation=new Reservation();
  capacite: number;
  public equipements: string[] = [];
  private roomsSub: Subscription;
  private reservationSub: Subscription;
  isLoading = false;
  public rooms;
  public reservations;
  public filtredRooms: Room[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  public roomEquipementNames: string [] = [];
  public testVar: Boolean;
  //********************
  ngOnInit() {

    this.isLoading = true;
    this.roomService.getRooms();
    this.reservationService.getReservations();
    this.roomsSub = this.roomService.getRoomUpdateListener().subscribe((rooms: Room[]) => {
      this.isLoading = false;
      this.rooms = rooms;
      console.log(this.rooms);
    });
    this.reservationSub = this.reservationService.getReservationUpdateListener().subscribe( (reservations: Reservation[]) =>{
      this.isLoading = false;
      this.reservations = reservations;
      console.log(this.reservations);
    });
// MultiSelect init
    this.dropdownList = [
      { item_id: 1, item_text: 'TV' },
      { item_id: 2, item_text: 'Retro Projecteur' },

    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }
  onItemSelect(item: any) {
    this.equipements.push(item.item_text);
  }
  onSelectAll(items: any) {
    this.equipements.push(items);
  }
  OnDeSelectAll(items: any){
    this.equipements = [];
  }
  //******************************

  // create reservation method
  createReservation(){
    this.reservation.beginDate=String(this.reservation.beginDate).valueOf();
    this.reservation.endDate=String(this.reservation.endDate).valueOf();
    this.reservationService.createReservation(this.reservation);
    console.log(this.reservation);
  }

  // show rooms after verification
  fillRooms(){
    this.filtredRooms = [];
    if(this.verifyTodayDate()) {
      for (let room of this.rooms) {
        for (let equipement of room.equipements) {
          this.roomEquipementNames.push(equipement.name);
        }
        if ((this.capacite <= room.capacity) && (this.testEquipement() || this.equipements.length === 0) && (this.verifyDate(room))) {
          this.filtredRooms.push(room);

        }
        this.roomEquipementNames = [];
      }
    }else{
      alert(" Les dates doivent satisfaire les conditions suivantes:\n"+
        " *Date début supérieur à la date d'aujourd'hui \n *Date fin supérieur"+
        " à la date début");
    }
  }
  // Comparing Room's Equipement with my equipements
  testEquipement(): Boolean{
    this.testVar = false;
      for(let Myequipement of this.equipements) {
          if(this.roomEquipementNames.includes(Myequipement)){
            this.testVar = true;
        }else return false;
      }
      return this.testVar;
  }
  //Verify Reservation date
  verifyDate(room: Room): Boolean{
    let date2 =Date.parse(this.reservation.beginDate);
    let date21= Date.parse(this.reservation.endDate);
    for(let reservation of this.reservations){
      let date1 = Date.parse(reservation.beginDate);
      let date3 = Date.parse(reservation.endDate);
      if((((date1 <= date2)&&(date2<=date3)) || ((date1 <= date21)&&(date21 <= date3))) && (room.id==reservation.idRoom)){
          return false;
      }
    }
    return true;
  }
  // Verify beginDate superior than sysDate AND Verify beginDate > endDate
  verifyTodayDate(): Boolean{
    let date1 =new Date(Date.parse(this.reservation.beginDate));
    let date2= new Date(Date.parse(this.reservation.endDate));
    let toDay= new Date();
    if((date1 < toDay) || (date1 > date2)){
        return false
    }else return true;
  }
}


