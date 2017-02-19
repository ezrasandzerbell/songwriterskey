import { Injectable } from '@angular/core';
import { Song } from './song.model'
import { SONGS } from './mock-songs'
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SongService {

  songs: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.songs = angularFire.database.list('songs');
  }

  getSongs() {
    return this.songs;
  }

  addSong(newSong: Song) {
     this.songs.push(newSong);
  }

  getSongById(songId: number){
    return this.angularFire.database.object('songs/' + songId)
  }
}
