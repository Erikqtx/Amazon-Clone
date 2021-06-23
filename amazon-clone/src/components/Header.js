import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg"
        alt="amazon_logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hallo, Anmelden</span>
          <span className="header__optionLineTwo">Konto und Listen</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Warenrücksendungen</span>
          <span className="header__optionLineTwo">und Bestellungen</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Dein</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
