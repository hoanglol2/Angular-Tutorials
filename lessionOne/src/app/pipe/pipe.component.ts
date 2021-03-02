import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.less']
})
export class PipeComponent implements OnInit, CommonModule {
  dateVal: Date = new Date();
  jsonVal = {
    moo: 'foo',
    goo: {
      too: 'new'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
