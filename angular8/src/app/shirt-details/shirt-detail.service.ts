import { Injectable } from '@angular/core';
import { ShirtDetail } from './shirt-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ShirtDetailService {
	formData: ShirtDetail;
	readonly rootURL = 'http://localhost:64598/api';
	list: ShirtDetail[];


	constructor(private http: HttpClient) { }


	postPaymentDetail(formData: ShirtDetail) {
		return this.http.post(this.rootURL + "/ShirtDetails", formData);
	}

	putPaymentDetail() {
		return this.http.put(this.rootURL + "/ShirtDetails/" + this.formData.ID, this.formData);
	}

	deletePaymentDetail(id) {
		return this.http.delete(this.rootURL + "/ShirtDetails/" + id);
	}



	refreshList() {
		this.http.get(this.rootURL + "/ShirtDetails")
			.toPromise()
			.then(res => this.list = res as ShirtDetail[])
	}


}
