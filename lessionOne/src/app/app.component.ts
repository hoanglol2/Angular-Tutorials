import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit{
  isChecked = true;
  title = 'Angular';

  // viewChild() -> ta muốn tham chiếu 1 child trên view.
  @ViewChild(ToggleComponent, {static: true}) toggleComp: ToggleComponent | undefined;

  // static: true , mặc định status = false, nếu muốn sd nó thì đảm bảo component con đó không nằm trong khối lệnh nào?

  // tslint:disable-next-line:typedef
  handleClick(): void {
    // @ts-ignore
    this.toggleComp.toggle();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('OnInit', this.toggleComp);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() { // resolve HTML
    console.log('After', this.toggleComp);
  }

}


