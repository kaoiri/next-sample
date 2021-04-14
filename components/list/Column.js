import styled from 'styled-components';

export default function Column({ items, children }) {
  return (
    <Component items={items} className={`items-${items}`}>
      {children}
    </Component>
  );
}

const Component = styled.li`
  display: flex;
  padding: 0.5rem;

  &.items-3 {
    width: 33.33%;
  }

  &.items-2 {
    width: 50%;
  }

  @media only screen and (max-width: 1030px) {
    &.items-3 {
      width: 50%;
    }

    &.items-2 {
      width: 100%;
    }
  }
`;
