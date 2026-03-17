import styles from './HowItWorks.module.css';

const steps = [
  { num: '01', title: 'Placement call', desc: '30-min assessment to understand your current level and goals.' },
  { num: '02', title: 'Weekly plan', desc: 'An 8-month roadmap tailored to your schedule and objectives.' },
  { num: '03', title: 'Practice & feedback', desc: 'Speaking and writing practice with personalised corrections.' },
  { num: '04', title: 'Exam strategy', desc: 'TEF/TCF mock tests with real exam conditions and strategies.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.sectionWrap}>
      <div className={`inner ${styles.section}`}>
        <div className={styles.eyebrow} data-reveal>
          <span className={styles.eyebrowLine}></span>
          <span className={styles.eyebrowText}>HOW IT WORKS</span>
        </div>
        <h2 className={styles.h2} data-reveal>Your journey to fluency</h2>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={styles.step}
              data-reveal
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className={styles.num}>{step.num}</div>
              <div className={styles.title}>{step.title}</div>
              <div className={styles.desc}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}