import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import styles from '../styles.module.css';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

const nodejsIndexPage = () => (
    <div className={styles.App}>
        <h1>Nodejs Page</h1>
        <TextField type='email' label='Email' placeholder="hiro@creator.com"/>
        <Button clicked={() => Router.push('http://localhost:3010')}>Nodejs</Button>
        <p>Go back to <Link href='/'>Top Page</Link></p>
    </div>
);

export default nodejsIndexPage;