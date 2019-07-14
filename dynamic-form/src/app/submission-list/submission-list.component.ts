import { Component, OnInit } from '@angular/core';
import { QuestionControlService } from '../question-control.service';


@Component({
	selector: 'app-submission-list',
	templateUrl: './submission-list.component.html',
	styleUrls: [],
	providers: [QuestionControlService],
})
export class SubmissionListComponent implements OnInit {

	constructor(private qcs: QuestionControlService) { }

	ngOnInit() {
		this.qcs.refreshList();
	}

}
