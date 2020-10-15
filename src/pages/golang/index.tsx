import React from 'react';
import Link from 'next/link';

import styles from '../../styles/styles.module.css';

const golangIndexPage = () => (
    <div className={styles.App}>
        <h1>Go Page</h1>
        <p>Go back to <Link href='/'>Top Page</Link></p>
    </div>
);

export default golangIndexPage;