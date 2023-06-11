import {
    FieldValues,
    FieldError,
    FieldErrors,
    UseFormRegister,
    Control,
} from "react-hook-form";


export interface IField {
    error: FieldError | FieldErrors | undefined
    defaultValue?: { value: string | number, name: string }
    label: string,
    placeholder: string
    title?: string,
    subTitle?: string,
    required?: boolean,
}

export interface IInputField extends IField {
    register: UseFormRegister<FieldValues>,
}

export interface IControlField extends IField {
    control: Control<FieldValues>,
    getOptionLabel?: (option: any) => string,
    values: {
        [key: string]: string | number | object;
        //todo: Fix
        // value: string,
        // label: string,
    }[]
}