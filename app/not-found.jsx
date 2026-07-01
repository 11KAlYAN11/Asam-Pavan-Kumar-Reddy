// @flow strict

import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold gradient-text">404</h1>
      <p className="mt-4 text-lg text-gray-200">Page Not Found</p>
      <p className="mt-2 text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <Link className="mt-5 flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-lime-400 px-3 md:px-8 py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline hover:scale-105 md:font-semibold"
        role="button"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default page;
