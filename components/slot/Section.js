import styled from 'styled-components'

export default function Header({ kind, children }) {
  return (
    <Component className={kind}>
      {children}
    </Component>
  );
}

const Component = styled.div`
  padding: 90px 0;

  &.top {
    padding-bottom: 0;
  }
`
