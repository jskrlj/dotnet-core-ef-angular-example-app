import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatChipsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';

import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './payment-details/payment-detail.service';

import { ShirtDetailComponent } from './shirt-details/shirt-detail/shirt-detail.component';
import { ShirtDetailListComponent } from './shirt-details/shirt-detail-list/shirt-detail-list.component';
import { ShirtDetailsComponent } from './shirt-details/shirt-details.component';
import { ShirtDetailService } from './shirt-details/shirt-detail.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DynamicFormExampleComponent } from './dynamic-form-example/dynamic-form-example.component';

import { MainFormComponent } from "./main-form/main-form.component";


@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    routingComponents,
    PageNotFoundComponent,
    MainFormComponent,
    ShirtDetailComponent,
    ShirtDetailListComponent,
    ShirtDetailsComponent,
    DynamicFormExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSnackBarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,

  ],
  providers: [PaymentDetailService, ShirtDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
