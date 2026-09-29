import { Hero } from '../components/sections/Hero';
import {
  ClosingCta,
  Faq,
  Founder,
  Institutional,
  Pillars,
  Process,
  Signature,
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
      <Faq />
      <ClosingCta />
    </>
  );
}
