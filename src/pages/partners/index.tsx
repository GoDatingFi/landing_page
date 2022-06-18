import { NextPageWithLayout } from 'utils/interfaces';
import classNames from 'classnames/bind';
import Image from 'next/image';
import BackgroundPartners from 'assets/images/partner/background-partners.svg';
import Partner1 from 'assets/images/partner/partner-1.svg';
import Partner2 from 'assets/images/partner/partner-2.svg';
import Partner3 from 'assets/images/partner/partner-3.svg';
import Partner4 from 'assets/images/partner/partner-4.svg';
import Partner5 from 'assets/images/partner/partner-5.svg';
import Partner6 from 'assets/images/partner/partner-6.svg';
import Partner7 from 'assets/images/partner/partner-7.svg';
import Partner8 from 'assets/images/partner/partner-8.svg';
import Partner9 from 'assets/images/partner/partner-9.svg';
import Partner10 from 'assets/images/partner/partner-10.svg';
import styles from './index.module.scss';
import { ReactElement } from 'react';
import Layout from 'layouts';
const cx = classNames.bind(styles);

const Partners: NextPageWithLayout = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('bg-gradient')}></div>
      <div className={cx('inner')}>
        <div className={cx('bg-gradient-ellipse')}>
          <div className={cx('bg-color-gradient-ellipse')}></div>
        </div>
        <h2 className="gdf-heading-14">Backer by</h2>
        <div className={cx('backers')}>
          <article className={cx('backer')}>
            <Partner1 />
          </article>
          <article className={cx('backer')}>
            <Partner2 />
          </article>
          <article className={cx('backer')}>
            <Partner3 />
          </article>
          <article className={cx('backer')}>
            <Partner4 />
          </article>
          <article className={cx('backer')}>
            <Partner5 />
          </article>

          <article className={cx('backer')}>
            <Partner1 />
          </article>
          <article className={cx('backer')}>
            <Partner2 />
          </article>
          <article className={cx('backer')}>
            <Partner3 />
          </article>
          <article className={cx('backer')}>
            <Partner4 />
          </article>
          <article className={cx('backer')}>
            <Partner5 />
          </article>

          <article className={cx('backer')}>
            <Partner1 />
          </article>
          <article className={cx('backer')}>
            <Partner2 />
          </article>
          <article className={cx('backer')}>
            <Partner3 />
          </article>
          <article className={cx('backer')}>
            <Partner4 />
          </article>
          <article className={cx('backer')}>
            <Partner5 />
          </article>
        </div>
      </div>
    </div>
  );
};

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Our Partners"
      description="Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true Clicking."
    >
      {page}
    </Layout>
  );
};

export default Partners;
