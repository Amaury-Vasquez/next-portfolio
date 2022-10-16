import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

const { smallMobile, smallTablet, tablet, laptop, laptopL, desktop } =
  DeviceSize;

export const ProjectPage = styled.div`
  width: 100vw;
  height: auto;
  font-size: 1rem;
`;

export const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  padding: 30px;
  grid-gap: 50px;

  @media screen and (min-width: ${laptopL}) {
    width: min(100%, 1500px);
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${laptopL}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${smallTablet}) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  @media screen and (max-width: ${smallMobile}) {
    padding: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  height: auto;
  width: 150px;
  margin: 0 auto;
  margin-top: 30px;

  @media screen and (max-width: ${smallTablet}) {
    margin-top: 10px;
    padding-bottom: 20px;
  }
`;
