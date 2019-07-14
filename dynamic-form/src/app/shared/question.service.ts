import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../models/question-dropdown';
import { QuestionBase } from '../models/question-base';
import { TextboxQuestion } from '../models/question-textbox';
import { RadioQuestion } from "../models/question-radio";


@Injectable()
export class QuestionService {
	questions: QuestionBase<any>[]
	

	constructor(){
		
	}

	getRemoteQuestions() {
		// TODO: get from a remote source of question metadata
		// TODO: make asynchronous
		let json_questions = [
			{
				field_type: 'dropdown',
				key: 'brave',
				label: 'Bravery Rating',
				options: [
					{ key: 'solid', value: 'Solid' },
					{ key: 'great', value: 'Great' },
					{ key: 'good', value: 'Good' },
					{ key: 'unproven', value: 'Unproven' }
				],
				order: 1,
			},
			{
				field_type: 'textbox',
				key: 'firstName',
				label: 'First name',
				value: 'Bombasto',
				required: true,
				order: 2
			},
			{
				field_type: 'textbox',
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				order: 3
			},
			{
				field_type: 'radio',
				key: 'skill',
				label: 'Skill rating',
				options: [
					{ key: 'solid', value: 'Solid' },
					{ key: 'great', value: 'Great' },
					{ key: 'good', value: 'Good' },
					{ key: 'unproven', value: 'Unproven' }
				],
				order: 4,
			},
			{
				field_type: 'textbox',
				key: 'emailAddress2',
				label: 'Email 22',
				required: true,
				type: 'email2',
				order: 5
			},
			
		];
		return json_questions;
	}



	getQuestions() {

		let questions = []; //: QuestionBase<any>[];

		this.getRemoteQuestions().map(q => {
			let tmp_q;
			//extend maybe?
			if (q.field_type === 'dropdown') {
				tmp_q = new DropdownQuestion({
					label: q.label || '',
					key: q.key || '',
					options: q.options || '',
					order: q.order || '',
					value: q.value || '', 
					required: q.required || '',
					type: q.type || '',
				});
			}else if (q.field_type === 'textbox') {
				tmp_q = new TextboxQuestion({
					label: q.label || '',
					key: q.key || '',
					options: q.options || '',
					order: q.order || '',
					value: q.value || '', 
					required: q.required || '',
					type: q.type || '',
				});
			}else if (q.field_type === 'radio') {
				tmp_q = new RadioQuestion({
					label: q.label || '',
					key: q.key || '',
					options: q.options || '',
					order: q.order || '',
					value: q.value || '', 
					required: q.required || '',
					type: q.type || '',
				});
			}
			questions.push(tmp_q);
		});


		return questions.sort((a, b) => a.order - b.order);
	}

	




}
