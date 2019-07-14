import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './main-form/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './main-form/dynamic-form/dynamic-form-question.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { MatSnackBarModule, 
  MatInputModule, 
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule
  ,MatChipsModule, 
  MatRadioModule,
  MatCardModule,
  MatTableModule } from '@angular/material';
import { MainFormComponent } from './main-form/main-form.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';

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
    MatTableModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent,routingComponents, MainFormComponent, SubmissionListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
