import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
	selector: 'app-dynamic-form-example',
	templateUrl: './dynamic-form-example.component.html',
	styles: []
})
export class DynamicFormExampleComponent implements OnInit {

	myReactiveForm: FormGroup;
	myNestedForm: FormGroup;
	myDynamicForm: FormGroup;


	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.myReactiveForm = this.fb.group({
			email: '',
			message: 'Preset message',
			name: '',
		});
		this.myReactiveForm.valueChanges.subscribe(() => { console.log(this.myReactiveForm.value) });

		const phone = this.fb.group({
			area: [],
			prefix: [],
			line: [],
		});

		this.myNestedForm = this.fb.group({
			email: '',
			homePhone: phone,
			cellPhone: phone,
		});

		this.myDynamicForm = this.fb.group({
			email: ['',[
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
