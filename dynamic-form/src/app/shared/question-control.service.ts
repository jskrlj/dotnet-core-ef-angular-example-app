import { Injectable, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../models/question-base';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubmissionForm } from '../models/submission-form.model';
import { DropdownQuestion } from '../models/question-dropdown';
import { TextboxQuestion } from '../models/question-textbox';
import { RadioQuestion } from '../models/question-radio';
import { CustomForm } from '../models/custom-form.model';

@Injectable()
export class QuestionControlService {
	readonly rootURL = 'http://localhost:64598/api';
	list: SubmissionForm[];
	customFormQuestions: QuestionBase<any>[];
	qForm: FormGroup;
	pl: string;
	customFormID: number;
	forms: CustomForm[];

	constructor(private http: HttpClient) {
		this.qForm = new FormGroup({});
	}

	get payLoad() {
		return this.pl;
	}

	toFormGroup() {
		let group: any = {};

		this.customFormQuestions.forEach(question => {
			group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
				: new FormControl(question.value || '');
		});
		this.qForm = new FormGroup(group);

	}

	postFormFields(formData: string) {
		const headers = new HttpHeaders()
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
		return this.http.post(this.rootURL + "/DynamicForms", '"' + formData.replace(/"/g, "\'") + '"', { headers: headers });
	}

	refreshList() {
		this.http.get(this.rootURL + "/DynamicForms")
			.toPromise()
			.then((res: Array<SubmissionForm>) => {
				this.list = res.sort((a, b) => b.ID - a.ID);
			},
				err => {
					console.log(err);
				}
			);
	}

	getCustomForms() {
		this.http.get(this.rootURL + "/CustomForm/")
			.toPromise()
			.then((res: CustomForm[]) => {
				this.forms = res;
			},
				err => {
					console.log(err);
				}
			);
	}

	getCustomForm() {
		console.log("Form name: " + this.forms[this.customFormID - 1].name);
		this.http.get(this.rootURL + "/CustomForm/" + this.customFormID)
			.toPromise()
			.then(
				// (res: Array<QuestionBase<any>>) => {
				// 	console.log(res);
				// },
				(res: QuestionBase<any>[]) => {
					this.customFormQuestions = res;
					let questions = []; //: QuestionBase<any>[];
					this.customFormQuestions.map(q => {
						let tmp_q;
						if (q.field_type === 'dropdown') {
							tmp_q = q as DropdownQuestion;
							// tmp_q = new DropdownQuestion({
							// 	label: q.label || '',
							// 	key: q.key || '',
							// 	options: q.options || '',
							// 	order: q.order || '',
							// 	value: q.value || '',
							// 	required: q.required || '',
							// 	type: q.type || '',
							// });
						} else if (q.field_type === 'textbox') {
							tmp_q = q as TextboxQuestion;
							// tmp_q = new TextboxQuestion({
							// 	label: q.label || '',
							// 	key: q.key || '',
							// 	options: q.options || '',
							// 	order: q.order || '',
							// 	value: q.value || '',
							// 	required: q.required || '',
							// 	type: q.type || '',
							// });
						} else if (q.field_type === 'radio') {
							tmp_q = q as RadioQuestion;
							// tmp_q = new RadioQuestion({
							// 	label: q.label || '',
							// 	key: q.key || '',
							// 	options: q.options || '',
							// 	order: q.order || '',
							// 	value: q.value || '',
							// 	required: q.required || '',
							// 	type: q.type || '',
							// });
						}

						questions.push(tmp_q);

					});

					questions.sort((a, b) => a.order - b.order);
					this.customFormQuestions = questions;
					this.pl = JSON.stringify(this.customFormQuestions);
					this.toFormGroup();


				},
				err => {
					console.log(err);
					return '';
				}
			);
	}


}
