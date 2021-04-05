import styled from 'styled-components'

export default function Nav() {
  return (
    <Component>
      <Menu>
        <Item>
          <Link href="/">
            <span>ホーム</span>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <span>お知らせ</span>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <span>お問い合わせ</span>
          </Link>
        </Item>
      </Menu>
    </Component>
  )
}

const Component = styled.nav`
  position: relative;
`

const Menu = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
`

const Item = styled.li``

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    background-color: #000000;
    transition-duration: 0.3s;
  }
`
