import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";

import {
  Ecommerce,
  Orders,
  Calendar,
  Line,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  ColorPicker,
  Financial,
  ColorMapping,
  Editor,
} from "./pages";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const {activeMenu}= useStateContext();
  return (
    <BrowserRouter>
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="top">
          <button
            type="button"
            className="text-3xl text-white "
            //  we used inline styling so that we can be able to choose from other colors dynamically
            style={{ background: "blue", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {/* Side Bar */}
      {activeMenu ? (
        // activeMenu wil come in handy with useContex. If a user is logged in see this etc
        // fixed- position and on dark mode
        <div className="w-72 fixed shadow-lg dark:bg-secondary-dark-bg bg-white">
          <Sidebar/>
        </div>
      ) : (
        <div className="w-0 dark:bg:secondary-dark-bg"><Sidebar/></div>
      )}

      {/* Navigation Bar */}
      <div
        className={`${
          activeMenu
            ? // if a user is logged in they will see this if not they will see the other thing
              "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
            : "dark:bg-main-bg bg-main-bg min-h-screen  w-full flex-2"
          // flex-2 allows the element to grow twice as much as other flex items within the same container
        }`}
      >
        <div
          // navbar class has been defined in app.css
          className="fixed md:static dark:bg-main-dark-bg bg-main-bg  w-full navbar"
        >
         < Navbar />
        </div>
      </div>

      {/* Main Div for Routing */}
      <div>
        <Routes>
          {/* DashBoard */}
          <Route path="/" element={<Ecommerce/>} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
          <Route path="/employees" element={<Employees/>} />
          {/* pages */}
          <Route path="/customers" element={<Customers/>} />
          <Route path="/orders" element={<Orders/>} />

          {/* Apps */}
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/kanban" element={<Kanban/>} />
          <Route path="/editor" element={<Editor/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/color-mapping" element={<ColorMapping/>} />
          <Route path="/color-picker" element={<ColorPicker/>} />

          {/* Charts */}
          <Route path="/line" element={<Line/>} />
          <Route path="/area" element={<Area/>} />
          <Route path="/bar" element={<Bar/>} />

          <Route path="/financial" element={<Financial/>} />
          <Route path="/stacked" element={<Stacked/>} />
          <Route path="/pyramid" element={<Pyramid/>} />
          <Route path="/pie" element={<Pie/>} />
         
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
