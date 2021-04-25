import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivityComponent } from "../activity/activity.component";

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  @ViewChild(ActivityComponent) days:any;

  constructor() {   

  }
  name?: string;




  ngOnInit(): void { 
  }
  ngAfterViewInit() {
    this.name = this.days.name
  }

}
