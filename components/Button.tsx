import React from 'react';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const button = (props) => (
    <Button
        variant='contained'
        color='primary'
        size='large'
        startIcon={<SaveIcon />}
        onClick={props.clicked}>
        {props.children}
    </Button>
);

export default button;