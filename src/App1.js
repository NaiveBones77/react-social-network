import './App1.css';
import "antd/dist/antd.css";
import MyHeader from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/music/Music";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import {Layout, Menu, Breadcrumb} from 'antd'

const {Header, Sider, Content, Footer} = Layout

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Header className="header">
                    <MyHeader/>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Navbar/>
                    </Sider>
                    <Layout>
                        <Routes>
                            <Route path='/messages/*' element={<Dialogs state = {props.state.dialogsPage}/>}/>
                            <Route path='/profile' element={<Profile
                                state={props.state.profilePage}
                                detach = {props.detach}
                            />}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                        </Routes>
                    </Layout>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}


export default App;
