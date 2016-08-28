import {IMilestone} from './IMilestone'

export interface IJob {
    Id: number;
    Title: string;
    Spec: IMilestone;
    Plan: IMilestone;
    Implemented: IMilestone;
    Test: IMilestone;
    PutLive: IMilestone;
}