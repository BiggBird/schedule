import { Component, OnInit } from '@angular/core';
import { BookedTask } from '../models/daytasks';

@Component({
  selector: 'app-daycard',
  templateUrl: './daycard.component.html',
  styleUrls: ['./daycard.component.css']
})
export class DaycardComponent implements OnInit {

  booked_tasks: any;
  day_of_week: string =  "Monday";
  
  time_intervals = Array.from({length: 24}, (v, k) => k%12);
  booked_task:BookedTask  = new BookedTask();

  constructor() { }

  ngOnInit(): void {
    this.booked_tasks = new Map([
      [0, {
        "start": 0,
        "duration": 1,
        "name": "Sleep",
        "type": "Sleep"
      }],
      [8, {
        "start": 8,
        "duration": 2,
        "name": "Maths",
        "type": "Class"
      }]
    ]);

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
