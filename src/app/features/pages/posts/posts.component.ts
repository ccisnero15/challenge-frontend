import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button'

import { CrudTable } from '../../../core/models/classes/crud-table.class'
import { PostModel } from '../../../shared/models/interfaces/post.interface'
import { PostsService } from '../../../shared/services/posts.service'
import { AuthStateService } from '../../../shared/state/auth-state.service'
import { PostModalComponent } from './components/post-modal/post-modal.component'
@Component({
    standalone: true,
    imports: [TableModule, CommonModule, ButtonModule],
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.scss',
})
export default class PostsComponent extends CrudTable<PostModel> implements OnInit {
    protected authStateService = inject(AuthStateService)
    api = inject(PostsService)
    override entityName: string = 'Post'
    override modalComponent = PostModalComponent

    ngOnInit(): void {
        this.getRecords()
    }
}
