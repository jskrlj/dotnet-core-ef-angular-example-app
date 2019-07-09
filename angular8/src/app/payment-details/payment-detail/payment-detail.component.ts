import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.form.reset();
    this.service.formData = {
      ID : 0,
      CardOwnerName : '',
      CardNumber:'',
      ExpirationDate:'',
      CVV:'',
    };   
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Submitted","Payment Detail Register");
        this.service.refreshList();
      },
      err =>{
        console.log(err);
      }
    );
  }
  
}
