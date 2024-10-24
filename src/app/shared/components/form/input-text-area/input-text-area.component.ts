import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { ValidatorComponent } from '../validator/validator.component'
import { FormField } from '../../../../core/models/classes/form-field.class'

@Component({
    selector: 'input-text-area',
    standalone: true,
    imports: [ReactiveFormsModule, InputTextareaModule, FloatLabelModule, ValidatorComponent],
    templateUrl: './input-text-area.component.html',
    styleUrl: './input-text-area.component.scss',
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
export class InputTextAreaComponent extends FormField {
    autoResize = input<boolean>(true)
    rows = input<number>()
}
