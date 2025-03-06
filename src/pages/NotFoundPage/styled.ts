import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.sizes.screen};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const HomeLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.blue};
  text-decoration: underline;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
