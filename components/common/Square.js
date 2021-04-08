import styled from 'styled-components'

export default function Square({ heading, text }) {
  return (
    <Component>
      <Contents>
        <h3>{heading}</h3>
        <p>{text}</p>
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

  h3, p {
    color: #ffffff;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 1rem;
  }
`;
