import React from 'react';
// import Link from 'next/link';
// import Router from 'next/router';

// import styles from '../../styles/styles.module.css';
// import TextField from '../../components/UI/TextField/TextField';
// import Button from '../../components/UI/Button/Button';

import SignIn from '../../components/Auth/SignIn/SignIn';

const nodejsIndexPage = () => (
    <SignIn />
    // <div className={styles.App}>
    //     <h1>Nodejs Page</h1>
    //     <form action='http://localhost:3080' method='post'>
    //         <TextField type='email' label='Email' placeholder="hiro@creator.com" name='username'/>
    //         <TextField type='passward' label='Passward' placeholder="*******" name='passward'/>
    //         <Button type='submit'>Nodejs</Button>
    //     </form>
    //     <p>Go back to <Link href='/'>Top Page</Link></p>
    // </div>
);

export default nodejsIndexPage;