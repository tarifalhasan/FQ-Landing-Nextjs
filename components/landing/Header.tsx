import Logo from "../common/Logo";

const Header = () => {
  return (
    <header className=" bg-skin-primary py-5 z-[9999] fixed left-0 right-0 top-0">
      <div className="flex px-4 lg:px-16 items-center justify-between">
        <Logo isShowwText="  text-sm sm:text-2xl" />
        <button className="btn_primary">GET STARTED</button>
      </div>
    </header>
  );
};

export default Header;
