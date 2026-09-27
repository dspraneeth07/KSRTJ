import { Hero } from '../components/sections/Hero';
import {
  ClosingCta,
  Courses,
  Faq,
  Founder,
  Institutional,
  Pillars,
  Process,
  Signature,
  Testimonials,
  TrustStrip,
} from '../components/sections/Sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pillars />
      <Signature />
      <Process />
      <Founder />
      <Institutional />
      <Courses />
      <Testimonials />
      <Faq />
      <ClosingCta />
    </>
  );
}
