import styled, { css } from "styled-components";

import { DeviceSize } from "../../DeviceSize";

const { smallMobile, smallTablet, laptop, laptopL, desktop } = DeviceSize;

export const Head = styled.header`
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: relative;
  z-index: 2;

  @media screen and (min-width: ${desktop}) {
    margin: 0 auto;
    width: min(100vw, 1500px);
  }

  @media screen and (max-width: ${smallTablet}) {
    height: 100px;
    display: grid;
    place-items: center;
    grid-template-rows: 1fr 1fr;
    padding: 0;

    & > a {
      grid-row: 1;
      margin: 0 auto;

      &:hover,
      :focus {
        border-bottom: none;
      }
    }

    & > * {
      width: 100vw;
    }
  }
`;

export const NavBar = styled.nav`
  height: 100%;
  width: auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const selected = css`
  color: var(--orange);
  border-bottom: 1px solid var(--orange);

  @media screen and (max-width: ${smallTablet}) {
    border-bottom: none;
  }
`;

export const Anchor = styled.a<{ active: number }>`
  color: white;
  height: 100%;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  text-align: center;
  font-size: 1rem;
  border-radius: 2px;
  ${(props) => props.active === 1 && selected};

  &:hover,
  :focus {
    ${selected};
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${smallMobile}) {
    padding: 0 5px;
  }
`;
