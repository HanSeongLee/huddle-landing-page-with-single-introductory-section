import React from 'react';
import styles from './style.module.scss';
import Logo from '/public/logo.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'}
                  aria-label={'huddle'}
            >
                <a>
                    <Logo className={styles.logo} />
                </a>
            </Link>
        </header>
    );
};

export default Header;
