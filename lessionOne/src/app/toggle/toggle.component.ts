import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less']
})
export class ToggleComponent implements OnInit {
  @Input() checked: boolean | undefined;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggle() {
    this.checkedChange.emit(!this.checked);
  }

}
