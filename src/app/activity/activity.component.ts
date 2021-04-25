import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl('')
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
