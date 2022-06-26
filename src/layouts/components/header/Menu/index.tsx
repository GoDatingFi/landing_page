import MenuConst from 'utils/menu.const';
import ActiveLink from './active-link';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

interface Props {
  navbarMobile: boolean;
}

const MenuHeader = ({ navbarMobile = false }: Props) => {
  return (
    <nav className={cx('navbar')}>
      <ul className={cx('navbar-menu', { 'navbar-mobile': navbarMobile })}>
        {MenuConst &&
          MenuConst.map((item, index) => (
            <li key={index} className={cx('navbar-item')}>
              <ActiveLink href={item.to} activeClassName="active-nav">
                <span>{item.label}</span>
              </ActiveLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MenuHeader;
