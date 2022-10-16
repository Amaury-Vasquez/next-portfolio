import styled from 'styled-components';

import { fadeIn, colorLoading, skeleton } from '../../styles/animation';

export const ProjectSample = styled.div`
  width: 100%;
  aspect-ratio: 6 / 7;
  display: grid;
  grid-template-rows: 1fr 6fr;
  place-items: center;
`;

export const Loading = styled.div`
  aspect-ratio: 6 / 7;
  width: 100%;
  display: grid;
  /* grid-template-rows: 1fr 6fr; */
  place-items: center;
  /* border: 1px solid var(--soft-orange); */
  background: linear-gradient(to right, var(--soft-orange), var(--green));
  border-radius: 10px;
  ${skeleton({ time: '2s' })};
  /* ${colorLoading}; */
  /* & > div {
    width: 100%;
    height: 100%;
  } */
`;

export const LoadHead = styled.div`
  background: var(--soft-orange);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* ${colorLoading}; */
`;

export const LoadBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  /* ${colorLoading}; */
`;

export const ProjectName = styled.span`
  ${fadeIn()};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: 600;
  background: var(--soft-orange);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const InfoWrapper = styled.div`
  ${fadeIn()};
  width: 100%;
  height: 100%;
  grid-row-start: 2;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  grid-row-start: 2;
  border-radius: inherit;
`;

export const ProjectInfo = styled.article`
  position: absolute;
  inset: 0;
  background: rgba(8, 8, 8, 0.7);
  color: white;
  padding: 20px;
  line-height: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: inherit;
  font-size: 1rem;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-weight: 500;
`;

export const Powered = styled.span<{ color: string }>`
  display: flex;
  width: 100%;
  justify-content: center;
  height: auto;
  font-size: 1em;
  align-items: center;
  justify-content: center;

  & > svg {
    color: ${(props) => props.color};
    margin-left: 5px;
    font-size: 1.2em;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-gap: 15px;
  /* padding: 10px; */
  height: auto;
`;

export const ProjectLink = styled.a`
  width: 80%;
  background: var(--green);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-style: italic;

  & > svg {
    margin-left: 5px;
  }

  &:focus,
  :hover {
    opacity: 0.9;
  }

  :focus {
    border: 2px solid var(--soft-orange);
  }
`;
