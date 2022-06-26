import Image from 'next/image';
import Link from 'next/link';
import SafeSecure from 'assets/images/market/safe-secure.svg';
import LowCost from 'assets/images/market/low-cost.svg';
import UniversalAccess from 'assets/images/market/universal-access.svg';
import EarlyProfit from 'assets/images/market/early-profit.svg';
import SecureInvest from 'assets/images/market/secure-invest.svg';
import EasyWallet from 'assets/images/market/easy-wallet.svg';
import ArrowUpRight from 'assets/images/market/arrow-up-right.svg';
import classNames from 'classnames/bind';
import styles from './market.module.scss';
const cx = classNames.bind(styles);

const Market = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('section-header')}>
          <h2 className={cx('header-title')}>market</h2>
          <h2>NFT & ICO crypto currency advantage</h2>
          <h2>
            GoDatingFi marketplace provides an efficient place for players to trade NFT cards on and earn massive
            financial benefits
          </h2>
        </div>
        <div className={cx('advantages')}>
          <article className={cx('advantage')}>
            <div>
              <SafeSecure />
            </div>
            <header>
              <p className="gdf-heading-12">Safe & Secure</p>
              <p>Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor sit amet elit sed dolor sit.</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article className={cx('advantage')}>
            <div>
              <LowCost />
            </div>
            <header>
              <p className="gdf-heading-12">Low Cost</p>
              <p>Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor sit amet elit sed dolor sit.</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article className={cx('advantage')}>
            <div>
              <UniversalAccess />
            </div>
            <header>
              <p className="gdf-heading-12">Universal Accesse</p>
              <p>Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor sit amet elit sed dolor sit.</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article className={cx('advantage')}>
            <div>
              <EarlyProfit />
            </div>
            <header>
              <p className="gdf-heading-12">Early Profit</p>
              <p>Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor sit amet elit sed dolor sit.</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article className={cx('advantage')}>
            <div>
              <SecureInvest />
            </div>
            <header>
              <p className="gdf-heading-12">Secure Investt</p>
              <p>Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor sit amet elit sed dolor sit.</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article className={cx('advantage')}>
            <div>
              <EasyWallet />
            </div>
            <header>
              <p className="gdf-heading-12">Easy Wallet</p>
              <p>Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor sit amet elit sed dolor sit.</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Market;
