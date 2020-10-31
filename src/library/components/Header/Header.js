import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteToken } from "../../redux/actions/index";
import {
  LogoSmall,
  HeaderTag,
  Container,
  Figure,
  Logo,
  Nav,
  Ol,
  Li,
  Link,
} from "./HeaderStyles";
import { Images } from "../../../resources/Images";
export const Header = ({ children }) => {
  const { token, dataTable } = useSelector((state) => state.reducer);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleMenu = () => {
    setActive(!active);
  };

  const handleOpenMenu = () => {
    setActive(true);
  };

  const handleCloseMenu = () => {
    setActive(false);
  };

  const deleteToken = () => {
    dispatch(setDeleteToken());
    setActive(false);
  };

  return (
    <>
      <LogoSmall onClick={handleMenu} src={Images.logo} alt="Tuten Labs Logo" />
      <HeaderTag>
        <Container>
          <Figure>
            <Link to={token ? "/" : "/login"}>
              <Logo src={Images.logo} alt="Tuten Labs Logo" />
            </Link>
          </Figure>
          <Nav active={active}>
            <Ol>
              {token && (
                <Li>
                  <Link to="/login" onClick={deleteToken}>
                    Logout
                  </Link>
                </Li>
              )}
            </Ol>
          </Nav>
        </Container>
      </HeaderTag>
      {children}
    </>
  );
};
