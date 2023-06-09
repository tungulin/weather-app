import React, { FC } from 'react'
import { Controller } from "react-hook-form";
import AutocompleteMUI from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { IControlField } from '../IFields';
import { Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Autocomplete: FC<IControlField> = ({ label, title, defaultValue, getOptionLabel, control, values, placeholder }) => {
    //todo: check controlled
    return (
        <Controller
            name={label}
            control={control}
            defaultValue={defaultValue}
            render={({ field, ...props }) => {
                return (
                    <div className='inputContainer'>
                        <div className='inputContainer__title'>{title}</div>
                        <AutocompleteMUI
                            sx={{
                                '& .MuiAutocomplete-inputRoot': {
                                    borderRadius: 3,
                                    border: '2px solid var(--base-200);'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                },
                                '& .MuiAutocomplete-popper': {
                                    backgroundColor: '#ddd'
                                }
                            }}
                            popupIcon={<KeyboardArrowDownIcon />}
                            fullWidth={true}
                            value={field.value}
                            onChange={(e, data) => field.onChange(data)}
                            getOptionLabel={getOptionLabel}
                            options={values}
                            autoComplete={true}
                            renderInput={(params) => <TextField  {...params} placeholder={placeholder} />}
                        />
                    </div>
                )
            }}
        />
    )
}


export default Autocomplete