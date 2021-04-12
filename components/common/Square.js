import styled from 'styled-components'

export default function Square({ order, heading, text }) {
  return (
    <Component>
      <Contents>
        <Order>{order}</Order>
        <Heading dangerouslySetInnerHTML={{ __html: heading }}></Heading>
        <Text>{text}</Text>
      </Contents>
    </Component>
  );
}

const Component = styled.div`
  position: relative;
  width: 100%;
  background-color: #000000;

  &:before {
    position: relative;
    z-index: 1;
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Order = styled.p`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
`;

const Contents = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

const Heading = styled.h3`
  margin-top: .5rem;
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem;

  strong {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  color: #ffffff;
  text-align: center;
  margin-top: 1rem;
`;
