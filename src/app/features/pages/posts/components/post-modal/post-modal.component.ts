import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { JsonPipe } from '@angular/common'

import { CrudModal } from '../../../../../core/models/classes/crud-modal.class'
import { PostModel } from '../../../../../shared/models/interfaces/post.interface'
import { PostsService } from '../../../../../shared/services/posts.service'
import { InputTextComponent } from '../../../../../shared/components/form/input-text/input-text.component'
import { InputTextAreaComponent } from '../../../../../shared/components/form/input-text-area/input-text-area.component'

@Component({
    selector: 'app-post-modal',
    standalone: true,
    imports: [ReactiveFormsModule, ButtonModule, InputTextComponent, JsonPipe, InputTextAreaComponent],
    templateUrl: './post-modal.component.html',
    styleUrl: './post-modal.component.scss',
})
export class PostModalComponent extends CrudModal<PostModel> {
    api = inject(PostsService)

    formGroup = new FormGroup({
        body: new FormControl(this.data.body || null, Validators.required),
        id: new FormControl(this.data.id || null),
        title: new FormControl(this.data.title || null, Validators.required),
        userId: new FormControl(this.data.userId || null),
    })
}
