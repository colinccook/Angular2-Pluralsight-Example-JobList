import {Component, OnInit} from 'angular2/core'
import {IJob} from './IJob'
import {IMilestone} from './IMilestone'
import {JobFilterPipe} from './job-filter.pipe'
import {MilestoneComponent} from '../shared/milestone.component'
import {JobService} from './job.service'

@Component({
    selector: 'pm-jobs',
    templateUrl: 'app/jobs/job-list.component.html',
    styleUrls: ['app/jobs/job-list.component.css'],
    pipes: [[JobFilterPipe]],
    directives: [MilestoneComponent]
})

export class JobListComponent implements OnInit {
    pageTitle: string = 'Job List';
    filterType: number = 0; 
    // 0 - everything
    // 1 - in progress
    // 2 - awaiting
    jobs: IJob[];
    errorMessage: string;

    constructor(private _jobService: JobService) {

    }
    
    filter(filterState: number): void {
        this.filterType = filterState;
    };

    ngOnInit(): void {
        console.trace('In OnInit');
        
        this._jobService.getJobs()
            .subscribe(
                jobs => this.jobs = jobs,
                error => this.errorMessage = <any>error);
    }

    onMilestoneClicked(message: string): void {
        this.pageTitle = 'Milestone clicked: ' + message;
    }
}
