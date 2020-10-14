import React from 'react';

import TextField from '@material-ui/core/TextField';

const textField = (props) => (
    <TextField
        variant='outlined'
        color='secondary'
        type={props.type}
        label={props.label}
        placeholder={props.placeholder}>
    </TextField>
);

export default textField;