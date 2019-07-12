import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuestionControlService {
	readonly rootURL = 'http://localhost:64598/api';

	constructor(private http: HttpClient) { }

	toFormGroup(questions: QuestionBase<any>[]) {
		let group: any = {};

		questions.forEach(question => {
			group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
				: new FormControl(question.value || '');
		});
		return new FormGroup(group);
	}

	postFormFields(formData: string) {
		const headers = new HttpHeaders()
		.set('Content-Type', 'application/json')
		.set('Accept', 'application/json')
		return this.http.post(this.rootURL + "/DynamicForms",  '"' + formData.replace(/"/g, "\'") + '"' ,{headers:headers});
	}
}
