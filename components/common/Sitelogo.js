import styled from 'styled-components'

export default function Sitelogo(props) {
  return (
    <Component href="/">
      <img src={props.image} alt="ロゴ" />
    </Component>
  )
}

const Component = styled.a`
  margin: .5rem 0;

  > img {
    width: auto;
    height: 30px;
  }
`;
