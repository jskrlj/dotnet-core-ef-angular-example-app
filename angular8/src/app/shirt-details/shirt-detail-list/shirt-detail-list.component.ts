import { Component, OnInit } from '@angular/core';
import { ShirtDetailService } from '../shirt-detail.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material';
import { ShirtDetail } from '../shirt-detail.model';

@Component({
	selector: 'app-shirt-detail-list',
	templateUrl: './shirt-detail-list.component.html',
	styles: []
})
export class ShirtDetailListComponent implements OnInit {

	constructor(private service: ShirtDetailService,
		private toastr: ToastrService,
		private _snackBar: MatSnackBar) { }

	ngOnInit() {
		this.service.refreshList();
	}

	populateForm(pd: ShirtDetail) {
		this.service.formData = Object.assign({}, pd);
	}

	openSnackBar() {
		return this._snackBar.open("Do you really want to delete this record?", "Yes", {
			duration: 5000,
		});
	}

	onDelete(id) {
		let sb = this.openSnackBar();
		sb.onAction().subscribe(() => {
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
	}

}
