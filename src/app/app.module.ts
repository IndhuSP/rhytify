import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigbodyComponent } from './configbody/configbody.component';
import 'hammerjs';
import {MatCardModule,MatButtonModule,MatRadioModule,MatDividerModule,MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ConfigbodyComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,MatCardModule,MatButtonModule,MatRadioModule,MatDividerModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
