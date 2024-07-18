import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [   
    CommonModule,     
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors:any = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private alertService: AlertService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.alertService.openSnackBar('Vous êtes connecté !');
        this.responseHandler(result);
        this.router.navigate(['']);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['']);
      }
    );
  }

  // Handle response
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }
}
