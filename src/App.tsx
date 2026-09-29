import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider, useLang } from './i18n/LanguageProvider';
import { Header, UtilityBar } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';

// Every service page carries its full bilingual content — roughly 300 strings
// each — so keeping them in the main bundle made the homepage pay for pages
// most visitors never open. Split per route; the homepage stays eager.
const VerticalPage = lazy(() => import('./pages/VerticalPage'));
const SwaraPage = lazy(() => import('./pages/SwaraPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TrainingPage = lazy(() => import('./pages/TrainingPage'));
const CertificateCoursesPage = lazy(() => import('./pages/CertificateCoursesPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { Seo } from './components/Seo';
import { verticals } from './data/verticals';
import { swaraPage } from './data/swara';
import { training } from './data/training';
import { contact } from './data/contact';

/**
 * Routing resets the scroll position, and an in-page hash arriving from
 * another route has to wait for the target section to mount before it can
 * be scrolled to.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    // One frame for the route's sections to mount before we look for the id.
    const raf = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}

const swaraPath = swaraPage.path;

function Shell() {
  const { t } = useLang();

  return (
    <>
      <a className="skip" href="#main">
        {t('a11y.skip')}
      </a>
      <Seo />
      <UtilityBar />
      <Header />
      <ScrollManager />
      <main id="main">
        {/* Routes resolve from cache almost always; the fallback only shows
            on a cold first navigation, so it is a held space, not a spinner. */}
        <Suspense fallback={<div className="routeload" aria-hidden="true" />}>
          <Routes>
          <Route path="/" element={<HomePage />} />
          {verticals.map((vertical) => (
            <Route
              key={vertical.id}
              path={vertical.path}
              element={<VerticalPage vertical={vertical} />}
            />
          ))}
          {/* Not a VerticalPage: this one is a teaching relationship, not a
              catalogue of bookable services, and has its own shape. */}
          <Route path={swaraPath} element={<SwaraPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path={contact.path} element={<ContactPage />} />
          {/* Training is its own page, not a homepage section: the courses
              are a distinct offering from the consultations. */}
          <Route path={training.path} element={<TrainingPage />} />
          <Route path={training.certificatePath} element={<CertificateCoursesPage />} />
          {/* Netlify rewrites unknown paths to index.html with a 200, so the
              page itself has to say it does not exist. */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </LanguageProvider>
  );
}
