import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-ractive',
  templateUrl: './ractive.component.html',
  styleUrls: ['./ractive.component.css'],
})
export class RactiveComponent implements OnInit {
  tempData: any;
  sendDataId: any;
  reactiveForm: any;
  d: any;
  constructor(private service: ManagerService) {}

  setData() {
    localStorage.setItem(
      this.sendDataId,
      JSON.stringify(this.reactiveForm?.value)
    );

    console.log(localStorage.getItem(JSON.parse(this.sendDataId)));
  }
  ngOnInit() {
    this.tempData = new ManagerService().getData(this.sendDataId);
    this.d = JSON.parse(this.tempData);

    this.reactiveForm = new FormGroup({
      fName: new FormControl(this.d.fName || ''),
      mName: new FormControl(this.d.mName || ''),
      lName: new FormControl(this.d.lName || ''),

      age: new FormControl(this.d.age || null),
      gender: new FormControl(this.d.gender || ''),
      company: new FormControl(this.d.company || ''),
    });
  }
}
