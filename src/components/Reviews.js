'use client';

import styles from './Reviews.module.css';

const reviews = [
  { text: 'Excellent TEF preparation. I got my B2 thanks to Polyneo. Professional and attentive teachers.', name: 'Marie L.', date: '2 weeks ago' },
  { text: 'The conversation classes gave me real confidence. I now speak with native speakers comfortably.', name: 'Ahmed K.', date: '1 month ago' },
  { text: 'Very effective private lessons. My level improved quickly — I passed my TEF on the first try!', name: 'Sophie D.', date: '3 weeks ago' },
  { text: 'From A2 to B2 in 8 months. The structured plan and weekly feedback made all the difference.', name: 'Lucas M.', date: '2 months ago' },
  { text: 'Marion is an incredible teacher. Patient, thorough, and always encouraging. Highly recommend!', name: 'Priya K.', date: '3 months ago' },
  { text: 'Passed my TCF with flying colours. The mock exams were exactly like the real thing.', name: 'James R.', date: '1 month ago' },
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.sectionWrap}>
      <div className={styles.header}>
        <div className={`inner ${styles.headerInner}`}>
          <div className={styles.eyebrow} data-reveal>
            <span className={styles.eyebrowLine}></span>
            <span className={styles.eyebrowText}>STUDENT REVIEWS</span>
          </div>
          <h2 className={styles.h2} data-reveal>What our students say</h2>
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        {/* fade edges */}
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>

        <div className={styles.marqueeTrack}>
          {/* duplicate for seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.reviewer}>{review.name}</div>
              <div className={styles.date}>{review.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}