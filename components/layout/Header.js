import styled from 'styled-components'
import Sitelogo from '../common/Sitelogo'
import Nav from '../navigation/Nav'

export default function Header() {
  return (
    <Component>
      <Sitelogo image="/vercel.svg"></Sitelogo>

      <Nav></Nav>
    </Component>
  );
}

const Component = styled.header`
  display: flex;
  justify-content: space-between;
`
