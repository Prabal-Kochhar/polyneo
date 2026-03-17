import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.sectionWrap}>
      <div className={`inner ${styles.section}`}>
        <div className={styles.eyebrow} data-reveal-left>
          <span className={styles.eyebrowLine}></span>
          <span className={styles.eyebrowText}>GET IN TOUCH</span>
        </div>
        <h2 className={styles.h2} data-reveal>Enrol today</h2>
        <p className={styles.sub} data-reveal>
          Tell us about your goals and we'll get back to you within 24 hours
          to arrange your free placement call.
        </p>
        <form className={styles.form} data-reveal>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label>FULL NAME</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className={styles.field}>
              <label>EMAIL</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className={styles.field}>
              <label>PHONE</label>
              <input type="tel" placeholder="+1 604 000 0000" />
            </div>
            <div className={styles.field}>
              <label>COURSE TYPE</label>
              <select>
                <option value="">Choose a course type</option>
                <option value="group">Group class</option>
                <option value="private">Private lesson</option>
                <option value="conversation">Conversation practice</option>
              </select>
            </div>
          </div>
          <div className={styles.field}>
            <label>YOUR LEVEL</label>
            <select>
              <option value="">Select your level</option>
              <option value="beginner">Beginner (A1–A2)</option>
              <option value="intermediate">Intermediate (B1–B2)</option>
              <option value="advanced">Advanced (C1–C2)</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>MESSAGE</label>
            <textarea rows="4" placeholder="Tell us about your learning goals..." />
          </div>
          <button type="submit" className={styles.btn}>
            SEND MY REQUEST
          </button>
        </form>
        <div className={styles.info} data-reveal>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Location</span>
            <span className={styles.infoVal}>Vancouver, Canada</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Email</span>
            <span className={styles.infoVal}>info.polyneo@gmail.com</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Response time</span>
            <span className={styles.infoVal}>Within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}