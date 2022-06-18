import Image from 'next/image';
import Link from 'next/link';
import PersonCardImg from 'assets/images/person-card/person-card.png';
import Image1 from 'assets/images/person-card/image1.png';
import classNames from 'classnames/bind';
import styles from './person-card.module.scss';
import Facebook from 'assets/images/social-media/facebook-card.svg';
import Twitter from 'assets/images/social-media/twitter-card.svg';
import Linkedin from 'assets/images/social-media/linkedin-card.svg';
const cx = classNames.bind(styles);

const PersonCard = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('cards')}>
        <article className={cx('card')}>
          <div className={cx('card-image')}>
            <Link href="/">
              <a>
                <Image src={PersonCardImg} alt="" />
                <div className={cx('social-network')}>
                  <Facebook />
                  <Twitter />
                  <Linkedin />
                </div>
              </a>
            </Link>
          </div>
          <header className={cx('card-content')}>
            <div className={cx('bg-mask')}></div>
            <p className={cx('title')}>
              <Link href="/">
                <a>Ava, 25</a>
              </Link>
            </p>
            <p className={cx('summary')}>
              <Link href="/">
                <a>Sanya, China</a>
              </Link>
            </p>
          </header>
        </article>
        <article className={cx('card')}>
          <div className={cx('card-image')}>
            <Link href="/">
              <a>
                <Image src={Image1} alt="" />
                <div className={cx('social-network')}>
                  <Facebook />
                  <Twitter />
                  <Linkedin />
                </div>
              </a>
            </Link>
          </div>
          <header className={cx('card-content')}>
            <div className={cx('bg-mask')}></div>
            <p className={cx('title')}>
              <Link href="/">
                <a>Ava, 25</a>
              </Link>
            </p>
            <p className={cx('summary')}>
              <Link href="/">
                <a>Sanya, China</a>
              </Link>
            </p>
          </header>
        </article>
        <article className={cx('card')}>
          <div className={cx('card-image')}>
            <Link href="/">
              <a>
                <Image src={PersonCardImg} alt="" />
                <div className={cx('social-network')}>
                  <Facebook />
                  <Twitter />
                  <Linkedin />
                </div>
              </a>
            </Link>
          </div>
          <header className={cx('card-content')}>
            <div className={cx('bg-mask')}></div>
            <p className={cx('title')}>
              <Link href="/">
                <a>Ava, 25</a>
              </Link>
            </p>
            <p className={cx('summary')}>
              <Link href="/">
                <a>Sanya, China</a>
              </Link>
            </p>
          </header>
        </article>
        <article className={cx('card')}>
          <div className={cx('card-image')}>
            <Link href="/">
              <a>
                <Image src={Image1} alt="" />
                <div className={cx('social-network')}>
                  <Facebook />
                  <Twitter />
                  <Linkedin />
                </div>
              </a>
            </Link>
          </div>
          <header className={cx('card-content')}>
            <div className={cx('bg-mask')}></div>
            <p className={cx('title')}>
              <Link href="/">
                <a>Ava, 25</a>
              </Link>
            </p>
            <p className={cx('summary')}>
              <Link href="/">
                <a>Sanya, China</a>
              </Link>
            </p>
          </header>
        </article>
        <article className={cx('card')}>
          <div className={cx('card-image')}>
            <Link href="/">
              <a>
                <Image src={PersonCardImg} alt="" />
                <div className={cx('social-network')}>
                  <Facebook />
                  <Twitter />
                  <Linkedin />
                </div>
              </a>
            </Link>
          </div>
          <header className={cx('card-content')}>
            <div className={cx('bg-mask')}></div>
            <p className={cx('title')}>
              <Link href="/">
                <a>Ava, 25</a>
              </Link>
            </p>
            <p className={cx('summary')}>
              <Link href="/">
                <a>Sanya, China</a>
              </Link>
            </p>
          </header>
        </article>
        <article className={cx('card')}>
          <div className={cx('card-image')}>
            <Link href="/">
              <a>
                <Image src={Image1} alt="" />
                <div className={cx('social-network')}>
                  <Facebook />
                  <Twitter />
                  <Linkedin />
                </div>
              </a>
            </Link>
          </div>
          <header className={cx('card-content')}>
            <div className={cx('bg-mask')}></div>
            <p className={cx('title')}>
              <Link href="/">
                <a>Ava, 25</a>
              </Link>
            </p>
            <p className={cx('summary')}>
              <Link href="/">
                <a>Sanya, China</a>
              </Link>
            </p>
          </header>
        </article>
      </div>
    </section>
  );
};

export default PersonCard;
