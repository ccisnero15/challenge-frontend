import { inject } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
import { MessageService } from 'primeng/api'
import { Observable } from 'rxjs'

import { BaseApi } from './base-api.class'

export abstract class CrudModal<T> {
    protected ref = inject(DynamicDialogRef)
    protected config = inject(DynamicDialogConfig)
    protected messageService = inject(MessageService)
    abstract api: BaseApi<T>
    abstract formGroup: FormGroup
    protected entityId: number = this.config.data.id
    protected data: T = this.config.data.dataModal
    private endpoint$: Observable<any> | undefined

    protected save(data: T) {
        this.endpoint$ = this.entityId ? this.api?.update(data, this.entityId) : this.api?.create(data)
        this.endpoint$.subscribe({
            next: (response) => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Saved.', life: 10000 })
                this.onClose('OK')
            },
            error: (error) => {
                this.errorMessage(error)
            },
        })
    }

    protected onSubmit() {
        Object.keys(this.formGroup.controls).forEach((key) => {
            this.formGroup.controls[key].markAsDirty()
        })

        if (this.formGroup.valid) {
            this.save(this.formGroup.getRawValue())
        }
    }

    protected onClose(response?: any) {
        this.ref.close(response || null)
    }

    protected errorMessage(error: any) {
        const data = {
            severity: 'error',
            summary: 'Error',
            detail: typeof error?.error === 'string' ? error.error : error.statusText,
            life: 10000,
        }

        this.messageService.add(data)
    }
}
