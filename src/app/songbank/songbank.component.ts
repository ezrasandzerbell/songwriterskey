import { Component, OnInit } from '@angular/core';
import { Mcipher } from './../mcipher.model'
import { Song } from './../song.model'
import { Router } from '@angular/router';
import { MCipherComponent } from '../m-cipher/m-cipher.component'
import { ControlPanelComponent } from '../control-panel/control-panel.component'

@Component({
  selector: 'app-songbank',
  templateUrl: './songbank.component.html',
  styleUrls: ['./songbank.component.css', './songbank.component.scss']
})
export class SongbankComponent implements OnInit {

constructor(private router: Router) { }

songs: Song[]

goToDetailPage(clickedSong: Song) {
   this.router.navigate(['controlpanel', clickedSong.id]);
 };

  ngOnInit() {
  }

}
