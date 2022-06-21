const Menu = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: `${process.env.NEXT_PUBLIC_MARKETPLACE_URL}`,
    label: 'Market',
  },
  {
    to: '/tokens',
    label: 'Token',
  },
  {
    to: '/roadmap',
    label: 'Roadmap',
  },
  {
    to: '/partners',
    label: 'Partner',
  },
  {
    to: '/teams',
    label: 'Team',
  },
];

export default Menu;
