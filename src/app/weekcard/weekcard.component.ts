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
    let labels = ["Sleep", "Play", "Extracurricular", "Academics"]

    let monday_tasks = new Map([
      [2, new BookedTask(2,1,"Sleep",labels[0])],
      [5, new BookedTask(5,2,"English",labels[3])]
    ]);

    let tuesday_tasks = new Map([
      [2, new BookedTask(2,1,"Sleep",labels[0])],
      [5, new BookedTask(5,1,"Science",labels[3])],
      [10, new BookedTask(10,2,"Maths",labels[3])]
    ]);

    let wednesday_tasks = new Map([
      [2, new BookedTask(2,1,"Sleep",labels[0])],
      [8, new BookedTask(8,1,"Math II",labels[3])],
      [14, new BookedTask(14,2,"Math Club",labels[2])]
    ]);

    let thursday_tasks = new Map([
      [2, new BookedTask(2,1,"Sleep",labels[0])],
      [10, new BookedTask(10,1,"Gov",labels[2])],
      [9, new BookedTask(9,2,"Odessey of the Mind",labels[2])]
    ]);

    let friday_tasks = new Map([
      [2, new BookedTask(2,1,"Sleep",labels[0])],
      [6, new BookedTask(6,1,"Eco",labels[3])],
      [10, new BookedTask(16,2,"Math Club",labels[3])],
      [16, new BookedTask(16,2,"Math Club",labels[1])]
    ]);

    this.weekly_booked_tasks = new Map ([
      [0, monday_tasks],
      [1, tuesday_tasks],
      [2, wednesday_tasks],
      [3, thursday_tasks],
      [4, friday_tasks]
    ])

    // this.setDataInLocalStorage();
  }

  // setDataInLocalStorage(): void {
  //   localStorage.setItem('weekly_booked_tasks', this.weekly_booked_tasks); //Set Global Variable
  // }

}
