import { color } from "framer-motion";

function Navbar() {
  return (
    <header className="w-full bg-black ">
      <div className="mx-auto max-w-1132px flex align-center justify-between py-4 sm:px-16 px-8">
        <a href="#" className="text-2xl font-semibold">
          Anime <span className="red-gradient">List</span>
        </a>
        <div className="flex items-center">
          <form action="" className="pe-4 ">
            <input type="text" className="ps-2 py-1 rounded-sm" placeholder="search" />
            <button type="submit"></button>
          </form>
          <a href="#" className="py-1 px-3 bg-red-500 rounded-sm">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
