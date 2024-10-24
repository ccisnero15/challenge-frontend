import { Injectable } from '@angular/core'
import { BaseApi } from '../../core/models/classes/base-api.class'
import { PostModel } from '../models/interfaces/post.interface'

@Injectable({
    providedIn: 'root',
})
export class PostsService extends BaseApi<PostModel> {
    protected override pathName = 'posts'
}
