import { ReactNode } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopSvg from 'assets/icons/scroll-top-top.svg';
import HeaderHome from './components/header';
import HeaderPage from './components/header/header-page';
import Footer from './components/footer';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

interface Props {
  header?: string;
  description?: string;
  isHome?: boolean;
  children?: ReactNode;
}

const Layout = ({ header = '', description = '', isHome = false, children }: Props) => {
  return (
    <div className="gdf-wrapper">
      <ScrollToTop className={cx('scroll-top-top')} component={<ScrollToTopSvg />} smooth />
      <h2 className={cx('contract-address')}>Address: xxxxx</h2>
      {isHome && <HeaderHome />}
      {!isHome && <HeaderPage header={header} description={description} />}
      <main className={cx('wrapper')}>
        <div className={cx('inner')}>
          <section className={cx('content')}>{children}</section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
