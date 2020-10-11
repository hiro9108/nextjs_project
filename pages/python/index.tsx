import React from 'react';
import Link from 'next/link';

import styles from './index.module.css';

const pythonIndexPage = () => (
    <div className={styles.App}>
        <h1>Python Page</h1>
        <p>Go back to <Link href='/'>Top Page</Link></p>
    </div>
);

export default pythonIndexPage;