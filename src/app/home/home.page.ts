import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]+$'),
          Validators.maxLength(10),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  onLoginFormSubmit(value: any) {
    alert('User Name: ' + value.username + ' Password: ' + value.password);
  }
}
