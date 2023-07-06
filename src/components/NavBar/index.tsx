import { NavLink } from "react-router-dom";

import './navBar.css'


const NavBar = (): JSX.Element => {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex flex-row gap-3 items-center">
                <li className="font-semibold text-lg">
                    <NavLink to='/' >
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex flex-row gap-3 items-center">
                <li className="text-slate-400">
                    wfgp12@mail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/account'
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;