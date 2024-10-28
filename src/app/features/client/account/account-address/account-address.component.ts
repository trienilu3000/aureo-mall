import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { NzModalRef, NzModalService, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { UserInfo } from 'src/app/core/models/user/auth.models';
import { MyInfoService } from 'src/app/core/services/user/my-info.service';
import { FormDialogHandlerComponent } from 'src/app/shared/common/form-dialog-handler/form-dialog-handler.component';

@Component({
  selector: 'app-account-address',
  standalone: true,
  imports: [
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzIconModule,
    NzButtonModule,
    CommonModule
  ],
  templateUrl: './account-address.component.html',
  styleUrl: './account-address.component.scss',
})
export class AccountAddressComponent implements OnInit{
  isAddressVisible: boolean = false;
  items :UserInfo[] = []

  validateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    address: FormControl<string>;
    province: FormControl<string>;
    district: FormControl<string>;
    ward: FormControl<string>;
    phone: FormControl<string>;
  }> = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    province: ['', [Validators.required]],
    district: ['', [Validators.required]],
    ward: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });
  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private myInfoService : MyInfoService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {

  }

  openAddDialog(): void {
    const fields = [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'price', label: 'Price', type: 'number', required: false }
    ];

    const modalRef = this.modal.create({
      nzTitle: 'Add New Item',
      nzContent: FormDialogHandlerComponent,
      // nzData: { fields: fields }
    });

    modalRef.afterClose.subscribe(result => {
      if (result) {
        this.items.push(result); 
      }
    });
  }

  openEditDialog(item): void {
    const fields = [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'price', label: 'Price', type: 'number', required: false }
    ];

    const modalRef = this.modal.create({
      nzTitle: 'Edit Item',
      nzContent: FormDialogHandlerComponent,
      // nzData: { fields: fields, item: item }
    });

    modalRef.afterClose.subscribe(result => {
      if (result) {
        const index = this.items.indexOf(item);
        this.items[index] = result; 
      }
    });
  }
  
  getMyAddress(){
    this.myInfoService.getMyAddress().subscribe({
      next :res => {
        console.log('ha',res)
      }
    })
  }


}
