import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table'
import { CrudTable } from '../../../core/models/classes/crud-table.class'
import { PostModel } from '../../../shared/models/interfaces/post.interface'
import { AuthStateService } from '../../../shared/state/auth-state.service'
import { PostsService } from '../../../shared/services/posts.service'
import { PostModalComponent } from '../posts/components/post-modal/post-modal.component'
import { UserModel } from '../../../shared/models/interfaces/user.interface'
import { UsersService } from '../../../shared/services/users.service'

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [TableModule, CommonModule, ButtonModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss',
})
export default class UsersComponent extends CrudTable<UserModel> implements OnInit {
    protected authStateService = inject(AuthStateService)
    api = inject(UsersService)
    override entityName: string = 'User'
    override modalComponent = PostModalComponent

    ngOnInit(): void {
        this.getRecords()
    }
}
