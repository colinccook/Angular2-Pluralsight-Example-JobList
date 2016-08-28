import { PipeTransform, Pipe } from 'angular2/core';
import { IJob } from './IJob';

@Pipe({
    name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

    transform(value: IJob[], args: string[]): IJob[] {
        let filter: string = args[0] ? args[0] : '0';

        console.trace(filter);
     
        if (filter == '1')
            return value.filter((job: IJob) =>
                (job.Spec !== null && job.Spec.Completed === null)
                || (job.Plan !== null && job.Plan.Completed === null)
                || (job.Implemented !== null && job.Implemented.Completed === null)
                || (job.Test !== null && job.Test.Completed === null)
                || (job.PutLive !== null && job.PutLive.Completed === null)
            );
        
        if (filter == '2')
            return value.filter((job: IJob) =>
                (job.Spec !== null && job.Spec.Completed !== null && job.Plan === null)
                || (job.Plan !== null && job.Plan.Completed !== null && job.Implemented === null)
                || (job.Implemented !== null && job.Implemented.Completed !== null && job.Test == null)
                || (job.Test !== null && job.Test.Completed && job.PutLive == null)
            );

        return value;
     }
}