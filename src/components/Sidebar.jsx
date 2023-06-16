import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";

const SideBar = () => {
  const activeMenu = true;
  const activeLink =
    "flex item-centre gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg:white text-white text-md m-2 bg:white hover:bg-red-700";
  const normalLink =
    "flex item-centre gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-black  m-2";

  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-centre">
            <Link
              to="/"
              onClick={() => {}}
              className="items-centre flex gap-3 ml-4 mt-4 text-xl font-extra-bold dark:text-white text-slate-900"
            >
              <SiShopware />
              <span className="">Shoppy</span>
            </Link>
            <TooltipComponent content="menu" position="bottomCentre">
              <button
                className="text-xl rounded-full p-3 hover:bg-light-red-900 mt-2 block md:hidden"
                type="button"
                onClick={() => {}}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
            {/* items in our side bar the links to the other UI components like employees, orders */}
            <div className="mt-10">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 m-10 mt-4 uppercase">
                    {item.title}
                  </p>
                  <p>
                    {item.links.map((link) => (
                      <NavLink
                      key={link.name}
                        to={`.${link.name}`}
                        onClick={() => {}}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
