import Link from 'next/link';
import Image from 'next/image';
import LogoImg from 'assets/images/Logo.png';
import BlockHeader from 'assets/images/banner/block-header.png';
import MenuHeader from './Menu';
import classNames from 'classnames/bind';
import styles from './header-page.module.scss';
const cx = classNames.bind(styles);

interface Props {
  header?: string;
  description?: string;
}

const Navbar = ({ header = '', description = '' }: Props) => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('bg-gradient')}></div>
      <div className={cx('bg-gradient-ellipse')}>
        <div className={cx('bg-color-gradient-ellipse')}></div>
      </div>
      <div className={cx('inner')}>
        <div className={cx('menu-header')}>
          <h2 className={cx('logo')}>
            <Link href="/">
              <a>
                <Image src={LogoImg} />
                <span className="gdf-heading-12">GoDatingFi</span>
              </a>
            </Link>
          </h2>

          <div className={cx('menu')}>
            <MenuHeader />
          </div>
        </div>

        <div className={cx('banner')}>
          <div className={cx('banner-content')}>
            <div className={cx('content')}>
              <h1 className="gdf-heading-14">{header}</h1>
              <h2 className={cx('paragraph')}>{description}</h2>
            </div>
          </div>

          <div className={cx('banner-image')}>
            <Image src={BlockHeader} alt={''} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
