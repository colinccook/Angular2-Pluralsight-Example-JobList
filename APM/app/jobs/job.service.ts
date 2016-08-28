import { Injectable } from 'angular2/core';
import { IJob } from './IJob';

import {Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JobService {

    private _getJobApiUrl = 'api/jobs/jobs.json';

    constructor (private _http: Http) {}

    getJobs(): Observable<IJob[]> {
        return this._http.get(this._getJobApiUrl)
            .map((response: Response) => <IJob[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}