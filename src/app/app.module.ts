import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/routing.module';
import { MaterialModule } from "./modules/material.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { ReadersComponent } from './comps/readers/readers.component';
import { ReportersComponent } from './comps/reporters/reporters.component';
import { DocComponent } from './comps/doc/doc.component';
import { DialogsComponent } from './comps/dialogs/dialogs.component';
import { HttpService } from './services/http.service';
import { ShareService } from './services/share.service';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './comps/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadersComponent,
    ReportersComponent,
    DocComponent,
    DialogsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [HttpService, ShareService,{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}],
  bootstrap: [AppComponent],
  entryComponents: [DialogsComponent]
})
export class AppModule { }
