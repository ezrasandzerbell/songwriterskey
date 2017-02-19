import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Mcipher } from './../mcipher.model'
import { Song } from './../song.model'


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css', './control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  songId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.songId = parseInt(urlParameters['id']);
    });
  }

}
