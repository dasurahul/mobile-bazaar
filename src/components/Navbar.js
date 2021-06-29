import React, { useState, useContext } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Menu from "./Menu";
import disableScroll from "disable-scroll";

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

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
    disableScroll.on();
  };
  const closeMenu = () => {
    setOpen(false);
    disableScroll.off();
  };

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
          <IconContainer
            onClick={() => history.push("/profile")}
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            <AccountCircleIcon />
            <span style={{ fontWeight: "500" }}>Profile</span>
          </IconContainer>
        )}
        {!authContext.loggedIn && (
          <IconContainer
            onClick={() => history.push("/login")}
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            <AccountCircleIcon />
            <span style={{ fontWeight: "500" }}>Login</span>
          </IconContainer>
        )}
        <IconContainer
          onClick={() => history.push("/cart")}
          style={{ display: "flex", alignItems: "center", gap: "2px" }}
        >
          <Badge badgeContent={1} color="primary">
            <ShoppingCartIcon />
          </Badge>{" "}
          <span style={{ fontWeight: "500" }}>Cart</span>
        </IconContainer>
      </Icons>
      <MenuIconContainer onClick={openMenu}>
        <MenuIcon />
      </MenuIconContainer>
      <Menu open={open} closeMenu={closeMenu} />
    </Container>
  );
};

export default Navbar;
