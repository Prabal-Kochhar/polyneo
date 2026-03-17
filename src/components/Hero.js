'use client';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroWrap}>
      <div className={`inner ${styles.hero}`}>
        <div className={styles.left}>
          <span className={styles.tag}>TEF · TCF · A1 TO C2</span>
          <h1 className={styles.h1}>
            Speak French<br />with <em>confidence</em>
          </h1>
          <p className={styles.sub}>
            Immersive lessons with native teachers. Group classes, private
            sessions, and exam prep tailored to your goals.
          </p>
          <div className={styles.btns}>
            <a href="#contact" className={styles.btnPrimary}>
              START YOUR JOURNEY
            </a>
            <a href="#courses" className={styles.btnSecondary}>
              Explore courses →
            </a>
          </div>
          <div className={styles.groupPhoto}>
            <img
              src="/group.jpg"
              alt="Polyneo students"
              className={styles.groupImg}
            />
            <div className={styles.groupCaption}>
              <span className={styles.groupCaptionText}>NOS ÉTUDIANTS · VANCOUVER</span>
              <div className={styles.groupFlag}>
                <span className={styles.flagBlue}></span>
                <span className={styles.flagWhite}></span>
                <span className={styles.flagRed}></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.tribar}>
              <span style={{ background: '#002395' }}></span>
              <span style={{ background: 'rgba(255,255,255,0.2)' }}></span>
              <span style={{ background: '#ED2939' }}></span>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>95%</div>
              <div className={styles.statLabel}>TEF SUCCESS RATE</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.stat}>
              <div className={styles.statNum}>200+</div>
              <div className={styles.statLabel}>STUDENTS TAUGHT</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.stat}>
              <div className={styles.statNum}>10+</div>
              <div className={styles.statLabel}>YEARS EXPERIENCE</div>
            </div>
            <div className={styles.divider}></div>
            <p className={styles.quote}>
              "We don't sell dreams —<br />we build real progress."
            </p>
          </div>

          <div className={styles.eiffelCard}>
            <img
              src="/eiffel.jpg"
              alt="Paris, France"
              className={styles.eiffelImg}
            />
            <div className={styles.eiffelCaption}>
              <span className={styles.eiffelCaptionText}>PARIS, FRANCE</span>
              <div className={styles.eiffelFlag}>
                <span className={styles.flagBlue}></span>
                <span className={styles.flagWhite}></span>
                <span className={styles.flagRed}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}