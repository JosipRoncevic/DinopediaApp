import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    this.authService.login(username, password).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.errorMessage = 'Login failed. Please check your credentials and try again.';
      }
    );
  }
}
