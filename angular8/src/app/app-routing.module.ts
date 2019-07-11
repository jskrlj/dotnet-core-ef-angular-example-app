import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShirtDetailsComponent } from './shirt-details/shirt-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DynamicFormExampleComponent } from './dynamic-form-example/dynamic-form-example.component';

const routes: Routes = [
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'shirt-details', component: ShirtDetailsComponent },
  // { path: 'dynamic-form-example', component: DynamicFormExampleComponent },
  // { path: '',   redirectTo: '/payment-details', pathMatch: 'full' },
  // { path: '',  component: MainFormComponent },
  { path: '',  component: DynamicFormExampleComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ShirtDetailsComponent, PaymentDetailsComponent]; 
