import { Component, OnInit } from '@angular/core';
import { BookedTask } from '../models/daytasks';

@Component({
  selector: 'app-weekcard',
  templateUrl: './weekcard.component.html',
  styleUrls: ['./weekcard.component.css']
})
export class WeekcardComponent implements OnInit {
  days_of_week: Number[] = [0,1,2,3,4,5,6];

  weekly_booked_tasks: any;

  // day_of_week: string =  "Monday";
  time_intervals = Array.from({length: 24}, (v, k) => k%12);
  // booked_task:BookedTask  = new BookedTask(1,0,"Peer Tutoring", "Tutor");

  constructor() { }

  ngOnInit(): void {
    let labels = ["Sleep", "Play", "Other", "Class"]


    let monday_tasks = new Map([
      [2, new BookedTask(2,1,"Sleep",labels[0])],
      [2, new BookedTask(2,1,"Sleep",labels[0])],
      [6, new BookedTask(2,1,"Sleep",labels[0])],
      [5, new BookedTask(2,1,"Sleep",labels[0])],
      [4, new BookedTask(2,1,"Sleep",labels[0])],
      [3, new BookedTask(2,1,"Sleep",labels[0])],
      [16, new BookedTask(2,1,"Gaming",labels[1])],
    ]);

    let tuesday_tasks = new Map([
      [5, new BookedTask(5,1,"Science",labels[3])],
    ]);

    let wednesday_tasks = new Map([
      [8, new BookedTask(8,1,"Math II",labels[3])],
      [14, new BookedTask(14,2,"Math Club",labels[2])],
      [15, new BookedTask(14,2,"Math Club",labels[2])],
      [16, new BookedTask(14,2,"Math Club",labels[2])],
      [17, new BookedTask(14,2,"Math Club",labels[2])]
    ]);

    let thursday_tasks = new Map([
      [10, new BookedTask(10,1,"Gov",labels[3])],
      [20, new BookedTask(2,1,"Gaming",labels[1])],
    ]);

    let friday_tasks = new Map([
      [6, new BookedTask(6,1,"Econ",labels[3])],
      [10, new BookedTask(16,2,"Math Club",labels[2])],
      [16, new BookedTask(16,2,"Math Club",labels[2])]
    ]);

    let sat_tasks = new Map([
      [0, new BookedTask(0,2,"Sleep",labels[0])],
      [16, new BookedTask(2,1,"Gaming",labels[1])],
      [20, new BookedTask(2,1,"Gaming",labels[1])],
      [21, new BookedTask(2,1,"Gaming",labels[1])],
    ]);

    let sun_tasks = new Map([
      [0, new BookedTask(0,3,"Sleep",labels[0])],
      [10, new BookedTask(10,2,"Math",labels[3])]
    ]);


    this.weekly_booked_tasks = new Map ([
      [0, monday_tasks],
      [1, tuesday_tasks],
      [2, wednesday_tasks],
      [3, thursday_tasks],
      [4, friday_tasks],
      [5, sat_tasks],
      [6, sun_tasks]
    ])

  }

}
