import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {IMilestone} from '../jobs/IMilestone';

@Component({
    selector: 'nes-milestone',
    templateUrl: 'app/shared/milestone.component.html',
    styleUrls: ['app/shared/milestone.component.css']
})
export class MilestoneComponent {
    @Input() Milestone: IMilestone; 
    @Output() milestoneClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.milestoneClicked.emit('A milestone was clicked!');
    }
}