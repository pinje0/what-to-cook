const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="bg-neutral-900 pb-8 pt-24">
      <div className="container">
        <p className="text-center md:text-md -mt-20 mb-4 rounded-xl bg-[#484238] py-2 text-sm font-medium p-4 text-[#c6ccc9] brightness-125 dark:bg-[#484238] dark:brightness-100">
          <i className="fa-solid fa-triangle-exclamation fa-fw" style={{ color: '#e6b560' }}></i> This website
          uses media, including images and other content,
          <br /> sourced from the internet for non-commercial and educational purposes. <br /> All rights to
          the media belong to their respective owners, and full credit goes to the original creators
        </p>
        <div className="w-full border-t border-slate-700 pt-4">
          {/* <!--* Social Media --> */}
          <div className="mb-5 flex items-center justify-center">
            {/* <!--? Github --> */}
            <a
              href="https://github.com/pinje0/what-to-cook"
              target="_blank"
              className="hover-opacity-animation mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 text-white hover:border-[#FBEFE1] hover:bg-[#FBEFE1]"
            >
              <svg
                role="img"
                width="20"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
          <p className="text-center text-xs font-medium text-slate-500">
            &#169;2025 by{' '}
            <a
              target="_blank"
              href="https://www.instagram.com/pinje__/"
              className="transition duration-500 hover:brightness-125"
            >
              pinje
            </a>{' '}
            |{' '}
            <a
              target="_blank"
              href="https://www.instagram.com/yu._rak/"
              className="transition duration-500 hover:brightness-125"
            >
              ユラク
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
