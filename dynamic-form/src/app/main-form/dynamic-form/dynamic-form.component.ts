import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { QuestionBase } from '../../models/question-base';
import { QuestionControlService } from '../../shared/question-control.service';
import { ToastrService } from 'ngx-toastr';
import { CustomForm } from 'src/app/models/custom-form.model';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {

	// @Input() questions: QuestionBase<any>[] = [];
	form: FormGroup;
	payLoad = '';
	// forms: CustomForm[] = [
	// 	{ ID: 1, name: '', CustomFormFields: [] },
	// 	{ ID: 2, name: '', CustomFormFields: [] },
	// ];
	// selectedOption = '1';


	constructor(private qcs: QuestionControlService,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.qcs.getCustomForms();
		// this.qcs.getCustomForm();
		// this.qcs.toFormGroup(this.form)
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.qcs.qForm.value);
		// console.log(this.payLoad);
		this.insertRecord(this.qcs.qForm)
		// this.qcs.postFormData();
	}

	onTest() {
		this.qcs.refreshList();
	}

	resetForm(form?: FormGroup) {
		if (form != null)
			form.reset();
	}

	insertRecord(form: FormGroup) {
		this.qcs.postFormFields(this.payLoad).subscribe(
			res => {
				this.resetForm(form);
				console.log(res);
				this.toastr.success("Submitted successfully", "Dynamic Form Submission");
				// this.service.refreshList();
			},
			err => {
				console.log(err);
				// this.resetForm(form);
				this.toastr.error("Submission Failed", "Dynamic Form Submission");
			}
		);
	}

	onFormSelection(event){
		this.qcs.customFormID = event.value;
		this.qcs.getCustomForm();
	}


}
