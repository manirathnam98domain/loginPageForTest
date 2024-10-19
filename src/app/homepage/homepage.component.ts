import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ButtonModule } from 'primeng/button';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CardModule } from 'primeng/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ToolbarComponent,ButtonModule,MaincontentComponent,CardModule, InputTextModule, ReactiveFormsModule, ButtonModule,NgFor,NgIf],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  loginFrom = this.forms.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private forms: FormBuilder) {}

  get email() {
    return this.loginFrom.controls['email'];
  }

  get password() {
    return this.loginFrom.controls['password'];
  }
}
