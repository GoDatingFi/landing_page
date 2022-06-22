import Image from 'next/image';
import Link from 'next/link';
import styles from './your-world.module.scss';
import Heart from 'assets/images/home/heart.svg';
import Message from 'assets/images/home/messages.svg';
import Search from 'assets/images/home/search.svg';
import Protected from 'assets/images/home/protected.svg';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const YourWorld = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('bg-gradient-ellipse')}>
        <div className={cx('bg-color-gradient-ellipse')}></div>
      </div>
      <div className={cx('inner')}>
        <h2 className={cx('title-header')}>Your world</h2>
        <div className={cx('content')}>
          <article>
            <Heart />
            <header>
              <p>Approximately 3 million members logged in daily.</p>
            </header>
          </article>

          <article>
            <Message />
            <header>
              <p>Multiple ways to connect with members.</p>
            </header>
          </article>

          <article>
            <Search />
            <header>
              <p>Search for members who have your favourite traits.</p>
            </header>
          </article>

          <article>
            <Protected />
            <header>
              <p>High level of security, ensuring user's personal information</p>
            </header>
          </article>
        </div>
      </div>
    </section>
  );
};

export default YourWorld;
