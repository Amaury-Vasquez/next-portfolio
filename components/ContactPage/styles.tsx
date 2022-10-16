import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn } from '../../styles/animation';

const { smallMobile, smallTablet, laptop, laptopL, desktop } = DeviceSize;

export const ContactLayout = styled.div`
  margin: 0 auto;
  padding: 50px;

  @media screen and (min-width: ${laptopL}) {
    width: min(100%, 1500px);
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${laptopL}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${smallTablet}) {
    width: 100vw;
    padding: 0;
  }
`;

export const Content = styled.article`
  font-size: 1rem;
  color: white;
  text-align: center;
  ${fadeIn()};
`;

export const Email = styled.article`
  margin: 0 auto;
  height: auto;
  width: fit-content;
  padding: 15px;
  line-height: 2.5em;
  text-align: center;

  @media screen and (max-width: ${smallTablet}) {
    width: 100%;
    line-height: 2em;
  }
`;

export const EmailMessage = styled.p`
  font-size: 1.5em;
  font-weight: 600;

  @media screen and (max-width: ${smallTablet}) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2em;

  @media screen and (max-width: ${smallTablet}) {
    margin-top: 20px;
  }
`;

export const SocialMedia = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-gap: 10px;

  @media screen and (max-width: ${smallTablet}) {
    width: 100%;
    padding-bottom: 10px;
  }
`;

export const MediaIcon = styled.a<{ color: string }>`
  font-size: 1.5em;
  & > svg {
    color: ${(props) => props.color};
  }

  &:focus,
  :hover {
    opacity: 0.8;
  }

  &:focus {
    & > svg {
      border: 1px solid var(--soft-orange);
      border-radius: 5px;
    }
  }
`;
