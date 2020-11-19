import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    console.log('submit--', this.signInForm.value);
    if (this.signInForm.invalid) {
      return;
    }

    this.authService.SignIn(this.signInForm.value.email, this.signInForm.value.password)
  }

}
