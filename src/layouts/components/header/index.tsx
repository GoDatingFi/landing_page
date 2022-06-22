import Link from 'next/link';
import Image from 'next/image';
import LogoImg from 'assets/images/Logo.png';
import Couple from 'assets/images/banner/couple.png';
import Button from 'components/button';
import MenuHeader from './Menu';
import QRCode2 from 'assets/images/icons/qrcode-2.svg';
import QRCode1 from 'assets/images/icons/qrcode-1.svg';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Navbar = () => {
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
              <h1 className="gdf-heading-14">Dating app with blockchain</h1>
              <h2 className={cx('paragraph')}>A decentralized Global Platform for Dating.</h2>
              <h2 className={cx('paragraph')}>
                We are a team of SocialFi blockchain in ASIA, We bring experience dating with blockchain apps.
              </h2>
              <a href="https://t.me/+fNtO9-m-YewyZTVl" target="_blank">
                <Button className={cx('btn-regis')}>Join the Community</Button>
              </a>
            </div>
            <div className={cx('qrcode')}>
              <p className="gdf-heading-8">Get the app</p>
              <div>
                <QRCode2 />
                <QRCode1 />
              </div>
            </div>
          </div>
          <div className={cx('banner-image')}>
            <Image src={Couple} alt={''} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
