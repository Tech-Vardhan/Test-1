import { Component } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../service/manager.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  sendDataId: any;

  constructor(
    private activateroute: ActivatedRoute,
    private service: ManagerService,
    private route: Router
  ) {
    this.sendDataId = this.activateroute.snapshot.params['id'];
    this.activateroute.params.subscribe(
      (params) => (this.sendDataId = params['id'])
    );
  }

  user = new User('', '', '', '', '', '', '', '');
  textarea = '';
  public company = [
    'techExtensor',
    'Google',
    'MicroSoft',
    'Amazon',
    'Adobe',
    'IBM',
    'Spotify',
    'Facebook',
  ];

  selectedCompany = '';

  onFormSubmit(data: any) {
    console.log(data);
    this.service.sendManger(this.sendDataId, data);
    this.route.navigate(['ractive'],{queryParams:{data:this.sendDataId}})
  }

  // setItem(key:string , value: object){

  //   localStorage.setItem('dataSource', this.my===);
  // }
}
