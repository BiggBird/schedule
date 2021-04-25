import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
// import { profile } from 'node:console';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   startTime: new FormControl(''),
  //   endTime: new FormControl('')
  // });
  @Input() profileForm?: FormGroup;

  // name= new FormControl('')
  // startTime= new FormControl('')
  // endTime= new FormControl('')

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  // }
  constructor(private fb: FormBuilder) { 

  }
  // name1 = this.profileForm.controls['name'].value
  ngOnInit(): void {
    // this.profileForm = this.fb.group({
    //   name: ["", Validators.required],
    //   startTime: ["", Validators.required],
    //   emailTime: ["", Validators.required]

    // })
    // this.profileForm.valueChanges.subscribe(newVal => console.log(newVal))
  }

}
