import {
    FieldValues,
    FieldError,
    FieldErrors,
    UseFormRegister,
} from "react-hook-form";


export interface IField {
    register: UseFormRegister<FieldValues>,
    error: FieldError | FieldErrors | undefined
    defaultValue?: string | number
    label: string,
    placeholder: string
    title?: string,
    subTitle?: string,
    required?: boolean,
}