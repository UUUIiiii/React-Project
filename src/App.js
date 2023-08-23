import React from 'react';
import s from "./App.module.css"
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import store from './redux/redux-store';




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
}
  render () {
    if (!this.props.initialized){
      return <Preloader/>
    }

    return (
    <div className={s.app_wrapper}>
      <HeaderContainer />
      <NavBar />
      <div className={s.app_wrapper_content}>
        <Routes>
          <Route path='/dialogs*'
            element={<DialogsContainer />} />
          <Route path='/profile/:userId?'
            element={<ProfileContainer />} />
          <Route path='/users*'
            element={<UsersContainer />} />
          <Route path='/login*'
            element={<LoginPage />} />
        </Routes>
        {/* <Dialog /> */}
      </div>
    </div>
   )}
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})




export const AppContainer = compose( connect(mapStateToProps, { initializeApp }))(App);

const AppMain = (props) => {
 return <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
  </Provider>
</BrowserRouter>
}

export default AppMain