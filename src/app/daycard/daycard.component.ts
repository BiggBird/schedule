import { Component, OnInit, Input } from '@angular/core';
import { BookedTask } from '../models/daytasks';

@Component({
  selector: 'app-daycard',
  templateUrl: './daycard.component.html',
  styleUrls: ['./daycard.component.css']
})
export class DaycardComponent implements OnInit {
  @Input() day_of_week: any;
  @Input() idx: any; //timeindex: any;
  @Input() weekly_booked_tasks: any;

  booked_tasks: any = null;
  days_of_week_names: string[] = ["Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"] 
  
  time_intervals = Array.from({length: 24}, (v, k) => k%12);
  task_type_labels = ["Sleep", "Play", "Extracurricular", "Academics"];
  booked_task:BookedTask  = new BookedTask(1,1,"Peer Tutoring", this.task_type_labels[2]);

  constructor() { }

  ngOnInit(): void {
    let labels = ["Sleep", "Play", "Extracurricular", "Academics"]

    // this.booked_tasks = this.weekly_booked_tasks[this.day_of_week];
    // console.log(this.day_of_week)
    // console.log(this.weekly_booked_tasks)
    // console.log(this.weekly_booked_tasks.get(this.day_of_week))
    if (this.weekly_booked_tasks.get(this.day_of_week) == null) {
      this.weekly_booked_tasks.set(this.day_of_week, new Map([
        [0, new BookedTask(0,1,"Sleep",this.task_type_labels[0])],
        [8, new BookedTask(8,2,"Maths",this.task_type_labels[1])]
      ]));
    }
    this.booked_tasks = this.weekly_booked_tasks.get(this.day_of_week);
    // console.log(this.booked_tasks)
  }

  onKeyTaskname(value: string){
    this.booked_task.name = value;
  }

  onKeyTasktype(value: string){
    this.booked_task.type = value;
  }

  onKeyDuration(value: string){
    this.booked_task.duration = Number(value);
  }

  onclick(index: number) {
    this.booked_task.start = index;
    this.booked_tasks.set(index, JSON.parse(JSON.stringify(this.booked_task)));
    console.log(this.booked_tasks);
  }

  ondeleteclick(index: number) {
    this.booked_tasks.delete(index);
  }

}
