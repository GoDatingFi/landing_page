import Link from 'next/link';
import Image from 'next/image';
import LogoImg from 'assets/images/Logo.png';
import Couple from 'assets/images/banner/couple.png';
import styles from './index.module.scss';
import Button from 'components/button';
import classNames from 'classnames/bind';
import MenuHeader from './Menu';
import QRCode2 from 'assets/images/icons/qrcode-2.svg';
import QRCode1 from 'assets/images/icons/qrcode-1.svg';

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
              <h1 className="gdf-heading-14">The best way to date</h1>
              <h2 className={cx('paragraph')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, lacus platea volutpat vulputate
                elementum egestas blandit. Eu commodo interdum lacinia placerat velit malesuada. Aliquam pellentesque
                congue accumsan tristique cras platea. Consequat semper euismod ornare ut aenean sit.
              </h2>
              <Button className={cx('btn-regis')}>Register now</Button>
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
