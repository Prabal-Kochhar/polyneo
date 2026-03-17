'use client';

import { useState } from 'react';
import styles from './Courses.module.css';

const courses = [
  {
    level: 'A1 · A2',
    title: 'Débutant',
    tagline: 'Start from zero and build real conversational confidence in French.',
    features: [
      'Alphabet & pronunciation',
      'Essential vocabulary & grammar',
      'Simple daily conversations',
      'Reading & writing basics',
    ],
    exams: ['TEF Preparation', 'TCF Foundation', 'DELF A1 · A2'],
    duration: { months: '8', perWeek: '2×', minutes: '90' },
    groupPrice: '€29',
    privatePrice: '€45',
    badge: 'blue',
    watermark: 'A1',
  },
  {
    level: 'B1 · B2',
    title: 'Intermédiaire',
    tagline: 'Deepen your grammar, expand vocabulary and gain real spoken fluency.',
    features: [
      'Advanced grammar structures',
      'Rich vocabulary building',
      'Fluent conversation practice',
      'Writing & comprehension',
    ],
    exams: ['TEF Intermediate', 'TCF B1 · B2', 'DELF B1 · B2'],
    duration: { months: '6', perWeek: '2×', minutes: '90' },
    groupPrice: '€35',
    privatePrice: '€55',
    badge: 'dark',
    watermark: 'B1',
  },
  {
    level: 'C1 · C2',
    title: 'Avancé',
    tagline: 'Master the subtleties of French and prepare for official exams with confidence.',
    features: [
      'Literary French & nuance',
      'DELF / DALF exam strategy',
      'Mock exams & feedback',
      'Professional French writing',
    ],
    exams: ['TEF Advanced', 'TCF C1 · C2', 'DALF C1 · C2'],
    duration: { months: '4', perWeek: '3×', minutes: '90' },
    groupPrice: '€45',
    privatePrice: '€65',
    badge: 'red',
    watermark: 'C1',
  },
];

export default function Courses() {
  const [active, setActive] = useState(0);
  const [classType, setClassType] = useState('group');
  const course = courses[active];

  return (
    <section id="courses" className={styles.sectionWrap}>
      <div className={`inner ${styles.section}`}>

        <div className={styles.eyebrow} data-reveal>
          <span className={styles.eyebrowLine}></span>
          <span className={styles.eyebrowText}>NOS PROGRAMMES</span>
        </div>
        <h2 className={styles.h2} data-reveal>Choose your path</h2>
        <p className={styles.subtitle} data-reveal>
          Group classes, private lessons or exam prep — pick your level and format.
        </p>

        {/* TABS */}
        <div className={styles.tabs} data-reveal>
          {courses.map((c, i) => (
            <button
              key={c.title}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => { setActive(i); setClassType('group'); }}
            >
              {c.title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CARD */}
        <div className={`${styles.card} ${styles[`card_${course.badge}`]}`} data-reveal>

          {/* LEFT */}
          <div className={styles.cardLeft}>
            <div>
              <div className={`${styles.badge} ${styles[`badge_${course.badge}`]}`}>
                {course.level}
              </div>
              <div className={styles.cardTitle}>{course.title}</div>
              <div className={styles.cardTagline}>{course.tagline}</div>

              <div className={styles.features}>
                {course.features.map((f) => (
                  <div key={f} className={styles.feature}>
                    <span className={`${styles.dot} ${styles[`dot_${course.badge}`]}`}></span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* GROUP / PRIVATE TOGGLE */}
              <div className={styles.typeToggle}>
                <button
                  className={`${styles.typeBtn} ${classType === 'group' ? styles.typeBtnActive : ''}`}
                  onClick={() => setClassType('group')}
                >
                  GROUP
                </button>
                <button
                  className={`${styles.typeBtn} ${classType === 'private' ? styles.typeBtnActive : ''}`}
                  onClick={() => setClassType('private')}
                >
                  PRIVATE
                </button>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.price}>
                  {classType === 'group' ? course.groupPrice : course.privatePrice}
                  <span>/ hour</span>
                </div>
                <a href="#contact" className={`${styles.enrolBtn} ${styles[`enrolBtn_${course.badge}`]}`}>
                  ENROL NOW
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`${styles.cardRight} ${styles[`cardRight_${course.badge}`]}`}>
            <div className={styles.cardRightInner}>
              <div>
                <div className={styles.levelLabel}>LEVEL</div>
                <div className={styles.examBadges}>
                  {course.exams.map((e) => (
                    <div key={e} className={styles.examBadge}>
                      <span className={styles.examDot}></span>
                      <span className={styles.examText}>{e}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.durationRow}>
                <div className={styles.durationItem}>
                  <span className={styles.durationVal}>{course.duration.months}</span>
                  <span className={styles.durationLabel}>MONTHS</span>
                </div>
                <div className={styles.durationItem}>
                  <span className={styles.durationVal}>{course.duration.perWeek}</span>
                  <span className={styles.durationLabel}>PER WEEK</span>
                </div>
                <div className={styles.durationItem}>
                  <span className={styles.durationVal}>{course.duration.minutes}</span>
                  <span className={styles.durationLabel}>MIN / SESSION</span>
                </div>
              </div>
            </div>
            <div className={styles.watermark}>{course.watermark}</div>
          </div>

        </div>
      </div>
    </section>
  );
}