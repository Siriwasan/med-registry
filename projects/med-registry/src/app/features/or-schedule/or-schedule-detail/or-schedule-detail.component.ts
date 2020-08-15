import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-or-schedule-detail',
  templateUrl: './or-schedule-detail.component.html',
  styleUrls: ['./or-schedule-detail.component.scss'],
})
export class OrScheduleDetailComponent implements OnInit {
  fg: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      HN: [null, Validators.required],
      title: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      SSN: [null, Validators.required],
      DOB: [null, Validators.required],
      age: [null, Validators.required],
      address: [null, Validators.required],
      nationality: [null, Validators.required],
    });
  }
}
