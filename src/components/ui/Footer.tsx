export const Footer = () => {
  return (
    //    <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
    // <!--Footer container-->
    <footer
      className="flex flex-col items-center text-center text-white absolute w-full left-0 mt-28"
      style={{ backgroundColor: "#4391d9" }}
    >
      <div className="container p-6">
        <div className="">
          <p className="flex items-center justify-center">
            <span className="mr-4">Shopeemarth</span>
          </p>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://tw-elements.com/">
          TW elements
        </a>
      </div>
    </footer>
  );
};
