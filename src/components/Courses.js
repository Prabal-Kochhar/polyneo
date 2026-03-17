import styles from './Courses.module.css';

const courses = [
  {
    level: 'A1 · A2',
    title: 'Débutant',
    desc: 'Alphabet, pronunciation, essential vocabulary and simple conversations.',
    price: 'From €29/h',
    variant: 'blue',
  },
  {
    level: 'B1 · B2',
    title: 'Intermédiaire',
    desc: 'Grammar depth, vocabulary and fluency in spoken French.',
    price: 'From €35/h',
    variant: 'dark',
  },
  {
    level: 'C1 · C2',
    title: 'Avancé',
    desc: 'Subtleties, literature and official DELF/DALF exam prep.',
    price: 'From €45/h',
    variant: 'red',
  },
];

export default function Courses() {
  return (
    <section id="courses" className={styles.sectionWrap}>
      <div className={`inner ${styles.section}`}>
        <div className={styles.eyebrow} data-reveal>
          <span className={styles.eyebrowLine}></span>
          <span className={styles.eyebrowText}>OUR PROGRAMS</span>
        </div>
        <h2 className={styles.h2} data-reveal>Choose your path</h2>
        <div className={styles.cards}>
          {courses.map((course, index) => (
            <div
              key={course.title}
              data-reveal-scale
              className={`${styles.card} ${styles[course.variant]}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className={styles.level}>{course.level}</div>
              <div className={styles.title}>{course.title}</div>
              <div className={styles.desc}>{course.desc}</div>
              <div className={styles.price}>{course.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}