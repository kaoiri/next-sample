import styled from 'styled-components'

export default function Columns({ children }) {
  return <Component>{children}</Component>
}

const Component = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  list-style: none;
`
