import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import UserRequestApi from '../../api/UserRequestApi';

const Header = () => {
    let navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const token = localStorage.getItem('token');

    const toggleMenu = () => {
        if (menuOpen) {
            const menuElement = document.querySelector('.menu-animation');
            menuElement.classList.add('closing');

            setTimeout(() => {
                setMenuOpen(false);
                menuElement.classList.remove('closing');
            }, 1500);
        } else {
            setMenuOpen(true);
        }
    };

    const handleScroll = () => {
        const position = window.scrollY;
        setIsFixed(position > 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //로그아웃 로직
    const requestLogout = async () => {
        try {
            console.log('로그아웃 API 요청');
            const response = await UserRequestApi.delete('/members/logout');
            localStorage.removeItem('token');
            console.log('로그아웃 성공');
            alert('Logged out successfully.');
            navigate('/');
        } catch (error) {
            if (error.response) {
                // 서버가 2xx 이외의 상태 코드로 응답한 경우
                console.log('오류:', error.response.data);
                // 오류 처리, 예: 사용자에게 오류 메시지 표시
            } else if (error.request) {
                // 요청이 이루어졌으나 응답을 받지 못한 경우
                console.log('서버 응답 없음');
            } else {
                // 요청 설정 시 오류 발생
                console.error('요청 실패:', error.message);
            }
            // 네트워크 오류 처리
        }
    };

    //로그인 로그아웃 버튼 리턴 컨포넌트
    const LoginOrLogout = () => {
        //로그인
        if (!token) {
            return (
                <span
                    className="header-login"
                    onClick={() => navigate('/login')}
                >
                    Login
                </span>
            );
        }

        //로그아웃
        return (
            <span className="header-login" onClick={requestLogout}>
                Logout
            </span>
        );
    };

    return (
        <div
            className={
                isFixed ? 'header-section fixed-position' : 'header-section'
            }
        >
            <div className="header-logo" onClick={() => navigate('/')}>
                <FontAwesomeIcon className="logo-morpheus" icon={faBookQuran} />
                <span>MORPHEUS</span>
            </div>
            <ul className="header-right-component">
                <li>
                    <span className="header-home" onClick={() => navigate('/')}>
                        Home
                    </span>
                </li>
                <li>
                    <span
                        className="header-about"
                        // onClick={() => navigate('/about')}
                    >
                        About
                    </span>
                </li>
                <li>
                    <LoginOrLogout />
                </li>
                {token ? (
                    <li>
                        <span
                            className="header-mypage"
                            onClick={() => navigate('/mypage')}
                        >
                            My Page
                        </span>
                    </li>
                ) : null}

                <button
                    className="header-try-morpheus"
                    onClick={() => navigate('/data-control')}
                >
                    Try morpheus
                </button>
                <FontAwesomeIcon
                    className="menu-icon"
                    icon={faBars}
                    onClick={toggleMenu}
                />
            </ul>
            {menuOpen && (
                <MenuAnimation menuOpen={menuOpen} toggleMenu={toggleMenu} />
            )}
        </div>
    );
};

const MenuAnimation = ({ menuOpen, toggleMenu }) => {
    const [menuItemsVisible, setMenuItemsVisible] = useState(true);

    const handleCloseButton = () => {
        setMenuItemsVisible(false);
        toggleMenu();
    };

    let navigate = useNavigate();

    return (
        <div className={'menu-animation ' + (menuOpen ? 'open' : 'close')}>
            <div className="menu-slide" id="slide1"></div>
            <div className="menu-slide" id="slide2"></div>
            <div className="menu-slide" id="slide3"></div>
            <div className="menu-slide" id="slide4"></div>
            {menuItemsVisible && (
                <div className="menu-items">
                    <div className="menu-item" onClick={handleCloseButton}>
                        Home
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => navigate('/character')}
                    >
                        Character
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => navigate('/morpheus-builder')}
                    >
                        Try Morpheus
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
