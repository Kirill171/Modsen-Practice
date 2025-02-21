import styled from 'styled-components';

export const HeaderRow = styled.header`
  position: fixed;
  width: 100%;
  height: 104px;
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

export const HeaderContainer = styled.div`
  width: 1005px;
  height: 104px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;

export const AddColumnButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: inherit;
  border: 1px solid #cbd5e1;
  border-radius: 50%;
  cursor: pointer;
`;
