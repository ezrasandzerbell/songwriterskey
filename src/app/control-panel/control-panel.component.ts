import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Mcipher } from './../mcipher.model'
import { Song } from './../song.model'
import { SongService } from '../song.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css', './control-panel.component.scss'],
  providers: [SongService]
})
export class ControlPanelComponent implements OnInit {
  songId: number;
  songToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private songService: SongService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.songId = parseInt(urlParameters['id']);
    });
    this.songToDisplay = this.songService.getSongById(this.songId);
  }
}
