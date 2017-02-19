import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { SongbankComponent } from './songbank/songbank.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MCipherComponent } from './m-cipher/m-cipher.component';
import { AboutComponent } from './about/about.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AdminComponent } from './admin/admin.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlPanelComponent,
    ViewCardComponent,
    SongbankComponent,
    KeyboardComponent,
    MCipherComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
