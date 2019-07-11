import { Component, OnInit } from '@angular/core';
import { ShirtDetailService } from '../shirt-detail.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-shirt-detail',
	templateUrl: './shirt-detail.component.html',
	styles: []
})
export class ShirtDetailComponent implements OnInit {

	constructor(private service: ShirtDetailService,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.resetForm();
	}

	resetForm(form?: NgForm) {
		if (form != null)
			form.form.reset();
		this.service.formData = {
			ID: 0,
			Size: '',
			Color: '',
			ShirtLogo: 0,
		};
	}

	onSubmit(form: NgForm) {
		if (this.service.formData.ID == 0 || !this.service.formData.ID) {
			this.insertRecord(form);
		} else {
			this.updateRecord(form);
		}

	}

	updateRecord(form: NgForm) {
		this.service.putPaymentDetail().subscribe(
			res => {
				this.resetForm(form);
				this.toastr.info("Updated successfully", "Shirt Detail Register");
				this.service.refreshList();
			},
			err => {
				console.log(err);
				this.resetForm(form);
				this.toastr.error("Update Failed", "Shirt Detail Register");

			}
		);
	}
	insertRecord(form: NgForm) {
		this.service.postPaymentDetail(form.value).subscribe(
			res => {
				this.resetForm(form);
				this.toastr.success("Submitted successfully", "Shirt Detail Register");
				this.service.refreshList();
			},
			err => {
				console.log(err);
				this.resetForm(form);
				this.toastr.error("Insert Failed", "Shirt Detail Register");
			}
		);
	}

}
