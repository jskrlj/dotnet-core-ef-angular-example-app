import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
	selector: 'app-main-form',
	templateUrl: './main-form.component.html',
	styleUrls: []
})
export class MainFormComponent implements OnInit {

	myDynamicForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.myDynamicForm = this.fb.group({
			email: ['', [
				Validators.required,
				Validators.email
			]],
			phones: this.fb.array([]),
		});
	}

	get phoneForms() {
		return this.myDynamicForm.get('phones') as FormArray;
	}

	get email(){
		return this.myDynamicForm.get('email');
	}

	addPhone() {
		const phone = this.fb.group({
			area: [],
			prefix: [],
			line: [],
		});

		this.phoneForms.push(phone);
	}

	deletePhone(i) {
		this.phoneForms.removeAt(i);
	}

}
