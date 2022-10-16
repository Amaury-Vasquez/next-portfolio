import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const fadeOutKeyframes = keyframes`
  from {
    filter: blur(0);
    opacity: 1;
  }
  
  to {
    filter: blur(5px);
    opacity: 0;
  }
`;

export const fadeIn = ({ time = '2s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeOutKeyframes} ${type};
  `;

const typingKeyframes = keyframes`
  from {
    width: 0;
  }
`;

const cursorKeyframes = keyframes`
  from {
    border-right: 2px solid white;
  }
`;

export const typeWriter = ({ len = '20', time = 2 } = {}) => css`
  width: ${len}ch;
  animation: ${typingKeyframes} ${time + 's'} steps(${len}),
    ${cursorKeyframes} ${time * 2 + 's'} linear;
  overflow: hidden;
  white-space: nowrap;
`;

const placeHolderKeyframes = keyframes`  
  to {
    background-position: 800px;
  }
`;

export const skeleton = ({ time = '2s' } = {}) => css`
  animation: ${placeHolderKeyframes} ${time} infinite;
  /* background-repeat: no-repeat; */
  cursor: progress;
  /* background-repeat: no-repeat; */
  background-size: 1600px;
  background-position: -800px;
`;

const colorLoadKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const colorLoading = css`
  animation: ${colorLoadKeyframes} 1s linear infinite;
`;
