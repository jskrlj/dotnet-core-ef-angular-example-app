import { SubmissionForm } from './submission-form.model';
import { SubmissionValue } from './submission-value.model';

export class SubmissionField {
    Form: SubmissionForm;
    FormID: number;
    ID: number;
    Name: string;
    Value: SubmissionValue;
}
