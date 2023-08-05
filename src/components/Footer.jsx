const Footer = () => {
  // get the current year
  const year = new Date().getFullYear();
  return (
    <footer class="mt-6 border-t border-gray-600 py-2 ">
      <div class="mt-4 mb-2 flex items-center justify-center ">
        <p class="mt-4 inline-flex text-center text-sm text-gray-400 md:mt-0 ">
          &copy; {year} Ismail Shaikhnag. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
