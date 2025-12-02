import { useState } from "react";
import "./navigation.component.css";
const NavItems = [
  {
    name: "Home",
    icon: "",
    selected: true,
  },
  {
    name: "Players",
    icon: "",
    selected: false,
  },
  {
    name: "Teams",
    icon: "",
    selected: false,
  },
  {
    name: "Tournaments",
    icon: "",
    selected: false,
  },
];
export default function Navigation() {
  const [navItem, setNavItem] = useState(NavItems);
  function onSelect(item) {
    let updated = navItem.map((nav) => ({
      ...nav,
      selected: nav.name == item.name,
    }));
    setNavItem((val) => updated);
  }
  let _navItems = navItem.map((nav) => {
    if (nav.selected) {
      return (
        <li key={nav.name} className="selected">
          {nav.name}
        </li>
      );
    } else {
      return (
        <li
          key={nav.name}
          onClick={() => {
            onSelect(nav);
          }}
        >
          {nav.name}
        </li>
      );
    }
  });

  return (
    <>
      <ul className="lay-row gap16">{_navItems}</ul>
    </>
  );
}
