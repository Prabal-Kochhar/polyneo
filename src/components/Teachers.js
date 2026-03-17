import styles from './Teachers.module.css';

const teachers = [
  {
    name: 'Marion Beau',
    role: 'FRENCH TEACHER · 8+ YEARS',
    bio: 'Specialises in TEF preparation and conversation classes. Native speaker with a passion for helping students achieve real fluency.',
    image: '/teacher1.jpg',
    variant: 'blue',
  },
  {
    name: 'Teacher Name',
    role: 'FRENCH TEACHER · 10+ YEARS',
    bio: "Expert in grammar and vocabulary building. Creates engaging lessons tailored to each student's learning style and goals.",
    image: '/teacher2.jpg',
    variant: 'red',
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className={styles.sectionWrap}>
      <div className={`inner ${styles.section}`}>
        <div className={styles.eyebrow} data-reveal>
          <span className={styles.eyebrowLine}></span>
          <span className={styles.eyebrowText}>NOTRE ÉQUIPE</span>
        </div>
        <h2 className={styles.h2} data-reveal>Meet our teachers</h2>

        <div className={styles.grid}>
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className={styles.card}
              data-reveal-scale
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.photo}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className={styles.photoImg}
                />
                <div className={styles.photoOverlay}>
                  <div className={styles.flag}>
                    <span className={styles.flagBlue}></span>
                    <span className={styles.flagWhite}></span>
                    <span className={styles.flagRed}></span>
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{teacher.name}</div>
                <div className={styles.role}>{teacher.role}</div>
                <div className={styles.bio}>{teacher.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}