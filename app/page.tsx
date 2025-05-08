import EmptyLines from "./components/EmptyLines";
import NavLink from "./components/NavLink";

export default function Home() {
  return (
    <div className="nav-container">
      <NavLink href="/about" className="nav-link bottomLine">
        about us
      </NavLink>
      <NavLink href="/contact" className="nav-link bottomLine">
        contact us
      </NavLink>
      <NavLink href="https://www.instagram.com/wonwonleywonclub" className="nav-link bottomLine">
        instagram
      </NavLink>
      <NavLink href="https://www.wonwonleywon.com" className="nav-link bottomLine">
        wonwonleywon the fashion brand
      </NavLink>

      {/* Empty lines to maintain grid pattern */}
      <EmptyLines count={9} className="bottomLine" />
    </div>
  );
}
