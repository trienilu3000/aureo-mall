import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';


interface FieldOption {
  label: string;
  value: any;
}

interface Field {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  options?: FieldOption[]; 
}

@Component({
  selector: 'app-form-dialog-handler',
  standalone: true,
  imports: [NzModalModule,CommonModule,ReactiveFormsModule,NzRadioModule,NzCheckboxModule,NzSelectModule,NzFormModule],
  templateUrl: './form-dialog-handler.component.html',
  styleUrl: './form-dialog-handler.component.scss'
})


export class FormDialogHandlerComponent implements OnInit{
  @Input() isVisible = false;
  itemForm: FormGroup;
  fields: Field[] = [];

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef
  ) {}

  ngOnInit(): void {
    this.fields = this.modalRef.getContentComponent().fields;
    this.itemForm = this.fb.group({});
    this.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      this.itemForm.addControl(field.name, this.fb.control('', validators));
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      this.modalRef.close(this.itemForm.value);
    }
  }

  onCancel(): void {
    this.modalRef.close();
  }
}
