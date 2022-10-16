import styled from 'styled-components';

import { fadeIn, typeWriter } from '../../styles/animation';
import { DeviceSize } from '../../DeviceSize';

const { smallMobile, smallTablet, laptop, laptopL, desktop } = DeviceSize;

export const HomePage = styled.div`
  padding: 50px 40px;
  width: 100vw;
  height: auto;

  @media screen and (max-width: ${smallTablet}) {
    padding: 0;
  }
`;

export const Introduction = styled.article`
  width: 100%;
  padding: 50px 30px 0;
  color: white;
  font-size: 1rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-style: italic;
  margin-top: 50px;

  @media screen and (max-width: ${smallTablet}) {
    padding: 10px 20px;
    width: 100vw;
    text-align: center;
    line-height: 2rem;
  }
`;

export const What = styled.p<{ len: number; time: number }>`
  font-size: 2em;
  ${(props) => typeWriter({ len: props.len.toString(), time: props.time })};
  & > svg {
    color: var(--blue);
  }

  @media screen and (max-width: ${smallTablet}) {
    font-size: 1.5em;
  }

  @media screen and (max-width: ${smallMobile}) {
    font-size: 1.2em;
  }
`;

export const Where = styled.p<{ len: number; time: number }>`
  margin-bottom: 60px;
  font-size: 1.5em;

  ${(props) => typeWriter({ len: props.len.toString(), time: props.time })};
  & > svg {
    color: var(--orange);
  }

  @media screen and (max-width: ${smallTablet}) {
    font-size: 1em;
  }
`;

export const Who = styled.p<{ len: number; time: number }>`
  margin-bottom: 60px;
  font-size: 1.5em;
  & > svg {
    color: #ffea11;
  }

  @media screen and (min-width: ${smallTablet}) {
    ${(props) => typeWriter({ len: props.len.toString(), time: props.time })};
  }

  @media screen and (max-width: ${smallTablet}) {
    ${fadeIn()};
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  ${fadeIn()};
  height: auto;
  padding: 50px 0 0;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${smallTablet}) {
    padding: 0;
    width: 100vw;
  }
`;

export const Image = styled.img`
  ${fadeIn()};
  border-radius: 50%;
  width: 250px;
  height: auto;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  height: auto;
  width: auto;
  padding-bottom: 20px;
`;
