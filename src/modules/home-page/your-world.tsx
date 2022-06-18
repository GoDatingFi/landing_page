import Image from 'next/image';
import Link from 'next/link';
import styles from './your-world.module.scss';
import Heart from 'assets/images/home/heart.png';
import Message from 'assets/images/home/message.png';
import Protected from 'assets/images/home/protected.png';
import Searach from 'assets/images/home/searach.png';
import Start1 from 'assets/images/home/start1.png';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const PersonCard = () => {
  return (
    <section className={cx('wrapper')}>
      {/*<div className={cx('bg-blend-mode')}></div>*/}
      <div className={cx('bg-gradient-ellipse')}>
        <div className={cx('bg-color-gradient-ellipse')}></div>
      </div>
      <div className={cx('inner')}>
        <h2 className={cx('title-header')}>Your world</h2>
        <div className={cx('content')}>
          <article>
            <Image src={Heart} alt="" />
            <header>
              <p>Approximately 3 million members logged in daily.</p>
            </header>
          </article>

          <article>
            <Image src={Heart} alt="" />
            <header>
              <p>Approximately 3 million members logged in daily.</p>
            </header>
          </article>

          <article>
            <Image src={Heart} alt="" />
            <header>
              <p>Approximately 3 million members logged in daily.</p>
            </header>
          </article>

          <article>
            <Image src={Heart} alt="" />
            <header>
              <p>Approximately 3 million members logged in daily.</p>
            </header>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PersonCard;
