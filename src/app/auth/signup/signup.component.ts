import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    console.log('submit--', this.signUpForm.value);
    if (this.signUpForm.invalid) {
      return;
    }

    this.authService.SignUp(this.signUpForm.value.email, this.signUpForm.value.password)
  }

}
