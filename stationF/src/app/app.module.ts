import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppheaderComponent} from './components/appheader/appheader.component';
import {AppfooterComponent} from './components/appfooter/appfooter.component';
import {AppmenuComponent} from './components/appmenu/appmenu.component';
import {HomeComponent} from './components/home/home.component';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule, DialogModule, InputTextModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {ReservationService} from './services/reservation.service';
import {RoomService} from './services/room.service';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule.forRoot(),
    BrowserModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [
    ReservationService,
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
