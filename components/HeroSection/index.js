import React from 'react';
import styles from './style.module.scss';
import MockupsSVG from '/public/img/illustration-mockups.svg';

const HeroSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.mockupsContainer}>
                <MockupsSVG className={styles.mockups} />
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    Build The Community Your Fans Will Love
                </h1>
                <p className={styles.description}>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
                    connections with your users as you engage in genuine discussion.
                </p>
                <button className={styles.registerButton}
                        aria-label={'Register'}
                >
                    Register
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
