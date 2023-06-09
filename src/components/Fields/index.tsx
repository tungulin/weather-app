import { FC } from "react";
import Input from "./components/Input";
import { IControlField, IInputField } from './IFields'
import Autocomplete from "./components/Autocomplete";

interface IFields {
    input: FC<IInputField>
    autocomplete: FC<IControlField>
}

const Fields: IFields = {
    input: Input,
    autocomplete: Autocomplete
}

export default Fields