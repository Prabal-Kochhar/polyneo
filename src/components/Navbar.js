import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <div className={styles.flag}>
            <span className={styles.flagBlue}></span>
            <span className={styles.flagWhite}></span>
            <span className={styles.flagRed}></span>
          </div>
          <div className={styles.logoText}>
            <h3>
            Polyneo
          </h3>
            
          </div>
        </div>

        <div className={styles.links}>
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href="#shop">Shop</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className={styles.btn}>ENROL NOW</a>
      </div>
    </nav>
  );
}