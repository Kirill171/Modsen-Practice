import styled from 'styled-components';

export const HeaderRow = styled.header`
  width: ${({ theme }) => theme.sizes.full};
  height: ${({ theme }) => theme.sizes.headerHeight};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  position: relative;
`;

export const HeaderContainer = styled.div`
  width: ${({ theme }) => theme.sizes.containerWidthMobile};
  height: ${({ theme }) => theme.sizes.headerHeight};
  padding: ${({ theme }) => theme.spacing.HeaderContainer};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;

  @media (min-width: ${({ theme }) => theme.sizes.containerWidthTablet}) {
    width: ${({ theme }) => theme.sizes.containerWidthTablet};
    padding: ${({ theme }) => theme.spacing.xlarge};
  }

  @media (min-width: ${({ theme }) => theme.sizes.containerWidthDesktop}) {
    width: ${({ theme }) => theme.sizes.containerWidthDesktop};
  }
`;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.black};
`;

export const AddColumnButton = styled.button`
  width: ${({ theme }) => theme.sizes.addButtonSize};
  height: ${({ theme }) => theme.sizes.addButtonSize};
  background-color: inherit;
  border: ${({ theme }) => theme.border.border};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  cursor: pointer;
  display: none;

  @media (min-width: ${({ theme }) => theme.sizes.containerWidthTablet}) {
    display: block;
  }
`;

export const BurgerMenu = styled.button`
  width: ${({ theme }) => theme.sizes.burgerMenuSize};
  height: ${({ theme }) => theme.sizes.burgerMenuSize};
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  z-index: ${({ theme }) => theme.sizes.burgerMenuZIndex};

  @media (min-width: ${({ theme }) => theme.sizes.containerWidthTablet}) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  padding-right: ${({ theme }) => theme.sizes.burgerMenuSize};
  width: ${({ theme }) => theme.sizes.burgerMenuSize};
  height: ${({ theme }) => theme.sizes.burgerIconHeight};
  background: ${({ theme }) => theme.colors.black};
  position: relative;
  transition: all 0.3s ease;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.sizes.burgerMenuSize};
    height: ${({ theme }) => theme.sizes.burgerIconHeight};
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
  z-index: ${({ theme }) => theme.sizes.menuOverlayZIndex};
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.sizes.mobileMenuTop};
  right: 0px;
  width: ${({ theme }) => theme.sizes.mobileMenuWidth};
  z-index: ${({ theme }) => theme.sizes.burgerMenuZIndex};

  button {
    width: ${({ theme }) => theme.sizes.full};
    padding: ${({ theme }) => theme.spacing.lightsmall};
    background: ${({ theme }) => theme.colors.cardBackground};
    border: ${({ theme }) => theme.border.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.large};
    text-align: left;
  }
`;
