import { NavbarContainer } from "./navbarStyles"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <img src="/img/spinner.jpg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
