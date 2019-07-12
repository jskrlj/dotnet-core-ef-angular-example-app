import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule, MatInputModule, MatSelectModule,MatButtonModule,MatCheckboxModule,MatChipsModule, MatRadioModule,MatCardModule } from '@angular/material';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule,
    MatSnackBarModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    HttpClientModule,
    MatCardModule,
  ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
