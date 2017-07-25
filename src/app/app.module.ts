import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {AboutComponent} from './about.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
