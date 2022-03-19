import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Discover from "./components/Listing/Discover";
import {BrowserRouter, Route} from "react-router-dom";
import Location from "./components/Location/Location";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Faq from "./components/FAQ/faq";
import Store from "./components/NavBar/Store/Store";
import Browse from "./components/NavBar/Browse/Browse";
import Platforms from "./components/NavBar/Platforms/Platforms";
import dialogs from "./components/NavBar/Discover/Discover";
import Filtres from "./components/Filtres/Filtres";
import Pagination from "./components/Pagination/Pagination";
import Banner from "./components/Banner/Banner";
import SubNav from "./components/SubNav/SubNav";
import Menu from "./components/Menu/Menu";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Location/>
                <Nav/>
                <SubNav/>
                <Banner/>
                <Search />
                <Filtres/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={dialogs}/>
                    <Route path="/discover" render={() => <Discover state={props.state.profilePage} addMessage={props.addMessage}/>}/>
                    <Route path="/news" component={Store}/>
                    <Route path="/music" component={Browse}/>
                    <Route path="/settings" component={Platforms}/>
                </div>
                <Pagination/>
                <Faq/>
                <Footer/>
            </div>
            <Menu/>
        </BrowserRouter>
    )
        ;
};

export default App;
