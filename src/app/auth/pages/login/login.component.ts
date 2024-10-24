import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { PasswordModule } from 'primeng/password'
import { NgxSpinnerService } from 'ngx-spinner'
import { MessageService } from 'primeng/api'

import { AuthStateService } from '../../../shared/state/auth-state.service'
import { InputTextComponent } from '../../../shared/components/form/input-text/input-text.component'
import { PasswordComponent } from '../../../shared/components/form/password/password.component'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CommonModule, ReactiveFormsModule, InputTextModule, PasswordModule, InputTextComponent, PasswordComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    protected authStateService = inject(AuthStateService)
    protected router = inject(Router)
    private spinnerService = inject(NgxSpinnerService)
    private messageService = inject(MessageService)

    formGroup = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })

    onSubmit() {
        Object.keys(this.formGroup.controls).forEach((key) => {
            this.formGroup.get(key)?.markAsDirty()
        })

        if (this.formGroup.valid) {
            this.spinnerService.show()
            this.authStateService.login(this.formGroup?.get('email')?.value!, this.formGroup?.get('password')?.value!).subscribe({
                next: (response) => {
                    if (response) {
                        this.router.navigate(['posts'])
                        return
                    }

                    const data = {
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Invalid credentials',
                        life: 10000,
                    }

                    this.messageService.add(data)
                    this.spinnerService.hide()
                },
            })
        }
    }
}
