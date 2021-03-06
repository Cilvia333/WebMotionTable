import anime from 'animejs';
import React from 'react';
import { useEffect } from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';

type Prop = {
  size?: number;
  isAnimation?: boolean;
};

const SvgFilter = () => (
  <SvgWrapper>
    <StyledSvg height={`400px`} width={`400px`} viewBox="0 0 400 400">
      <filter id="turbulent-0">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0.3"
          numOctaves="2"
          result="noise"
          seed="0"
        />
        <feDisplacementMap
          id="displacement"
          in="SourceGraphic"
          in2="noise"
          scale="10"
        />
      </filter>
      <filter id="turbulent-1">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="1"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
      <filter id="turbulent-2">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="2"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
      <filter id="turbulent-3">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="3"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
      <filter id="turbulent-4">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="4"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
    </StyledSvg>
  </SvgWrapper>
);

export function TurbulentDisplace({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <SvgFilter />
        <Triangle size={size ?? 10} isAnimation={isAnimation ?? false} />
      </Wrapper>
    </>
  );
}

const fractalNoiseAnimation = keyframes`
  0% {
    filter:url('#turbulent-0');
  }
  25% {
    filter:url('#turbulent-1');
  }
  50% {
    filter:url('#turbulent-2');
  }
  75% {
    filter:url('#turbulent-3');
  }
  100% {
    filter:url('#turbulent-4');
  }
`;

const Wrapper = styled.div`
  padding: 10px;
  position: relative;
`;

const Triangle = styled.div<{ size: number; isAnimation: boolean }>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0;
    margin-top: 10px;
    filter: url('#turbulent-0');

    ${({ isAnimation }) =>
      isAnimation &&
      css`
        animation: ${fractalNoiseAnimation} 0.34s linear infinite;
      `}

    ${({ size }) =>
      css`
        border-right: ${size / 2}px solid transparent;
        border-bottom: ${size * 0.85}px solid ${Colors.white};
        border-left: ${size / 2}px solid transparent;
      `}
  }
`;

const SvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
`;
const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  display: hidden;
`;
