import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from "react-icons-kit";
import {alignJustify} from 'react-icons-kit/fa/alignJustify'
import {close} from 'react-icons-kit/fa/close'
import styled, {css} from "styled-components";

import {link} from "../../link";

const Hamburger = styled(Icon).attrs({
    icon: alignJustify,
    size: 28,
})`
  display: none !important;
  color: #000000;
  cursor:pointer;
  
  @media screen and (max-width: 500px) {
    display: flex !important;
    margin-right: 20px;
    margin-left: 5px;
  }
`;

const CloseMenuIcon = styled(Icon).attrs({
    icon: close,
    size: 28,
})`
  color: #000000;
  display: none !important;
  position:absolute;
  top: 18px;
  right: 10px;
  cursor: pointer;
  
  @media screen and (max-width: 500px) {
    display: block !important;
  }
`;


const MenuWrap = styled.div`
  display:flex;
  margin-top: 4px;
  
  @media screen and (max-width: 500px) {
    position: fixed;
    z-index: 100;
    left: 0;
    top: -5px;
    bottom: 0;
    transform: translateX(-110%);
    transition: transform .3s;
  }
  
  
  ${({open}) => open && css`
    @media screen and (max-width: 500px) {
      transform: translateX(0);
    }
  `}
`;

const Overlay = styled.div`
  display:none;
  
  @media screen and (max-width: 500px) {
    display:block;
    flex: 1;
  }
`;

const MenuLink = styled(NavLink)`
  padding: 18px 14px 8px 14px !important;
  font-size: 20px;
  color: #000000;
  text-decoration: none;
  font-family: AvenirNextMedium;
  border: 1px solid transparent;
  
  @media screen and (max-width: 500px) {
    color: #4a4a4a;
    margin-right: 0;
    color: #000000;
    padding: 10px 30px;
    border-radius: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
  
  &.active {
    color: #FFFFFF;
    
    @media screen and (max-width: 500px) {
      border: none;
      border-left: 5px solid #1eb31e;
      background-color: #000;
      color: #ffffff;
      border-radius: 0;
    }
  }
`;

const MenuList = styled.div`
  @media screen and (max-width: 500px) {
    width: 250px;
    display:flex;
    flex-direction: column;
    background-color: #fff;
    padding: 65px 0 50px;
    position:relative;
  }
`;

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Hamburger onClick={() => setOpen(true)}/>
            <MenuWrap open={open}>
                <Overlay onClick={() => setOpen(false)}/>
                <MenuList>
                    <CloseMenuIcon onClick={() => setOpen(false)}/>
                    {
                        link.map((item, index) => (
                            <MenuLink
                                key={index}
                                to={item.route}
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </MenuLink>
                        ))
                    }
                </MenuList>
            </MenuWrap>
        </div>
    )
};

export default Menu;