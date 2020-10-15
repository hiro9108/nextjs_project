import React, { FC } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import styles from './styles.module.css';
import Button from '../components/UI/Button/Button';

const topIndexPage: FC = () => (
    <div>
        <div className={styles.Header}>My Portfolio</div>
        <div className={styles.Element}><p><Link href='/python'>Go to Python</Link></p></div>
        <div className={styles.Element}><p><Link href='/nodejs'>Go to Nodejs</Link></p></div>
        <div className={styles.Element}><p><Link href='/golang'>Go to Golang</Link></p></div>
        <Button clicked={() => Router.push('/nodejs')}>Router</Button>
    </div>
);

export default topIndexPage;