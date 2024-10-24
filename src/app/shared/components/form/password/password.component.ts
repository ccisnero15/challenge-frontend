import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { FloatLabelModule } from 'primeng/floatlabel'
import { PasswordModule } from 'primeng/password'
import { ValidatorComponent } from '../validator/validator.component'
import { FormField } from '../../../../core/models/classes/form-field.class'

@Component({
    selector: 'password',
    standalone: true,
    imports: [ReactiveFormsModule, PasswordModule, FloatLabelModule, ValidatorComponent],
    templateUrl: './password.component.html',
    styleUrl: './password.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ],
    host: {
        class: 'Field',
    },
})
export class PasswordComponent extends FormField {
    placeholder = input<string>('')
}
