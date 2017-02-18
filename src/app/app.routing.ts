import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ControlPanelComponent } from './control-panel/control-panel.component'
import { SongbankComponent } from './songbank/songbank.component'
import { ViewCardComponent } from './view-card/view-card.component'
import { KeyboardComponent } from './keyboard/keyboard.component'
import { MCipherComponent } from './m-cipher/m-cipher.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'control-panel',
    component: ControlPanelComponent
  },
  {
    path: 'songbank',
    component: SongbankComponent
  },
  {
    path: 'viewcard',
    component: ViewCardComponent
  },
  {
    path: 'mcipher',
    component: MCipherComponent
  },
  {
    path: 'keyboard',
    component: KeyboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
