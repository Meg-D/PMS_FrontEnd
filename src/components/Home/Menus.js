import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import medicinePage from "../Medicine/MedicinePage";
const Menus = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Header/>
        
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/my-profile"
        >
          My Profile
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        {/* <Medicine /> */}
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/medicine"
        >
          Medicine
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        {/* <Customer /> */}
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/Customer"
        >
          Customer
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        {/* <Sale /> */}
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/sale"
        >
          Sale
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        {/* <Vendor className="h-8"/> */}
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/vendor"
        >
          Vendor
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        {/* <Request /> */}
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/request"
        >
          Request
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        {/* <Transaction /> */}
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/transaction"
        >
          Transaction
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        {/* <Transaction /> */}
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/"
        >
          Log out
        </Link>
      </div>
      <Switch>
      
        <Route path={'/medicine'} component={medicinePage}/>
      
    </Switch>
    </div>
    
  );
};

export default Menus;
