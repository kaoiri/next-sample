import styled from 'styled-components';

export default function HK({ kind }) {
  return <Component className={kind}>aa</Component>;
}

const Component = styled.p`
  &.large {
    font-size: 2rem;
  }
`;
