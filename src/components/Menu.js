import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";
import ReactDOM from "react-dom";

import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  transform: ${(props) => (props.open ? "translate(0)" : "translate(100%)")};
`;

const MyMenu = styled.div`
  padding: 20px 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  z-index: 1;
  background-color: #fff;
  transform: ${(props) => (props.open ? "translate(0)" : "translate(100%)")};
  transition: transform 200ms;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

const MenuItem = styled.div`
  &:hover {
    background-color: #eee;
  }
`;

const MyNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 20px;
  color: #222;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
`;

const Menu = (props) => {
  const authContext = useContext(AuthContext);
  return ReactDOM.createPortal(
    <React.Fragment>
      <Overlay open={props.open} onClick={props.closeMenu}></Overlay>
      <MyMenu open={props.open}>
        <IconContainer
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <CloseIcon onClick={props.closeMenu} />
        </IconContainer>
        <MenuItem>
          <MyNavLink exact to="/" activeStyle={{ backgroundColor: "#ddd" }}>
            <HomeIcon /> Home
          </MyNavLink>
        </MenuItem>
        <MenuItem>
          <MyNavLink to="/products" activeStyle={{ backgroundColor: "#ddd" }}>
            <DevicesOtherIcon /> Products
          </MyNavLink>
        </MenuItem>
        <MenuItem>
          <MyNavLink to="/about" activeStyle={{ backgroundColor: "#ddd" }}>
            <InfoIcon /> About
          </MyNavLink>
        </MenuItem>
        {authContext.loggedIn && (
          <MenuItem>
            <MyNavLink to="/profile" activeStyle={{ backgroundColor: "#ddd" }}>
              <AccountCircleIcon /> Profile
            </MyNavLink>
          </MenuItem>
        )}
        {!authContext.loggedIn && (
          <MenuItem>
            <MyNavLink to="/login" activeStyle={{ backgroundColor: "#ddd" }}>
              <AccountCircleIcon /> Login
            </MyNavLink>
          </MenuItem>
        )}
        <MenuItem>
          <MyNavLink to="/cart" activeStyle={{ backgroundColor: "#ddd" }}>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>{" "}
            Cart
          </MyNavLink>
        </MenuItem>
      </MyMenu>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default Menu;
