import { Component } from 'angular2/core';
import { JobListComponent } from './jobs/job-list.component'
import { JobService } from './jobs/job.service'
import { HTTP_PROVIDERS } from 'angular2/http';

import 'rxjs/Rx'; // Load all features

@Component({
    selector: 'pm-app',
    template: '<h1>List of jobs</h1><pm-jobs></pm-jobs>',
    directives: [JobListComponent],
    providers: [JobService, HTTP_PROVIDERS]
}) 
export class AppComponent {
    pageTitle: string = "Colins is the bests";
}