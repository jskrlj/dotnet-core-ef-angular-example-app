import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/payment-details/payment-detail.service';
import { PaymentDetail } from 'src/app/payment-details/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

@Component({
	selector: 'app-payment-detail-list',
	templateUrl: './payment-detail-list.component.html',
	styles: []
})
export class PaymentDetailListComponent implements OnInit {

	constructor(private service: PaymentDetailService,
		private toastr: ToastrService,
		private _snackBar: MatSnackBar) { }

	ngOnInit() {
		this.service.refreshList();
	}

	populateForm(pd: PaymentDetail) {
		this.service.formData = Object.assign({}, pd);
	}

	openSnackBar() {
		return this._snackBar.open("Do you really want to delete this record?", "Yes", {
			duration: 5000,
		});
	}

	onDelete(id) {
		let sb = this.openSnackBar();
		sb.onAction().subscribe(()=>{
			this.service.deletePaymentDetail(id)
			.subscribe(
				res => {
					this.service.refreshList();
					this.toastr.success("Deleted successfully", "Payment Detail Register");
				},
				err => {
					console.log(err);
				}
			);
			
		});
		// if (confirm("Are you sure?")) {
		// 	this.service.deletePaymentDetail(id)
		// 		.subscribe(
		// 			res => {
		// 				this.service.refreshList();
		// 				this.toastr.success("Deleted successfully", "Payment Detail Register");
		// 			},
		// 			err => {
		// 				console.log(err);
		// 			}
		// 		);
		// }
	}
}
