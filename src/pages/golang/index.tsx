import React from 'react';
import Link from 'next/link';

import styles from '../../styles/styles.module.css';

const golangIndexPage = () => (
    <div className={styles.App}>
        <h1>Go App Page</h1>
        <Link href='/secret'><p>Go back to secret page</p></Link>
    </div>
);

export default golangIndexPage;