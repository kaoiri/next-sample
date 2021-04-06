import styled from 'styled-components'

export default function Header({ children }) {
  return (
    <Component>
      {children}
    </Component>
  );
}

const Component = styled.div`
  padding: 90px 0;
`
