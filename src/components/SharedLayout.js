import { Outlet, NavLink } from 'react-router-dom';

function SharedLayout() {
    return <>
        <div>
            <h1>TO-Do Task</h1>
            <div className='nav flex-container'>
                <NavLink to='/'
                    className={({ isActive }) => isActive && "active-link"}
                >All</NavLink>
                <NavLink to='/active' className={({ isActive }) => (isActive && "active-link")} >Active</NavLink>
                <NavLink to='/completed' className={({ isActive }) => (isActive && "active-link")} >Completed</NavLink>
            </div>
            <div className='line'></div>
        </div>

        <Outlet />
    </>
}
export default SharedLayout;