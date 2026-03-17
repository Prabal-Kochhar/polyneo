import Hero from '../components/Hero';
import Courses from '../components/Courses';
import HowItWorks from '../components/HowItWorks';
import Teachers from '../components/Teachers';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <HowItWorks />
      <Teachers />
      <Reviews />
      <Contact />
    </main>
  );
}