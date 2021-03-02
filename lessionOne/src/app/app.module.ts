import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import {FormsModule} from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    PipeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
