import styled, { css } from "styled-components";
import { Breakpoints } from "../../../resources/Breakpoints";
import { Colors } from "../../../resources/Colors";
import { Link as LinkRouter } from "@reach/router";

export const LogoSmall = styled.img`
  background-color: white;
  z-index: 21;
  display: none;
  position: fixed;
  width: 100px;
  align-items: center;
  margin-left: 3rem;
  margin-top: 2.5rem;
  @media ${Breakpoints.tablet} {
    display: block;
  }
`;

export const HeaderTag = styled.header`
  background-color: white;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${Breakpoints.tablet} {
    display: block;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  flex: 1;
  margin: 0 auto;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  height: inherit;
  flex-wrap: inherit;
`;

export const Figure = styled.figure`
  margin-left: 2rem;
  @media ${Breakpoints.tablet} {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 100px;
  background-color: white;
`;

export const Nav = styled.nav`
  @media ${Breakpoints.tablet} {
    position: fixed;
    background: ${Colors.white};
    z-index: 20;
    top: 0;
    left: -100vw;
    width: 100vw;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    ${(props) =>
      props.active &&
      css`
        left: 0;
      `}
  }
`;

export const Ol = styled.ol`
  display: flex;
  margin-right: 2rem;
  @media ${Breakpoints.tablet} {
    display: block;
  }
`;

export const Li = styled.li`
  color: ${Colors.blue};
  @media ${Breakpoints.tablet} {
    height: 50px;
  }
`;

export const Link = styled(LinkRouter)`
  color: ${Colors.blue};
  text-decoration: none;
  padding: 0 10px;
  align-items: center;
  height: inherit;
  @media ${Breakpoints.tablet} {
    justify-content: center;
    font-size: 2rem;
  }
`;
