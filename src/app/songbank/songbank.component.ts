import { Component, OnInit } from '@angular/core';
import { Mcipher } from './../mcipher.model'
import { Song } from './../song.model'
import { SONGS } from '../mock-songs'
import { Router } from '@angular/router';
import { MCipherComponent } from '../m-cipher/m-cipher.component'
import { ControlPanelComponent } from '../control-panel/control-panel.component'
import { SongService } from '../song.service';

@Component({
  selector: 'app-songbank',
  templateUrl: './songbank.component.html',
  styleUrls: ['./songbank.component.css', './songbank.component.scss'],
  providers: [SongService]
})
export class SongbankComponent implements OnInit {
  SONGS: Song[]

  constructor(private router: Router, private songService: SongService) {}

  ngOnInit(){
    this.SONGS = this.songService.getSongs();
  }

  goToDetailPage(clickedSong: Song) {
     this.router.navigate(['controlpanel', clickedSong.id]);
   };



}
