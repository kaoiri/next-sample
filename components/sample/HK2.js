import styled from 'styled-components';

export default function HK2({ size }) {
  return <Component size={size}>aa</Component>;
}

const Component = styled.p`
  font-size: ${(props) => props.size || '1rem'};
`;
