import React from 'react';
import Link from 'next/link';

import styles from '../styles.module.css';

const pythonIndexPage = () => (
    <div className={styles.App}>
        <h1>Go Page</h1>
        <p>Go back to <Link href='/'>Top Page</Link></p>
    </div>
);

export default pythonIndexPage;