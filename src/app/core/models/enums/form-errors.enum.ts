enum FormErrorsEnum {
    required = 'required',
    maxlength = 'maxlength',
    minlength = 'minlength',
    number = 'number',
    min = 'min',
    max = 'max',
    email = 'email',
    invalid = 'invalid',
}

export type FormErrorMessageType = {
    [key in FormErrorsEnum]?: string
}

export const defaultFormErrMsg: FormErrorMessageType = {
    required: '* This field is required',
    maxlength: '* Maximum length exceeded',
    minlength: '* Minimum length not reached',
    number: '* Invalid Number',
    min: '* Number out of range',
    max: '* Number out of range',
    email: '* Wrong email format',
    invalid: '* Invalid value',
}
