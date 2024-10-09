import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-account-address',
  standalone: true,
  imports: [
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzIconModule,
    NzButtonModule,
  ],
  templateUrl: './account-address.component.html',
  styleUrl: './account-address.component.scss',
})
export class AccountAddressComponent {
  validateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    company: FormControl<string>;
    address1: FormControl<string>;
    address2: FormControl<string>;
    city: FormControl<string>;
    phone: FormControl<string>;
  }> = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    company: ['', [Validators.required]],
    address1: ['', [Validators.required]],
    address2: ['', [Validators.required]],
    city: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });
  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
  ) {}
}
