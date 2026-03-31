'use client';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroWrap}>
      <div className={`inner ${styles.hero}`}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.worldTag}>
            🌍 Learn the World, Speak Your Future
          </div>
          <h1 className={styles.h1}>
            Learn French<br />with <em>Polyneo</em>
          </h1>
          <div className={styles.h1Sub}>
            TEF · TCF · FRENCH CLASSES FROM A1 TO C2
          </div>
          <p className={styles.desc}>
            Master French the modern way: immersive lessons, expert instructors,
            and a vibrant community built for connection and confidence.
          </p>
          <div className={styles.tagline}>
            "We don't sell dreams — we build real progress"
          </div>
          <div className={styles.btns}>
            <a href="#contact" className={styles.btnPrimary}>
              START YOUR JOURNEY
            </a>
            <a href="#courses" className={styles.btnSecondary}>
              Explore Courses
              <span className={styles.btnArrow}>→</span>
            </a>
          </div>

          
        </div>

        {/* RIGHT */}
        <div className={styles.right}>

          {/* STAT GRID CARD */}
          <div className={styles.statCard}>
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNum}>95%</div>
                <div className={styles.statLabel}>TEF PASS RATE</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>200+</div>
                <div className={styles.statLabel}>STUDENTS</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>10+</div>
                <div className={styles.statLabel}>YEARS EXP.</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>4.9★</div>
                <div className={styles.statLabel}>GOOGLE RATING</div>
              </div>
            </div>
            <div className={styles.statQuote}>
              "We don't sell dreams — we build real progress."
            </div>
          </div>

          {/* EIFFEL IMAGE CARD */}
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

      {/* GROUP PHOTO FULL WIDTH */}
      <div className={styles.groupWrap}>
        <div className={`inner ${styles.groupInner}`}>
          <div className={styles.groupPhotoFull} data-reveal>
            <img
              src="/group.jpg"
              alt="Polyneo students"
              className={styles.groupImgFull}
            />
            <div className={styles.groupOverlay}>
              <div className={styles.groupOverlayLeft}>
                <div className={styles.groupOverlayTitle}>Nos Étudiants</div>
                <div className={styles.groupOverlaySub}>Vancouver, Canada</div>
              </div>
              <div className={styles.groupFlagFull}>
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