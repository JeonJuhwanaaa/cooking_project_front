import AgreementPage from '../pages/AgreementPage/AgreementPage';
import MyPage from '../pages/MyPage/MyPage';
import SigninPage from '../pages/SigninPage/SigninPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import { Route, Routes } from 'react-router-dom';

function AuthRoute(props) {


    return (
        <>
            <Routes>
                <Route path='/auth/agreement' element={ <AgreementPage />} />
                <Route path="/auth/signup" element={ <SignupPage /> }/>
                <Route path="/auth/signin" element={ <SigninPage /> }/>
                <Route path="/mypage" element={ <MyPage /> }/>
            </Routes>
        </>
    );
}

export default AuthRoute;