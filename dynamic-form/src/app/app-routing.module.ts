import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainFormComponent } from "./main-form/main-form.component";
import { SubmissionListComponent } from "./submission-list/submission-list.component";
const routes: Routes = [
  { path: '',   redirectTo: '/main-form', pathMatch: 'full' },
  // { path: 'payment-details', component: PaymentDetailsComponent },
  // { path: 'shirt-details', component: ShirtDetailsComponent },
  // { path: 'dynamic-form-example', component: DynamicFormExampleComponent },
  { path: 'main-form',  component: MainFormComponent },
  { path: 'submission-list',  component: SubmissionListComponent },


  // { path: '',  component: MainFormComponent },
  // { path: '',  component: MainFormComponent },
  // { path: '**', component: PageNotFoundComponent }
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
export const routingComponents = [MainFormComponent, SubmissionListComponent]; 
