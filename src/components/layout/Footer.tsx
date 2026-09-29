import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { footerColumns, footerLinkTargets } from '../../data/content';
import { BrandMark } from '../Icons';

export function Footer() {
  const { t } = useLang();

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
            <p className="footer__blurb">{t('footer.blurb')}</p>

            <dl className="footer__meta">
              <div>
                <dt>{t('footer.location')}</dt>
                <dd>{t('footer.addr')}</dd>
              </div>
              <div>
                <dt>{t('footer.reach')}</dt>
                <dd>
                  <a href="tel:+918309096407">{t('utility.call')}</a>
                </dd>
              </div>
            </dl>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {footerColumns.map((col) => (
              <div className="footer__col" key={col.id}>
                <h4>{t(col.title)}</h4>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>
                      {/* Service names have no page of their own, so they
                          go to the contact page rather than nowhere. */}
                      <Link to={footerLinkTargets[item] ?? '/contact'}>{t(item)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>{t('footer.copy')}</p>
        </div>
      </div>
    </footer>
  );
}
