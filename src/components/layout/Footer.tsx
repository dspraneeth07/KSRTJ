import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { footerColumns } from '../../data/content';
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
            <p className="footer__blurb">{t('footer.blurb')}</p>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {footerColumns.map((col) => (
              <div className="footer__col" key={col.id}>
                <h4>{t(col.title)}</h4>
                <ul>
                  {col.items.map((item) =>
                    item === 'nav.about' ? (
                      <li key={item}>
                        <Link to="/about">{t(item)}</Link>
                      </li>
                    ) : (
                      <li key={item}>
                        <a href="#book">{t(item)}</a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>{t('footer.addr')}</p>
          <p>{t('footer.copy')}</p>
        </div>
      </div>
    </footer>
  );
}
