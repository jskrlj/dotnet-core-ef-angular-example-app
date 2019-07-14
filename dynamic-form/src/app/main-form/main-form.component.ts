import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';

@Component({
	selector: 'app-main-form',
	templateUrl: './main-form.component.html',
	styleUrls: [],
	providers: [QuestionControlService],
})
export class MainFormComponent implements OnInit {
	questions: any[];
	constructor(private qcs: QuestionControlService) {
		// this.questions = service.getQuestions();
	 }

	ngOnInit() {
		// this.qcs.getCustomForm(this.questions);
		// console.log(this.questions);


	}

}
