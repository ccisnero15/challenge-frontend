import { ActivatedRoute, Router } from '@angular/router'
import { BaseApi } from './base-api.class'
import { inject } from '@angular/core'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { ConfirmationService, MessageService } from 'primeng/api'

export abstract class CrudTable<T> {
    abstract api: BaseApi<T>
    protected modalComponent: any
    private activatedRoute = inject(ActivatedRoute)
    protected dialogService = inject(DialogService)
    protected confirmationService = inject(ConfirmationService)
    protected messageService = inject(MessageService)
    protected router = inject(Router)
    protected ref: DynamicDialogRef | undefined
    abstract entityName: string
    protected records: T[] = []

    protected getRecords() {
        this.api?.getPaginatedList().subscribe({
            next: (response) => {
                this.records = response
                // this.router.navigate([], {
                //     queryParams: { start: 0, length: 0 },
                //     queryParamsHandling: 'merge',
                // })
            },
            error: (error) => {
                console.log(error)
            },
        })
    }

    // private getPaginationParams() {
    //     const { start, length } = this.activatedRoute.snapshot.queryParams
    //     return { start: start ? parseInt(start) : 0, length: length ? parseInt(length) : 0 }
    // }

    protected openCrudModal(data?: any, id: number | null = null) {
        this.ref = this.dialogService.open(this.modalComponent, {
            header: id ? `Edit ${this.entityName}` : `Create ${this.entityName} `,
            width: '50vw',
            data: {
                dataModal: data || null,
                id: id || null,
            },
            resizable: true,
        })

        this.ref.onClose.subscribe((response) => (response ? (this.getRecords(), console.log(response)) : null))
    }

    protected deleteRecord(id: number, label: string) {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete <b> ${label} </b>?`,
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.api.delete(id).subscribe({
                    next: () => {
                        this.getRecords()
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Deleted', life: 10000 })
                    },
                    error: (error) => {
                        console.log(error)
                    },
                })
            },
            reject: () => {
                this.confirmationService.close()
            },
        })
    }
}
