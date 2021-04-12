import {Component, OnInit} from '@angular/core';
import {AlertService} from 'ngx-alerts';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  credentials: any;

  get primEmail() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    }
  );


  constructor(private alertService: AlertService) {
    this.credentials = {
      email: 'namankakkar2@gmail.',
      password: 'meet'
    };
  }


  ngOnInit() {

  }

  showAlerts(): void {
    this.alertService.info('This is just and information ngx alert');
    // this.alertService.danger('this is a danger alert');
    // this.alertService.success('this is a success alert');
    // this.alertService.warning('this is a warning alert');
    console.log('button is clicked');
  }

  onSubmit() {
    //console.log(this.loginForm.value);
    if (this.loginForm.get('email').value !== this.credentials.email && this.loginForm.get('password').value !== this.credentials.password) {
      this.alertService.danger('Email and Password is invalid');
    } else {
      this.alertService.success('You are going to login');
    }
  }
}
