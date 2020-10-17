import React from 'react';
import Link from 'next/link';

import styles from '../../styles/styles.module.css';

const secret = () => (
    <div>
        <div className={styles.Header}>Secret Page</div>
        <div className={styles.Element}><p><Link href='/python'>Go to Python</Link></p></div>
        <div className={styles.Element}><p><Link href='/nodejs'>Go to Nodejs</Link></p></div>
        <div className={styles.Element}><p><Link href='/golang'>Go to Golang</Link></p></div>
    </div>
);

export default secret;