import styled from 'styled-components'

export default function Card({ name, message }) {
  return (
    <Component>
      <Name>{name}</Name>
      <Message>{message}</Message>
    </Component>
  )
}

const Component = styled.div`
  padding: 1.5rem;
  border: 1px solid #000000;
  border-radius: 5px;
`

const Name = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`

const Message = styled.p`
  margin-top: 1rem;
  line-height: 1.75;
`
