import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-customize-form',
	templateUrl: './customize-form.component.html',
	styleUrls: []
})
export class CustomizeFormComponent implements OnInit {

	myDynamicForm: FormGroup;
	constructor(private fb: FormBuilder) { }
	selected: string;

	ngOnInit() {
		this.myDynamicForm = this.fb.group({
			questions: this.fb.array([]),
		});
		this.selected = "textbox"
	}

	get questionForms() {
		return this.myDynamicForm.get('questions') as FormArray;
	}



	get email(){
		return this.myDynamicForm.get('email');
	}

	addQuestion() {
		const question = this.fb.group({
			label: [],
			field_type: "textbox",
		});

		this.questionForms.push(question);
	}

	deleteQuestion(i) {
		this.questionForms.removeAt(i);
	}

	onSubmit(form: FormGroup){
		console.log(form.value);
		this.myDynamicForm.reset();
		this.myDynamicForm = this.fb.group({
			questions: this.fb.array([]),
		});
		this.selected = "textbox"
	}

}
