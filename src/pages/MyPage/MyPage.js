import MyPageComponent from '../../components/MyPageComponent/MyPageComponent';
import Header from '../../components/Header/Header';
import './MyPage.css';

const MyPage = () => {
    return (
        <div className="MyPage">
            <Header />
            <MyPageComponent />
        </div>
    );
};

export default MyPage;
