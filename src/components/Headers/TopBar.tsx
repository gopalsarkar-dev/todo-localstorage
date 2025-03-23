import DarkToggleBtn from "./DarkToggleBtn";

const TopBar = () => {
  return (
    <>
      <nav className="border-b-foreground/20 fixed top-0 w-full border-b">
        <section className="container mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="">Todo || </div>
          <div className="">
            <DarkToggleBtn />
          </div>
        </section>
      </nav>
    </>
  );
};

export default TopBar;
