import styled from 'styled-components';

import { colorLoading, fadeIn, fadeOut } from '../../styles/animation';
import { DeviceSize } from '../../DeviceSize';

const { smallMobile, smallTablet, laptop, laptopL, desktop } = DeviceSize;

export const Form = styled.form`
  position: relative;
  margin: 0 auto;
  width: fit-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  line-height: 2rem;

  @media screen and (max-width: ${smallTablet}) {
    width: 100%;
    padding: 0;
  }
`;

export const Label = styled.label`
  width: 100%;
  padding-left: 5px;
  text-align: left;
  color: var(--soft-orange);
  font-size: 1em;
`;

export const IconInput = styled.div<{ color?: string }>`
  height: auto;
  width: 400px;
  margin-bottom: 15px;
  position: relative;

  @media screen and (max-width: ${smallTablet}) {
    width: 100%;
  }
`;

export const Icon = styled.span`
  position: absolute;
  left: 0;
  width: auto;
  height: 100%;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  background: #151515;
  border: none;
  color: white;
  border-radius: 3px;
  font-size: 1em;
  padding: 15px;
  padding-left: 40px;
  /* font-weight: 600; */

  &:focus {
    outline: none;
    border: 1px solid var(--soft-orange);
  }
`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 200px;
  background: #151515;
  border: none;
  color: white;
  border-radius: 3px;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 10px;
  font-family: Rubik, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid var(--soft-orange);
  }
`;

export const Required = styled.span`
  ${fadeIn({ time: '0.5s' })};
  color: var(--red);
  font-size: 1rem;
  padding-left: 5px;
  width: 100%;
  text-align: left;
  line-height: 1rem;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  margin-top: 30px;
  width: auto;
  padding: 0 30px;
  height: 50px;
  background: var(--soft-orange);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s linear;

  & > svg {
    font-size: 1.2em;
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    border: 2px solid var(--green);
    opacity: 0.5;
  }

  @media screen and (max-width: ${smallTablet}) {
    margin-top: 20px;
  }
`;

export const Sending = styled.div`
  ${fadeIn()};
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    ${colorLoading};
  }
  & > * {
    margin-bottom: 50px;
  }
`;

export const Action = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`;

export const ActionMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const EmailSent = styled.div<{ success?: number; fadeOut?: number }>`
  ${fadeIn()};
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > svg {
    font-size: 2rem;
    color: ${(props) => (props.success ? 'var(--soft-orange)' : 'var(--red)')};
    margin-top: 10px;
  }

  ${(props) => props.fadeOut && fadeOut()};
  /* background: var(--soft-orange); */
`;
