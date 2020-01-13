import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../components/root-components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreMoudle } from './core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreMoudle
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
