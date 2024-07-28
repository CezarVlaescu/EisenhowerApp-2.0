import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomepageModule } from '../pages/Homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from '../shared/components/sharedComponents.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    BrowserAnimationsModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
