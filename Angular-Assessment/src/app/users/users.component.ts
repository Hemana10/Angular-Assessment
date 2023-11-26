import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from '../shared/accordion/accordion.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreDetails } from '../store/store.state';
import { EditUsersComponent } from './edit-users/edit-users.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, AccordionComponent,
    EditUsersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public users$: Observable<any>;

  constructor(private store: Store) {
    this.users$ = this.store.select((state: StoreDetails) => state.users);
  }

}
