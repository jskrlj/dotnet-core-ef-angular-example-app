import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

	@Input() questions: QuestionBase<any>[] = [];
	form: FormGroup;
	payLoad = '';

	constructor(private qcs: QuestionControlService) { }

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
		this.insertRecord(this.form)
		// this.qcs.postFormData();
	}

	resetForm(form?: FormGroup) {
		if (form != null)
			form.reset();
		// this.service.formData = {
		// 	ID: 0,
		// 	CardOwnerName: '',
		// 	CardNumber: '',
		// 	ExpirationDate: '',
		// 	CVV: '',
		// };
	}

	insertRecord(form: FormGroup) {
		console.log(this.payLoad);
		this.qcs.postFormFields(this.payLoad).subscribe(
		  res => {
			this.resetForm(form);
			console.log(res);
		    // this.toastr.success("Submitted successfully", "Shirt Detail Register");
		    // this.service.refreshList();
		  },
		  err => {
		    console.log(err);
		    // this.resetForm(form);
		    // this.toastr.error("Insert Failed", "Shirt Detail Register");
		  }
		);
	}


}
