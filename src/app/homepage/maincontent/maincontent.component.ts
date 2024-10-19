import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [CardModule, InputTextModule, ReactiveFormsModule, ButtonModule,NgFor,NgIf],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {
 
}
