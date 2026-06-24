import { NavLink } from "react-router-dom";
{/* <NavLink to="/">Home</NavLink>
<NavLink to="/notes">About</NavLink> */}

const Navbar = () => {
  return (
    <div className='w-full absolute top-0 left-0  p-5 flex items-center justify-between '>
      <div ><h1 className="text-2xl font-semibold">Dashboard.Tech</h1></div>
      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Notes
        </NavLink>
        <NavLink
          to="/quotes"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Quotes
        </NavLink>
        <NavLink
          to="/task"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Task
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
