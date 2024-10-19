import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    NgFor,
    NgIf,
    ToastModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
})
export class LoginComponent {
  loginFrom = this.forms.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private forms: FormBuilder, 
    private auth: AuthService, private router:Router,
    private messageService: MessageService,) {}

  get email() {
    return this.loginFrom.controls['email'];
  }

  get password() {
    return this.loginFrom.controls['password'];
  }

  loginUser() {
    const { email, password } = this.loginFrom.value;
    this.auth.getUserByEmail(email as string).subscribe((response:any) => {
      if (response.length > 0 && response[0].password === password) {
        sessionStorage.setItem('email',email as string);
        this.router.navigate(['/home'])
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Email Or Password ',
        });
      }
    }, error =>{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Something went wrong',
      });
    });
  }
}
