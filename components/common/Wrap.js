import styled from 'styled-components'

export default function Wrap({ children }) {
  return (
    <Component>
      {children}
    </Component>
  )
}

const Component = styled.div`
  margin: 0 auto;
  width: 1000px;

  @media only screen and (max-width: 1030px) {
    width: 800px;
  }
`;
