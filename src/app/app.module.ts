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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlPanelComponent,
    ViewCardComponent,
    SongbankComponent,
    KeyboardComponent,
    MCipherComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
