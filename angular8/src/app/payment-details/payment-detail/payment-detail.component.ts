import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/payment-details/payment-detail.service';
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

	resetForm(form?: NgForm) {
		if (form != null)
			form.form.reset();
		this.service.formData = {
			ID: 0,
			CardOwnerName: '',
			CardNumber: '',
			ExpirationDate: '',
			CVV: '',
		};
	}

	onSubmit(form: NgForm) {
		if (this.service.formData.ID == 0 || !this.service.formData.ID) {
			this.insertRecord(form);
			console.log("insert");
		} else {
			this.updateRecord(form);
		}

	}

	updateRecord(form: NgForm) {
		this.service.putPaymentDetail().subscribe(
			res => {
				this.resetForm(form);
				this.toastr.info("Updated successfully", "Payment Detail Register");
				this.service.refreshList();
			},
			err => {
				console.log(err);
				this.resetForm(form);
				this.toastr.error("Update Failed", "Payment Detail Register");

			}
		);
	}
	insertRecord(form: NgForm) {
		this.service.postPaymentDetail(form.value).subscribe(
			res => {
				this.resetForm(form);
				this.toastr.success("Submitted successfully", "Payment Detail Register");
				this.service.refreshList();
			},
			err => {
				console.log(err);
				this.resetForm(form);
				this.toastr.error("Insert Failed", "Payment Detail Register");
			}
		);
	}

}
