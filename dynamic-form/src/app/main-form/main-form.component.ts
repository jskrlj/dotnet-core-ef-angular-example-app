import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';
import { CustomForm } from '../models/custom-form.model';

@Component({
	selector: 'app-main-form',
	templateUrl: './main-form.component.html',
	styleUrls: [],
	providers: [QuestionControlService],
})
export class MainFormComponent implements OnInit {
	questions: any[];
	// forms: CustomForm[] = [
	// 	{ ID: 1, name: '', CustomFormFields: [] },
	// 	{ ID: 2, name: '', CustomFormFields: [] },
	// ];
	// selectedOption = '1';
	//{"ID":1,"name":"firstForm","CustomFormFields":null},
	constructor(private qcs: QuestionControlService) {
		// this.questions = service.getQuestions();
	}

	ngOnInit() {
		// this.qcs.getCustomForm(this.questions);
		// console.log(this.questions);


	}

	// onFormSelection(event){
	// 	this.qcs.customFormID = event.value;
	// 	this.qcs.getCustomForm();
	// }

}
