import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../models/reservation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  reservation: Reservation=new Reservation();
  capacite: Number;
  equipements: String[];
  ngOnInit() {
  }

}
