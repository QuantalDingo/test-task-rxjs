import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { conversationReducer } from './sixth-task/conversation.reducer';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ThirdTaskComponent } from './third-task/third-task.component';
import { FifthTaskComponent } from './fifth-task/fifth-task.component';
import { SixthTaskComponent } from './sixth-task/sixth-task.component';
import { FourthTaskComponent } from './fourth-task/fourth-task.component';
import { FirstAndSecondTaskComponent } from './first-and-second-task/first-and-second-task.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAndSecondTaskComponent,
    ThirdTaskComponent,
    FourthTaskComponent,
    FifthTaskComponent,
    SixthTaskComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({ conversations: conversationReducer }),

    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
