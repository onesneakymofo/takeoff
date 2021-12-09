import styled from '@emotion/styled'

export const SpinLoader = styled.div<{ color: string | null; size: number }>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size}rem;
    height: ${(props) => props.size}rem;
    border: 0.125rem solid ${(props) => props.color};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color} transparent transparent transparent;
  }
  div:nth-of-type(1) {
    animation-delay: -0.45s;
  }
  div:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  div:nth-of-type(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
