import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { useBi } from '../../i18n/bi';
import { footerCentre, footerDisciplines } from '../../data/footer';
import { PHONE_TEL } from '../../data/contact';
import { BrandMark } from '../Icons';

export function Footer() {
  const { t } = useLang();
  const { b, bl } = useBi();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__mark">
              <BrandMark />
            </span>
            <p className="footer__name">{t('brand.name')}</p>
            <p className="footer__disciplines">{t('footer.disciplines')}</p>
            <p className="footer__blurb">{t('hero.lede')}</p>

            <dl className="footer__meta">
              <div>
                <dt>{t('footer.location')}</dt>
                <dd>{t('footer.addr')}</dd>
              </div>
              <div>
                <dt>{t('footer.reach')}</dt>
                <dd>
                  <a href={PHONE_TEL}>{t('utility.call')}</a>
                </dd>
              </div>
            </dl>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {footerDisciplines.map((col) => (
              <div className="footer__col" key={col.id}>
                {/* The heading is a link to the discipline page, exactly as
                    the same heading is in the Services menu. */}
                <h4>
                  <Link className="footer__colLink" to={col.to}>
                    {b(col.title)}
                  </Link>
                </h4>
                <ul>
                  {/* These are services, not pages — each goes to the
                      discipline page that covers it. */}
                  {bl(col.items).map((item) => (
                    <li key={item}>
                      <Link to={col.to}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col">
              <h4>{b(footerCentre.title)}</h4>
              <ul>
                {footerCentre.links.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to}>{b(link.label)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>{t('footer.copy')}</p>
        </div>
      </div>
    </footer>
  );
}
