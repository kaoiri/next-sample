import styled from 'styled-components';

export default function MainVisual() {
  return (
    <Component>
      <Message>
        中小〜〜〜〜とともに、
        <br />
        <strong>日本を〜〜〜〜目指す</strong>
      </Message>

      <Strength>
        <Services>
          <li>コンサルティング</li>
          <li>デジタルマーケティング</li>
        </Services>

        <span>だからできる、〜〜〜コンサルティング</span>
      </Strength>
    </Component>
  );
}

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #efefef;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-family: serif;

  strong {
    font-size: 3rem;
  }
`;

const Strength = styled.div`
  margin-top: 5rem;

  span {
    display: block;
    margin-top: 1rem;
    text-align: center;
  }
`;

const Services = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    padding: 0.75rem 0;
    width: 250px;
    border: 1px solid #000000;
    text-align: center;

    &:not(:first-child) {
      margin-left: 1.5rem;
    }
  }
`;
