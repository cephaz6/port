const Navbar = () => {
  return (
    <div className="mx-auto bg-teal-500 ax-w-7xl px-4 sm:px-6 lg:px-28">
      <div className="container mx-auto px-4">
        <div className="flex content-center justify-between p-5">
          <div className="logo">
            <h1 className="text-lg font-h-txt">Logo</h1>
          </div>
          <div className="text-white font-medium font-b-txt">
            <span className="pl-2">Home</span>
            <span className="pl-2">About</span>
            <span className="pl-2">Projects</span>
            <span className="pl-2">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
