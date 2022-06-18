import { NextPageWithLayout } from 'utils/interfaces';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './index.module.scss';
import { ReactElement } from 'react';
import Layout from 'layouts';
import Link from 'next/link';
import Image1 from 'assets/images/nft/nft-01.png';
import Image2 from 'assets/images/nft/nft-02.png';
import Image3 from 'assets/images/nft/nft-03.png';
import Image4 from 'assets/images/nft/nft-04.png';
import Facebook from 'assets/images/social-media/facebook-card.svg';
import Twitter from 'assets/images/social-media/twitter-card.svg';
import Linkedin from 'assets/images/social-media/linkedin-card.svg';
import BackgroundTeam from 'assets/images/team/background-team.svg';
const cx = classNames.bind(styles);

const Partners: NextPageWithLayout = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('group-teams')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-blue-curious')}></div>
          </div>

          <h2 className="gdf-heading-14">Our Best Leadership</h2>
          <div className={cx('cards')}>
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
                    <Image src={Image2} alt="" />
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
                    <Image src={Image3} alt="" />
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
                    <Image src={Image4} alt="" />
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
        </div>

        <div className={cx('group-teams')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-gradient-green')}></div>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-gradient-purple')}></div>
          </div>

          <h2 className="gdf-heading-14">Advisor</h2>
          <div className={cx('cards')}>
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
                    <Image src={Image2} alt="" />
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
                    <Image src={Image3} alt="" />
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
                    <Image src={Image4} alt="" />
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
                    <Image src={Image2} alt="" />
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
                    <Image src={Image3} alt="" />
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
                    <Image src={Image4} alt="" />
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
        </div>

        <div className={cx('group-teams')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-gradient-purple')}></div>
          </div>

          <h2 className="gdf-heading-14">Team member</h2>
          <div className={cx('cards')}>
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
                    <Image src={Image2} alt="" />
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
                    <Image src={Image3} alt="" />
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
                    <Image src={Image4} alt="" />
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
                    <Image src={Image2} alt="" />
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
                    <Image src={Image3} alt="" />
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
                    <Image src={Image4} alt="" />
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
        </div>
      </div>
      <BackgroundTeam className={cx('bg-team')} />
    </div>
  );
};

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Team Member"
      description="Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true Clicking."
    >
      {page}
    </Layout>
  );
};

export default Partners;
