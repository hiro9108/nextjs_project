import React from 'react';
import Link from 'next/link';

import styles from '../../styles/styles.module.css';
import TextField from '../../components/UI/TextField/TextField';
import Button from '../../components/UI/Button/Button';

const nodejsIndexPage = () => (
    <div className={styles.App}>
        <h1>Nodejs Page</h1>
        <form action='http://localhost:3080' method='post'>
            <TextField type='email' label='Email' placeholder="hiro@creator.com" name='username' />
            <TextField type='passward' label='Passward' placeholder="*******" name='passward' />
            <Button type='submit'>Nodejs</Button>
        </form>
        <p>Go back to <Link href='/'>Top Page</Link></p>
    // </div>
);

export default nodejsIndexPage;