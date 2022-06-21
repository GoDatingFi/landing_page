import Image from 'next/image';
import Link from 'next/link';
import SmartphoneImg1 from 'assets/images/home/smartphone-img1.png';
import SmartphoneImg2 from 'assets/images/home/smartphone-img2.png';
import NFTGroup from 'assets/images/home/nft-group.svg';
import CardNFT from 'modules/card-nft/index';
import classNames from 'classnames/bind';
import styles from './products.module.scss';
const cx = classNames.bind(styles);

const Products = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('section-header')}>
          <h2 className={cx('header-title')}>products</h2>
          <h2>All you need for dating</h2>
          <h2>
            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
            true Clicking.
          </h2>
        </div>
        <article className={cx('products-first')}>
          <div className={cx('prduct-first-left')}>
            <div className={cx('bg-gradient-ellipse')}>
              <div className={cx('bg-color-gradient-ellipse')}></div>
            </div>

            <span className={cx('smarphone-left')}>
              <Image src={SmartphoneImg1} alt={''} />
            </span>
            <span className={cx('smarphone-right')}>
              <Image src={SmartphoneImg2} alt={''} />
            </span>
          </div>
          <div className={cx('product-first-right')}>
            <h2 className="gdf-heading-14">It’s easy to find that mystery person!</h2>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, lacus platea volutpat vulputate elementum
              egestas blandit.{' '}
            </h2>
          </div>
        </article>
        <article className={cx('products-second')}>
          <div className={cx('products-second-inner')}>
            <div className={cx('products-second-left')}>
              <h2 className="gdf-heading-14">It’s easy to find that mystery person!</h2>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, lacus platea volutpat vulputate
                elementum egestas blandit.{' '}
              </h2>
            </div>
            <div className={cx('products-second-right')}>
              <div className={cx('bg-gradient-ellipse')}>
                <div className={cx('bg-color-gradient-ellipse')}></div>
              </div>
              <span className={cx('smarphone-left')}>
                <Image src={SmartphoneImg1} alt={''} />
              </span>
              <span className={cx('smarphone-right')}>
                <Image src={SmartphoneImg2} alt={''} />
              </span>
            </div>
          </div>
        </article>
        <article className={cx('products-third')}>
          <div className={cx('products-third-inner')}>
            <div className={cx('bg-gradient-ellipse')}>
              <div className={cx('bg-color-gradient-ellipse')}></div>
            </div>
            <div className={cx('products-third-left')}>
              <div className={cx('bg-gradient-ellipse')}>
                <div className={cx('bg-color-gradient-ellipse')}></div>
              </div>
              <NFTGroup />
            </div>
            <div className={cx('products-third-right')}>
              <h2 className="gdf-heading-14">NFT</h2>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem iste nulla recusandae cum placeat, in
                molestiae architecto similique magnam commodi culpa excepturi, voluptates obcaecati minima repellat
                repellendus velit fugiat sed quas. Sed impedit, aut deserunt alias, deleniti aperiam debitis repellat
                voluptatibus dolor quas ad!
              </h2>
            </div>
          </div>
        </article>
        <article className={cx('product-fourth')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse')}></div>
          </div>

          <div className={cx('product-fourth-left')}>
            <h2 className="gdf-heading-14">Exchange</h2>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem quam congue sed risus sapien a. Mi
              imperdiet vitae id rhoncus ante commodo id. Facilisi arcu et fusce eget dictumst risus sodales nisi.
            </h2>
          </div>
          <div className={cx('product-fourth-right')}>
            <div className={cx('bg-gradient-ellipse')}>
              <div className={cx('bg-color-gradient-ellipse')}></div>
            </div>
            <span className={cx('smarphone-left')}>
              <CardNFT />
            </span>
            <span className={cx('smarphone-right')}>
              <CardNFT />
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Products;
