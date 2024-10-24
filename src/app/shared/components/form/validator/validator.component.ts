import { Component, inject, input, OnInit } from '@angular/core'
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms'
import { defaultFormErrMsg, FormErrorMessageType } from '../../../../core/models/enums/form-errors.enum'

@Component({
    selector: 'validator',
    standalone: true,
    imports: [],
    templateUrl: './validator.component.html',
    styleUrl: './validator.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ],
})
export class ValidatorComponent implements OnInit {
    controlName = input.required<string>()
    customErrMsg = input<FormErrorMessageType>()
    control!: AbstractControl
    protected defaultFormErrMsg = defaultFormErrMsg

    parentContainer = inject(ControlContainer)

    getErrorMessage(error: string): string {
        return (
            this.customErrMsg()?.[error as keyof FormErrorMessageType] ?? this.defaultFormErrMsg?.[error as keyof FormErrorMessageType] ?? '* Invalid field'
        )
    }

    get controlErrors(): string[] {
        return this.control.errors ? Object.keys(this.control?.errors) : []
    }

    get hasErrors() {
        return this.control?.dirty && this.control.invalid
    }

    get parentFormGroup() {
        return this.parentContainer.control as FormGroup
    }

    ngOnInit(): void {
        this.control = this.parentFormGroup.get(this.controlName())!
    }
}
