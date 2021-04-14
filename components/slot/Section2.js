import styled from 'styled-components';

export default function Section2({ kind, image, color, children }) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundColor: color || 'transparent'
  };

  return (
    <Component className={kind} style={style}>
      {children}
    </Component>
  );
}

const Component = styled.div`
  padding: 120px 0;
  background-size: cover;
  background-position: 50% 50%;

  &.narrow {
    padding: 60px 0;
  }

  &.top {
    padding-bottom: 0;
  }
`;
