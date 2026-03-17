import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={`inner ${styles.footer}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.flag}>
              <span className={styles.flagBlue}></span>
              <span className={styles.flagWhite}></span>
              <span className={styles.flagRed}></span>
            </div>
            <span className={styles.logo}>POLYNEO</span>
          </div>
          <div className={styles.cols}>
            <div className={styles.col}>
              <div className={styles.colTitle}>Learn</div>
              <a href="#courses">Courses</a>
              <a href="#how-it-works">How it works</a>
              <a href="#teachers">Our teachers</a>
            </div>
            <div className={styles.col}>
              <div className={styles.colTitle}>Resources</div>
              <a href="#shop">Shop</a>
              <a href="#blog">Blog</a>
              <a href="#reviews">Reviews</a>
            </div>
            <div className={styles.col}>
              <div className={styles.colTitle}>Contact</div>
              <a href="#contact">Enrol now</a>
              <a href="mailto:info.polyneo@gmail.com">info.polyneo@gmail.com</a>
              <span>Vancouver, Canada</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2025 Polyneo. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}