import React, { useState, useEffect, useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import InfoIcon from "@material-ui/icons/Info";
import { Link, NavLink, useHistory } from "react-router-dom";
import { signIn } from "../firebase";
import AuthContext from "../store/auth-context";

import styled from "styled-components";

const Container = styled.div`
  min-height: 80px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: "Bangers";
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 15px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ListItem = styled.li``;

const MyLink = styled(Link)`
  text-decoration: none;
  color: #222;
  font-weight: 500;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

const MenuIconContainer = styled(IconContainer)`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Menu = styled.div`
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

const MenuItem = styled.div`
  &:hover {
    background-color: #eee;
  }
`;

const MyIconContainer = styled(IconContainer)`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
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

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    authContext.signInResult();
  }, [authContext]);

  return (
    <Container>
      <Logo onClick={() => history.push("/")}>Mobile Bazaar</Logo>
      <List>
        <ListItem>
          <MyLink to="/">Home</MyLink>
        </ListItem>
        <ListItem>
          <MyLink to="/products">Products</MyLink>
        </ListItem>
        <ListItem>
          <MyLink to="/about">About</MyLink>
        </ListItem>
      </List>
      <Icons>
        {authContext.loggedIn && (
          <IconContainer onClick={() => history.push("/profile")}>
            <AccountCircleIcon />
          </IconContainer>
        )}
        {!authContext.loggedIn && (
          <IconContainer onClick={signIn}>
            <AccountCircleIcon />
          </IconContainer>
        )}
        <IconContainer onClick={() => history.push("/cart")}>
          <Badge badgeContent={1} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconContainer>
      </Icons>
      <MenuIconContainer onClick={openMenu}>
        <MenuIcon />
      </MenuIconContainer>
      <Menu open={open}>
        <IconContainer
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "20px",
            marginBottom: "20px",
          }}
          onClick={closeMenu}
        >
          <CloseIcon />
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
            <MyIconContainer onClick={signIn}>
              <AccountCircleIcon /> Profile
            </MyIconContainer>
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
      </Menu>
    </Container>
  );
};

export default Navbar;
