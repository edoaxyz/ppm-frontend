import "../scss/styles.scss";

import { Offcanvas, Collapse } from "bootstrap";

(() => {
  const topReached = () => {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document.querySelector(".my--navbar").classList.remove("top-reached");
    } else {
      document.querySelector(".my--navbar").classList.add("top-reached");
    }
  };

  if (document.querySelector(".my--navbar")) {
    window.addEventListener("scroll", topReached);
    topReached();
  }
})();
