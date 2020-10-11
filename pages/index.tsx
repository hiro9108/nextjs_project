import React, { FC } from 'react';
import Link from 'next/link';

import styles from './index.module.css';

const topIndexPage: FC = () => (
    <div>
        <div className={styles.Header}>Backend Languages</div>
        <div className={styles.Element}><p><Link href="/python">Go to Python</Link></p></div>
        <div className={styles.Element}><p><Link href="/nodejs">Go to Nodejs</Link></p></div>
        <div className={styles.Element}><p><Link href="/golang">Go to Golang</Link></p></div>
    </div>
);

export default topIndexPage;