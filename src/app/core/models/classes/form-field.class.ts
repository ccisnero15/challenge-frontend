import { Directive, input } from "@angular/core"
import { FormErrorMessageType } from "../enums/form-errors.enum"

@Directive()
export abstract class FormField {
    controlName = input.required<string>()
    label = input<string>('')
    customErrMsg = input<FormErrorMessageType>()
}