import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.scss'
})
export class AccountCreateComponent  implements OnInit {

  accountForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      accountName: ['', [Validators.required, Validators.minLength(3)]],
      initialBalance: [0, [Validators.required, Validators.min(1)]],
      accountType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      console.log('✅ Account Created:', this.accountForm.value);
    }
  }

  get accountType() {
    return this.accountForm.get('accountType')?.value;
  }

}
