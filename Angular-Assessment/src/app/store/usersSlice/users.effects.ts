import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchUsers, setUsers } from "./users.actions";
import { map, of, switchMap, tap } from "rxjs";
import { UsersService } from "../../users/users.service";
import { Injectable } from "@angular/core";
import { User } from "../../users/user.model";
import { Store } from "@ngrx/store";

@Injectable()
export class UsersEffects {

    loadUsers = createEffect(() => this.actions$.pipe(
        ofType(fetchUsers),
        switchMap(() => {
            this.usersService.getUsers().pipe(
            map((res) => res.users.map(user =>  {
                {return {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone
                }}
            }))
            ).subscribe(
                (data: User[]) => {
                    return of(this.store.dispatch(setUsers({data})));
                }
            );
            return of(this.store.dispatch(setUsers({data: []})));
        })
    ), { dispatch: false});

    constructor(
        private actions$: Actions,
        private usersService: UsersService,
        private store: Store
    ) {}
}