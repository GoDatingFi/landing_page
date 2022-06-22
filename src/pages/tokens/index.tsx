import { NextPageWithLayout } from 'utils/interfaces';
import classNames from 'classnames/bind';
import Building from 'assets/images/token/building.svg';
import GanttChart from 'assets/images/token/gantt-chart.svg';
import styles from './index.module.scss';
import { ReactElement } from 'react';
import Layout from 'layouts';
const cx = classNames.bind(styles);

const Tokens: NextPageWithLayout = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('bg-gradient-ellipse')}>
          <div className={cx('bg-color-gradient-ellipse')}></div>
        </div>

        <div className={cx('distribution-tokens')}>
          <header>
            <p className="gdf-heading-12">Distribution of tokens</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </header>

          <div className={cx('color-board')}>
            <article className={cx('color')}>
              <p className={cx('circle', 'advisors')}></p>
              <p>Seed sale</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'treasury')}></p>
              <p>Treasury</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'private-sale')}></p>
              <p>Private sale</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'partnership')}></p>
              <p>Partnership</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'public-sale')}></p>
              <p>Public sale</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'advisors')}></p>
              <p>Advisors</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'team')}></p>
              <p>Team</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'marketing')}></p>
              <p>Marketing</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'liquidity')}></p>
              <p>Liquidity</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'aidrop')}></p>
              <p>Aidrop</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'community')}></p>
              <p>Community</p>
            </article>
          </div>
        </div>

        <div className={cx('gantt-chart')}>
          <GanttChart />
        </div>
      </div>

      <Building className={cx('bg-building')} />
    </div>
  );
};

Tokens.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Token Genesis Event Information"
      description="Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true Clicking."
    >
      {page}
    </Layout>
  );
};

export default Tokens;
