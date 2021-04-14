import styled from 'styled-components';

export default function Section({ kind, image, color, children }) {
  return (
    <Component className={kind} image={image} color={color}>
      {children}
    </Component>
  );
}

const Component = styled.div`
  padding: 120px 0;
  background-color: ${(props) => props.color || 'transparent'};
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: 50% 50%;

  &.narrow {
    padding: 60px 0;
  }

  &.top {
    padding-bottom: 0;
  }
`;
