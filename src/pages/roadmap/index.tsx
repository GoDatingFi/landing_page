import { NextPageWithLayout } from 'utils/interfaces';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { ReactElement } from 'react';
import Layout from 'layouts';
const cx = classNames.bind(styles);

const Partners: NextPageWithLayout = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('bg-gradient')}></div>
        <div className={cx('bg-gradient-ellipse')}>
          <div className={cx('bg-color-gradient-ellipse')}></div>
        </div>
        <h2 className="gdf-heading-14">Partner roadmap</h2>
        <div className={cx('timelines')}>
          <ul className={cx('progress-bar')}>
            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    <span>May 2022</span>
                    <span className="gdf-heading-10">Cryto Chain</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida vitae adipiscing mauris
                    vestibulum pellentesque sagittis semper ipsum. Quis ac vel et, nulla ut.
                  </p>
                </header>
              </div>
            </li>

            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    <span>June 2022</span>
                    <span className="gdf-heading-10">Cryto Chain</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida vitae adipiscing mauris
                    vestibulum pellentesque sagittis semper ipsum. Quis ac vel et, nulla ut.
                  </p>
                </header>
              </div>
            </li>

            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    <span>July 2022</span>
                    <span className="gdf-heading-10">Cryto Chain</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida vitae adipiscing mauris
                    vestibulum pellentesque sagittis semper ipsum. Quis ac vel et, nulla ut.
                  </p>
                </header>
              </div>
            </li>

            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    <span>August 2022</span>
                    <span className="gdf-heading-10">Cryto Chain</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida vitae adipiscing mauris
                    vestibulum pellentesque sagittis semper ipsum. Quis ac vel et, nulla ut.
                  </p>
                </header>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Our Timeline"
      description="Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true Clicking."
    >
      {page}
    </Layout>
  );
};

export default Partners;
