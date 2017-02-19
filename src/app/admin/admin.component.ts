import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { SongService } from '../song.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', './admin.component.scss'],
  providers: [SongService]
})

export class AdminComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {

  }

  submitForm(title: string, lyrics: string) {
    var newSong: Song = new Song(title, lyrics);
    this.songService.addSong(newSong);
  }

}
