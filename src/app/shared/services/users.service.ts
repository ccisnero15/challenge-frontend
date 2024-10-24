import { Injectable } from '@angular/core'
import { BaseApi } from '../../core/models/classes/base-api.class'
import { UserModel } from '../models/interfaces/user.interface'

@Injectable({
    providedIn: 'root',
})
export class UsersService extends BaseApi<UserModel> {
    protected override pathName = 'posts/1/todos'
}
