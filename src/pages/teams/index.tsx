import { NextPageWithLayout } from 'utils/interfaces';
import Image from 'next/image';
import { ReactElement } from 'react';
import Layout from 'layouts';
import Link from 'next/link';
import Image1 from 'assets/images/nft/nft-01.png';
import Image2 from 'assets/images/nft/nft-02.png';
import Image3 from 'assets/images/nft/nft-03.png';
import Image4 from 'assets/images/nft/nft-04.png';
import Image5 from 'assets/images/nft/nft-05.png';
import Facebook from 'assets/images/social-media/facebook-card.svg';
import Twitter from 'assets/images/social-media/twitter-card.svg';
import Linkedin from 'assets/images/social-media/linkedin-card.svg';
import BackgroundTeam from 'assets/images/team/background-team.svg';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
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
                <div>
                  <Image src={Image1} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image2} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image3} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image4} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image5} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
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
                <div>
                  <Image src={Image1} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image2} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image3} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image4} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image5} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image1} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image2} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image3} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image4} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image5} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
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
                <div>
                  <Image src={Image1} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image2} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image3} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image4} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image5} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image1} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image2} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image3} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image4} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
              </header>
            </article>
            <article className={cx('card')}>
              <div className={cx('card-image')}>
                <div>
                  <Image src={Image5} alt="" />
                  <div className={cx('mask-social-network')}>
                    <div className={cx('social-network')}>
                      <Link href="https://www.facebook.com/" passHref>
                        <span>
                          <Facebook />
                        </span>
                      </Link>

                      <Link href="https://twitter.com/" passHref>
                        <span>
                          <Twitter />
                        </span>
                      </Link>

                      <Link href="https://www.linkedin.com/" passHref>
                        <span>
                          <Linkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <header className={cx('card-content')}>
                <div className={cx('bg-mask')}></div>
                <p className={cx('title')}>Ava, 25</p>
                <p className={cx('summary')}>Sanya, Chinas</p>
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
      description="The team consists of 18 full-time employees and has its headquarters in Hamamatsu, Japan. The team consists of the following individuals"
    >
      {page}
    </Layout>
  );
};

export default Partners;
