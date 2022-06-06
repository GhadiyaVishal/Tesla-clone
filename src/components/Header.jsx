import React, { useState } from "react";
import styled from "styled-components";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const cars = useSelector(selectCars);
  //   console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setMenu(true)} />
      </RightMenu>
      <HamBurgerNav show={menu}>
        <CustomWrapper>
          <CustomClose onClick={() => setMenu(false)} />
        </CustomWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href="#">
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="#">CyberTruk</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trad in</a>
        </li>
      </HamBurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuOpenOutlinedIcon)`
  cursor: pointer;
`;

const HamBurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: start;
  list-style: none;
  padding: 20px;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
