import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgxSpinnerModule } from 'ngx-spinner'
import { ConfirmationService, MessageService } from 'primeng/api'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { DialogService } from 'primeng/dynamicdialog'
import { ToastModule } from 'primeng/toast'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgxSpinnerModule, ToastModule, ConfirmDialogModule],
    providers: [DialogService, MessageService, ConfirmationService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'challenge-frontend'
}
