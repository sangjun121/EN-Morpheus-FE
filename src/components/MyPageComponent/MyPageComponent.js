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
import ImageDetail from './ImageDetail';

const MyPageComponent = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);
    const [userData, setUserData] = useState({
        userCharacter: [],
        userStoryBook: [],
    });

    //캐릭터 모달창 state
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const characterSortValue = 0;
    const bookSortValue = 1;

    //함수
    //1. API요청 (사용자 캐릭터)
    const loadUserCharacterData = async () => {
        console.log('캐릭터 불러오기 api 호출!');

        try {
            const response = await UserRequestApi.get('/character/list');

            //조회가능한 캐릭터가 없을때
            if (response.data.response.result === 'FAIL') return;

            const userCharacterResponse = response.data.response.code;
            setUserData((prevUserData) => ({
                ...prevUserData,
                userCharacter: userCharacterResponse,
            }));
        } catch (e) {
            console.log(e);
        }
    };
    //(동화책 저장 데이터)
    const loadUserStoryBookData = async () => {
        console.log('동화책 불러오기 api 호출!');
        try {
            const response = await UserRequestApi.get('/fairy/lookup');

            //조회가능한 캐릭터가 없을때
            // if (response.data.response.result === 'FAIL') return;

            const userStoryBookResponse = response.data.response.code;
            console.log(userStoryBookResponse);
            setUserData((prevUserData) => ({
                ...prevUserData,
                userStoryBook: userStoryBookResponse,
            }));
        } catch (e) {
            console.log(e);
        }
    };

    //2. 캐릭터 및 동화책 추가 페이지로 이동
    const navigateCreateContentPage = () => {
        if (tabValue === characterSortValue) navigate('/character');
        else navigate('/data-control/morpheus-builder');
    };

    //3. 모달창 구현 (이미지 확대)
    const viewImageMagnification = (data) => {
        setModalIsOpen(true);
        setModalImage(data.image);
    };

    //4. 실제 동화책 보기 페이지로 이동
    const navigateFairyTalePage = (id) => {
        navigate('/completed-fairytale', { state: id });
    };

    //useEffect
    // 1. 탭 위치에 따라 쿼리스트링 지정
    useEffect(() => {
        if (tabValue === characterSortValue) navigate('/mypage?sort=Character');
        else navigate('/mypage?sort=Book');
    }, [tabValue]);

    //2. 초기 마운트 될때 사용자 정보 불러오기
    useEffect(() => {
        loadUserCharacterData();
        loadUserStoryBookData();
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
                <p>No {CategoryName}</p>
                <p>Add your {CategoryName}</p>
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
        //1. 캐릭터 아이템 구성 (리액트 클로저 해결)
        const CharacterItem = ({ index, data }) => {
            return (
                <div className="MyPageComponentEachItem">
                    <img
                        key={index}
                        src={data.image}
                        onClick={() => viewImageMagnification(data)}
                    />
                    <p>{data.name}</p>
                    <ImageDetail
                        modalIsOpen={modalIsOpen}
                        setModalIsOpen={setModalIsOpen}
                        imgUrl={modalImage}
                    />
                </div>
            );
        };
        //2. 동화책 아이템 구성
        const StoryBookItem = ({ index, data }) => {
            return (
                <div className="MyPageComponentEachItem">
                    <img
                        key={index}
                        src={data.imageUrl}
                        onClick={() => navigateFairyTalePage(data.id)}
                    />
                    <p>{data.title}</p>
                </div>
            );
        };

        //최종 컨포넌트 반환 1. 캐릭터 일때
        if (tabValue === characterSortValue) {
            const itemData = userData.userCharacter;
            console.log('캐릭터: ', itemData);
            return (
                <div className="MyPageComponentItemListContainer">
                    {itemData.map((data, index) => (
                        <CharacterItem index={index} data={data} />
                    ))}
                </div>
            );
        } else if (tabValue === bookSortValue) {
            //2. 동화책 일때
            const itemData = userData.userStoryBook;
            console.log('동화책: ', itemData);
            return (
                <div className="MyPageComponentItemListContainer">
                    {itemData.map((data, index) => (
                        <StoryBookItem index={index} data={data} />
                    ))}
                </div>
            );
        }
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
