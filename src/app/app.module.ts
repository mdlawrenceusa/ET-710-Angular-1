import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MdlCarouseBasicComponent } from './basic-orbit.component.ts' ;

import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AlertModule.forRoot(), CarouselModule.forRoot() ] ,
  declarations: [ AppComponent, HelloComponent, MdlCarouseBasicComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
