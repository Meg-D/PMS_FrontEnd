import React from "react";
import { ReactComponent as Search } from "../../images/search.svg";
import profile from "../../images/mypr.png";
import { Link } from "react-router-dom";

function Header({ name, title }) {
  return (
    <div className="flex flex-row items-center justify-between my-8">
      <Link to="/">
        <div class=" text-3xl font-medium text-pink-500 text-opacity-150 ...">Pharmacy Management System</div>
      </Link>

      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center p-3 mr-4 bg-gray-200 rounded-xl">
          <Search className="" />
          <div className="pl-2 pr-16">Search</div>
        </div>

        <Link to="/myprofile">
          <img src={profile} alt="profile" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
