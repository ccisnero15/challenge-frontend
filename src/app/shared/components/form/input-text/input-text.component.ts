import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'

import { ValidatorComponent } from '../validator/validator.component'
import { FormField } from '../../../../core/models/classes/form-field.class'

@Component({
    selector: 'input-text',
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule, ValidatorComponent],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss',
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
export class InputTextComponent extends FormField {
    placeholder = input<string>('')
}
