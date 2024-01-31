import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../images/mypage/userIcon.png';
import addIcon from '../../images/mypage/add.png';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './MyPageComponent.css';
import UserRequestApi from '../../api/UserRequestApi';

const MyPageComponent = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);
    const [userData, setUserData] = useState({
        userCharacter: [
            // { url: '#', name: 'test' },
            // { url: '#', name: 'test' },
            // { url: '#', name: 'test' },
            // { url: '#', name: 'test' },
        ],
        userStoryBook: [],
    });

    const characterSortValue = 0;
    const bookSortValue = 1;

    //함수
    //1. API요청 (사용자 캐릭터)
    const loadUserData = async () => {
        console.log('api 호출!');
        try {
            const response = await UserRequestApi.get('/character/list');
            console.log(response.data.response.code[0].image);

            const characterName = response.data.response.code[0].name;
            const characterImgUrl = response.data.response.code[0].image;

            setUserData({
                ...userData,
                userCharacter: [{ url: characterImgUrl, name: characterName }],
            });
        } catch (e) {
            console.log(e);
        }
    };

    //2. 캐릭터 및 동화책 추가 페이지로 이동
    const navigateCreateContentPage = () => {
        if (tabValue === characterSortValue) navigate('/character');
        else navigate('/morpheus-builder');
    };

    //useEffect
    // 1. 탭 위치에 따라 쿼리스트링 지정
    useEffect(() => {
        if (tabValue === characterSortValue) navigate('/mypage?sort=Character');
        else navigate('/mypage?sort=Book');
    }, [tabValue]);

    //2. 초기 마운트 될때 사용자 정보 불러오기
    useEffect(() => {
        // loadUserData();
    }, []);

    //Components
    const UserInformation = () => {
        return (
            <div>
                <p className="MyPageComponentTitle">My Page</p>
                <div className="MyPageComponentUserContainer">
                    <img src={userIcon} className="userProfile" />
                    <p className="userName">{userData.userName}</p>
                </div>
            </div>
        );
    };
    const CategoryTab = () => {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleChange}
                            centered
                            textColor="primary"
                            indicatorColor="primary"
                        >
                            <Tab label="CHARACTERS" />
                            <Tab label="MY BOOKS" />
                        </Tabs>
                    </Box>
                </ThemeProvider>
                <div className="MyPageComponentTopLine" />
            </div>
        );
    };
    const NoItem = ({ CategoryName }) => {
        return (
            <div className="MyPageComponentAddBox">
                <p>Add your {CategoryName}</p>
                {/* <img src={addIcon} /> */}
                <a
                    class="effect effect-5"
                    href="javascript:void(0);"
                    title="CLICK"
                    onClick={navigateCreateContentPage}
                >
                    CLICK
                </a>
            </div>
        );
    };
    const Items = () => {
        let itemData;

        if (tabValue === characterSortValue) itemData = userData.userCharacter;
        else itemData = userData.userStoryBook;

        const Item = ({ data }) => {
            return (
                <div className="MyPageComponentEachItem">
                    <img src={data.url} />
                    <p>{data.name}</p>
                </div>
            );
        };

        return (
            <div className="MyPageComponentItemListContainer">
                {itemData.map((data, index) => (
                    <Item key={index} data={data} />
                ))}
            </div>
        );
    };

    const ItemsByCategory = () => {
        //캐릭터 파트일 때
        if (tabValue === characterSortValue) {
            if (userData.userCharacter.length === 0) {
                //아직 캐릭터가 없을 때
                return <NoItem CategoryName={'Character'} />;
            }
            return <Items CategoryName={'Character'} />;
        }

        //사용자 동화책 파트일 때
        if (tabValue === bookSortValue) {
            if (userData.userStoryBook.length === 0) {
                //아직 동화책이 없을 때
                return <NoItem CategoryName={'Story Book'} />;
            }
            return <Items CategoryName={'Story Book'} />;
        }
    };

    //MUI Tabs
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    //MUI Tab Color Theme
    const theme = createTheme({
        palette: {
            primary: {
                main: '#2B1B17',
            },
            secondary: {
                main: '#f44336',
            },
        },
    });
    return (
        <div className="MyPageComponent">
            <UserInformation />
            <CategoryTab />
            <ItemsByCategory />
        </div>
    );
};

export default MyPageComponent;
