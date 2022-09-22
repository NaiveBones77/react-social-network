import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/music/Music";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                {/*<Profile />*/}
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/messages/*' element={<DialogsContainer />}/>
                        <Route path='/profile/*' element={<ProfileContainer />}>
                            <Route path=':userId' element={<ProfileContainer />}/>
                        </Route>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path ='/users' element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
