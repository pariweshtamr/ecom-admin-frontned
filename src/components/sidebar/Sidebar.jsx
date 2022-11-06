import { SidebarContainer } from "./sidebarStyles"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PeopleIcon from "@mui/icons-material/People"
import InventoryIcon from "@mui/icons-material/Inventory"
import PollIcon from "@mui/icons-material/Poll"
import SettingsIcon from "@mui/icons-material/Settings"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="top">
        <span className="logo">E-com Admin</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PeopleIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">ACCESSIBILITY</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar
