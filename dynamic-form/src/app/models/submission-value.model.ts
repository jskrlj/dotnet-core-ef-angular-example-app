import { SubmissionForm } from './submission-form.model';
import { SubmissionField } from './submission-field.model';

export class SubmissionValue {
    Field: SubmissionField;
    FieldID: number;
    Form: SubmissionForm;
    FormID: number;
    ID: number;
    value: string;
}
