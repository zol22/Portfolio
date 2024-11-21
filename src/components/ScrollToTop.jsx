import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
        // If we are on the home route, scroll to the top
        window.scrollTo(0, 0);
      }
  }, [pathname]); // When the route changes (when the pathname changes), it calls window.scrollTo(0, 0) to scroll the page to the top.

  return null;
}