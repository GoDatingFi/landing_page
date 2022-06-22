import Image from 'next/image';
import Link from 'next/link';
import PersonCardImg from 'assets/images/person-card/person-card.png';
import Image1 from 'assets/images/person-card/image1.png';
import Person01 from 'assets/images/person-card/person-01.jpg';
import Person02 from 'assets/images/person-card/person-02.jpeg';
import Person03 from 'assets/images/person-card/person-03.jpeg';
import Person04 from 'assets/images/person-card/person-04.jpeg';
import Person05 from 'assets/images/person-card/person-05.jpeg';
import Facebook from 'assets/images/social-media/facebook-card.svg';
import Twitter from 'assets/images/social-media/twitter-card.svg';
import Linkedin from 'assets/images/social-media/linkedin-card.svg';
import classNames from 'classnames/bind';
import styles from './person-card.module.scss';
const cx = classNames.bind(styles);

const PersonCard = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('cards')}>
          <article className={cx('card')}>
            <div className={cx('card-image')}>
              <Link href="/">
                <a>
                  <Image src={Person01} alt="" />
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
                  <a>Jade, 26</a>
                </Link>
              </p>
              <p className={cx('summary')}>
                <Link href="/">
                  <a>Vietnam</a>
                </Link>
              </p>
            </header>
          </article>
          <article className={cx('card')}>
            <div className={cx('card-image')}>
              <Link href="/">
                <a>
                  <Image src={Person02} alt="" />
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
                  <a>双下巴真可爱, 19</a>
                </Link>
              </p>
              <p className={cx('summary')}>
                <Link href="/">
                  <a>China</a>
                </Link>
              </p>
            </header>
          </article>
          <article className={cx('card')}>
            <div className={cx('card-image')}>
              <Link href="/">
                <a>
                  <Image src={Person03} alt="" />
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
                  <a>Celinenilsenn, 24</a>
                </Link>
              </p>
              <p className={cx('summary')}>
                <Link href="/">
                  <a>Oslo</a>
                </Link>
              </p>
            </header>
          </article>
          <article className={cx('card')}>
            <div className={cx('card-image')}>
              <Link href="/">
                <a>
                  <Image src={Person04} alt="" />
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
                  <a>Duebass, 20</a>
                </Link>
              </p>
              <p className={cx('summary')}>
                <Link href="/">
                  <a>China</a>
                </Link>
              </p>
            </header>
          </article>
          <article className={cx('card')}>
            <div className={cx('card-image')}>
              <Link href="/">
                <a>
                  <Image src={Person05} alt="" />
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
                  <a>ก็เอาไปเลยสิคะ, 18</a>
                </Link>
              </p>
              <p className={cx('summary')}>
                <Link href="/">
                  <a>ThaiLan</a>
                </Link>
              </p>
            </header>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PersonCard;
