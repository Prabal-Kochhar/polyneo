import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    tag: 'ÉTAPE 1',
    title: 'Placement Call',
    desc: '30-min assessment to understand your current level and goals.',
  },
  {
    num: '02',
    tag: 'ÉTAPE 2',
    title: 'Weekly Plan',
    desc: 'An 8-month roadmap tailored to your schedule and objectives.',
  },
  {
    num: '03',
    tag: 'ÉTAPE 3',
    title: 'Practice & Feedback',
    desc: 'Speaking and writing practice with personalised corrections.',
  },
  {
    num: '04',
    tag: 'ÉTAPE 4',
    title: 'Exam Strategy',
    desc: 'TEF/TCF mock tests with real exam conditions and strategies.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.sectionWrap}>

      {/* WATERMARK */}
      <div className={styles.watermark}>
        <div className={styles.wmRow}>
          Parlez-vous français ? &nbsp;&nbsp;·&nbsp;&nbsp; La langue de Molière &nbsp;&nbsp;·&nbsp;&nbsp; Parlez-vous français ? &nbsp;&nbsp;·&nbsp;&nbsp; La langue de Molière
        </div>
        <div className={styles.wmRow}>
          Liberté &nbsp;&nbsp;·&nbsp;&nbsp; Égalité &nbsp;&nbsp;·&nbsp;&nbsp; Fraternité &nbsp;&nbsp;·&nbsp;&nbsp; C'est la vie &nbsp;&nbsp;·&nbsp;&nbsp; Je parle français &nbsp;&nbsp;·&nbsp;&nbsp; Vive la France
        </div>
        <div className={styles.wmRow}>
          Parlez-vous français ? &nbsp;&nbsp;·&nbsp;&nbsp; La langue de Molière &nbsp;&nbsp;·&nbsp;&nbsp; Parlez-vous français ? &nbsp;&nbsp;·&nbsp;&nbsp; La langue de Molière
        </div>
      </div>

      <div className={`inner ${styles.section}`}>

        <div className={styles.flagBar}>
          <span className={styles.flagBlue}></span>
          <span className={styles.flagWhite}></span>
          <span className={styles.flagRed}></span>
        </div>

        <div className={styles.eyebrow} data-reveal>
          <span className={styles.eyebrowLine}></span>
          <span className={styles.eyebrowText}>COMMENT ÇA MARCHE</span>
        </div>
        <h2 className={styles.h2} data-reveal>Your journey to fluency</h2>
        <p className={styles.subtitle} data-reveal>
          A clear, proven path from your first lesson to exam success — tailored to your pace.
        </p>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={styles.step}
              data-reveal
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className={styles.circle}>
                <span className={styles.num}>{step.num}</span>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.tag}>{step.tag}</div>
              <div className={styles.title}>{step.title}</div>
              <div className={styles.desc}>{step.desc}</div>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow} data-reveal>
          <div className={styles.ctaText}>
            "Ready to start your French journey?"
          </div>
          <a href="#contact" className={styles.ctaBtn}>
            BOOK FREE PLACEMENT CALL
          </a>
        </div>

      </div>
    </section>
  );
}