import React from 'react';
import styles from './style.module.scss';
import FacebookIcon from '/public/icons/icon-facebook.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';

const Footer = () => {
    return (
        <footer>
            <ul className={styles.socialContainer}>
                <li className={styles.socialItem}>
                    <a href={'#'}>
                        <FacebookIcon className={styles.icon} />
                    </a>
                </li>
                <li className={styles.socialItem}>
                    <a href={'#'}>
                        <TwitterIcon className={styles.icon} />
                    </a>
                </li>
                <li className={styles.socialItem}>
                    <a href={'#'}>
                        <InstagramIcon className={styles.icon} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
