import styled from 'styled-components';

export const HeaderRow = styled.header`
  width: 100%;
  height: 104px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  position: relative;
`;

export const HeaderContainer = styled.div`
  width: 375px;
  height: 104px;
  padding: 32px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;

  @media (min-width: 680px) {
    width: 680px;
    padding: ${({ theme }) => theme.spacing.xlarge};
  }

  @media (min-width: 1005px) {
    width: 1005px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.black};
`;

export const AddColumnButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  cursor: pointer;
  display: none;

  @media (min-width: 680px) {
    display: block;
  }
`;

export const BurgerMenu = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  z-index: 1001;

  @media (min-width: 680px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  padding-right: 24px;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.black};
  position: relative;
  transition: all 0.3s ease;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.black};
    transition: all 0.3s ease;
  }

  &:before {
    top: -8px;
    transform: rotate(0deg);
  }

  &:after {
    bottom: -8px;
    transform: rotate(0deg);
  }

  &.open {
    background: transparent;

    &:before {
      top: 0;
      transform: rotate(45deg);
    }

    &:after {
      bottom: 0;
      transform: rotate(-45deg);
    }
  }
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  right: 0px;
  width: 120px;
  z-index: 1001;

  button {
    width: 100%;
    padding: 10px;
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.large};
    text-align: left;
  }
`;
