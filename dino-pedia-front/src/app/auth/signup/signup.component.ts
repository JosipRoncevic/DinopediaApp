import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit(): void {
    const { username, password } = this.form.getRawValue();
    this.authService.signup(username, password).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error: any) => {
        this.handleError(error);
      }
    );
  }

  handleError(error: any): void {
    if (error.status === 409) {
      this.errorMessage = 'That username already exists';
    } else if (error.status === 400) {
      this.errorMessage = 'Invalid username or password';
    } else {
      this.errorMessage = 'An unexpected error occurred. Please try again later.';
    }
  }
}
