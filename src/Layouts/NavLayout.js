import React, { useState } from 'react';
import styled from 'styled-components';
import { getFlex } from '../Assets/other/getFlex';
import logo from '../Assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr';
import { onLargeMobile, onSmallLaptop } from '../Assets/other/screenSizes';
import DropDown from '../Components/DropDown';
import { useGlobals } from '../Providers/GlobalsProvider';
import { TfiLayoutGrid2 } from 'react-icons/tfi';
import { IoMdClose } from 'react-icons/io';
export default function NavLayout() {
        const pathname = useLocation().pathname;

        const { language, changeLanguage, t } = useGlobals();
        const [sidebarOpen, setSidebarOpen] = useState(false);
        function active(path) {
                return pathname === path;
        }

        return (
                <>
                        <Wrapper $top='0'>
                                <FirstDiv>
                                        <Logo fetchPriority='hight' atl='logo' src={logo} />
                                        <LogoText>It Solutions</LogoText>

                                        <LinksWrapper>
                                                <NavLink $active={active('/')} to='/'>
                                                        {t(`Home`)}
                                                </NavLink>
                                                <NavLink $active={active('/why-choose-us')} to='/why-choose-us'>
                                                        {t(`Why Choose Us`)}
                                                </NavLink>
                                                <NavLink $active={active('/about')} to='/about'>
                                                        {t(`About`)}
                                                </NavLink>
                                                <NavLink $active={active('/contact-us')} to='/contact-us'>
                                                        {t(`Contact Us`)}
                                                </NavLink>
                                        </LinksWrapper>
                                </FirstDiv>
                                <SecondDiv>
                                        <DropDown
                                                label={(() => {
                                                        switch (language) {
                                                                case 'english':
                                                                        return (
                                                                                <LanguageLabel>
                                                                                        <GrLanguage size={20} />
                                                                                        <p> English </p>
                                                                                </LanguageLabel>
                                                                        );
                                                                case 'arabic':
                                                                        return (
                                                                                <LanguageLabel>
                                                                                        <GrLanguage />
                                                                                        <p> عربي </p>
                                                                                </LanguageLabel>
                                                                        );
                                                                case 'german':
                                                                        return (
                                                                                <LanguageLabel>
                                                                                        <GrLanguage />
                                                                                        <p> Deutsch </p>
                                                                                </LanguageLabel>
                                                                        );
                                                                case 'kurdi_sorani':
                                                                        return (
                                                                                <LanguageLabel>
                                                                                        <GrLanguage />
                                                                                        <p> كوردى </p>
                                                                                </LanguageLabel>
                                                                        );
                                                                case 'kurdi_latin':
                                                                        return (
                                                                                <LanguageLabel>
                                                                                        <GrLanguage />
                                                                                        <p> Kurdî </p>
                                                                                </LanguageLabel>
                                                                        );
                                                                default:
                                                        }
                                                })()}>
                                                <div
                                                        style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: 10,
                                                                padding: '20px 10px',
                                                                minWidth: 140,
                                                        }}>
                                                        <LanguageListItem
                                                                onClick={() => changeLanguage('english')}
                                                                $active={language === 'english'}>
                                                                English
                                                        </LanguageListItem>
                                                        <LanguageListItem
                                                                onClick={() => changeLanguage('arabic')}
                                                                $active={language === 'arabic'}>
                                                                عربي
                                                        </LanguageListItem>
                                                        <LanguageListItem
                                                                onClick={() => changeLanguage('kurdi_sorani')}
                                                                $active={language === 'kurdi_sorani'}>
                                                                كوردى
                                                        </LanguageListItem>
                                                        <LanguageListItem
                                                                onClick={() => changeLanguage('kurdi_latin')}
                                                                $active={language === 'kurdi_latin'}>
                                                                Kurdî
                                                        </LanguageListItem>
                                                        <LanguageListItem
                                                                onClick={() => changeLanguage('german')}
                                                                $active={language === 'german'}>
                                                                Deutsch
                                                        </LanguageListItem>
                                                </div>
                                        </DropDown>
                                        <Icon $mobile onClick={() => setSidebarOpen(true)}>
                                                <TfiLayoutGrid2 color='#fff' size={20} />
                                        </Icon>
                                </SecondDiv>
                        </Wrapper>
                        <SideBarWrapper $open={sidebarOpen}>
                                <Icon onClick={() => setSidebarOpen(false)}>
                                        <IoMdClose size={20} color='#fff' />
                                </Icon>
                                <LinksWrapper $mobile>
                                        <NavLink
                                                $active={active('/')}
                                                to='/'
                                                onClick={() => {
                                                        setSidebarOpen(false);
                                                }}>
                                                {t(`Home`)}
                                        </NavLink>
                                        <NavLink
                                                $active={active('/why-choose-us')}
                                                to='/why-choose-us'
                                                onClick={() => {
                                                        setSidebarOpen(false);
                                                }}>
                                                {t(`Why Choose Us`)}
                                        </NavLink>
                                        <NavLink
                                                $active={active('/about')}
                                                to='/about'
                                                onClick={() => {
                                                        setSidebarOpen(false);
                                                }}>
                                                {t(`About`)}
                                        </NavLink>
                                        <NavLink
                                                $active={active('/contact-us')}
                                                to='/contact-us'
                                                onClick={() => {
                                                        setSidebarOpen(false);
                                                }}>
                                                {t(`Contact Us`)}
                                        </NavLink>
                                </LinksWrapper>
                        </SideBarWrapper>
                </>
        );
}

const Wrapper = styled.nav`
        font-size: 1.6rem;
        ${getFlex('space-between')}
        padding: 10px 3rem 10px 3rem;
        position: fixed;
        background: ${({ $bg }) => ($bg ? $bg : 'transparent')};
        background: rgb(2, 0, 36);
        background: -moz-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%);
        background: -webkit-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%);
        background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%);

        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#090979",GradientType=1);
        top: 0;
        width: 100%;
        background-color: transparent;

        z-index: 10;
`;

const FirstDiv = styled.div`
        width: 100%;
        ${getFlex('flex-start', 'center', '1rem')}
`;

const SecondDiv = styled.div`
        ${getFlex('flex-end', 'center', '2rem')}
`;

const Logo = styled.img`
        width: 5rem;
`;

const LogoText = styled.p`
        background: linear-gradient(to top right, #ff6f00, #ffa800);
        -webkit-background-clip: text;
        background-clip: none;
        -webkit-text-fill-color: transparent;
        font-size: 2rem;
        font-weight: 500;
`;

const LinksWrapper = styled.div`
        ${getFlex('flex-start', 'center', '1.4rem')}
        margin-inline-start: 4rem;

        ${onSmallLaptop} {
                display: ${({ $mobile }) => ($mobile ? 'flex' : 'none')};
                flex-direction: column;
                height: 100%;
                font-size: 2rem;
                margin: 0;
                margin-top: 4rem;
        }
`;

const NavLink = styled(Link)`
        text-decoration: none;
        color: ${({ $active }) => ($active ? '#ff6f00' : '#f3f3f3')};
        font-weight: 700;
`;

const LanguageLabel = styled.p`
        background-color: #ff6f00dd;
        padding: 5px 20px;
        color: #fff;
        border-radius: 15px;
        font-weight: 600;
        ${getFlex('center', 'center', '1rem')};
        transition: 0.3s ease-in-out;
        ${onLargeMobile} {
                background-color: transparent;
                padding: 5px 0px;

                & > p {
                        display: none;
                }
        }
        &:hover {
                cursor: pointer;
                background-color: #ff6f0099;
        }
`;

const LanguageListItem = styled(LanguageLabel)`
        background-color: ${({ $active }) => ($active ? '#ff6f00dd' : 'transparent')};
        color: ${({ $active }) => ($active ? '#fff' : '#333')};
        font-size: 1.4rem;
        &:hover {
                color: #fff;
        }
`;

const Icon = styled.div`
        height: 30px;
        width: 30px;
        ${getFlex()};
        display: ${({ $mobile }) => ($mobile ? 'none' : 'flex')};
        ${onSmallLaptop} {
                display: flex;
        }
`;

const SideBarWrapper = styled.div`
        position: fixed;
        inset: 0;
        height: 100vh;
        width: 100vw;
        transition: 0.3s ease;
        margin-inline-start: ${({ $open }) => ($open ? '0' : '-100vw')};
        background: #111111cc;
        z-index: 100;
        padding: 10px;
`;
