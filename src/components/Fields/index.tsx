import { FC } from "react";
import Input from "./components/Input";
import { IField } from './IFields'

interface IFields {
    input: FC<IField>
}

const Fields: IFields = {
    input: Input
}

export default Fields