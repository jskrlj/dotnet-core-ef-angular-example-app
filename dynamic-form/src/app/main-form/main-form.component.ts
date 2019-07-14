import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
	selector: 'app-main-form',
	templateUrl: './main-form.component.html',
	styleUrls: [],
	providers: [QuestionService],
})
export class MainFormComponent implements OnInit {
	questions: any[];
	constructor(service: QuestionService) {
		this.questions = service.getQuestions();
	 }

	ngOnInit() {
	}

}
