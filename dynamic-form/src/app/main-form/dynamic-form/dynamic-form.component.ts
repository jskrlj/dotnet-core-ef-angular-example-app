import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../question-base';
import { QuestionControlService } from '../../question-control.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {

	@Input() questions: QuestionBase<any>[] = [];
	form: FormGroup;
	payLoad = '';
	  
	constructor(private qcs: QuestionControlService,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
		this.insertRecord(this.form)
		// this.qcs.postFormData();
	}

	onTest(){
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


}
