import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user.model';
import { FormsModule, ReactiveFormsModule,
   UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { patchUserDetails, setUsers } from '../../store/usersSlice/users.actions';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-edit-users',
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss'
})
export class EditUsersComponent implements OnInit {
  @Input('initFormDetails') userDetails: User;
  public userForm: UntypedFormGroup;
  public showSpinner = false;

  constructor(
    private fb: UntypedFormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initilizeForm();
  }

  public onSubmit() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.store.dispatch(patchUserDetails({ data: this.userForm.value}));
    }, 2000);
  }

  public initilizeForm() {
    this.userForm = this.fb.group({
      id: [this.userDetails?.id],
      firstName: [this.userDetails?.firstName],
      lastName: [this.userDetails?.lastName],
      email: [this.userDetails?.email],
      phone: [this.userDetails?.phone]
    });
  }
}
