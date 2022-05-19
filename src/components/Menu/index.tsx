interface IMenuProps {
  classList?: string;
  children?: JSX.Element | JSX.Element[];
}

const Menu = ({ classList, children }: IMenuProps): JSX.Element => {
  return <div className={`absolute top-[70px] overflow-auto ${classList}`}>{children}</div>;
};

export default Menu;
