import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppheaderComponent} from './components/appheader/appheader.component';
import {AppfooterComponent} from './components/appfooter/appfooter.component';
import {AppmenuComponent} from './components/appmenu/appmenu.component';
import {HomeComponent} from './components/home/home.component';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {FormsModule} from '@angular/forms';

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
    NgbModalModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
