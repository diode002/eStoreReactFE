import React, { Component } from "react";
import HomaPage from "./pages/homepage/homepage.com";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";

import { selectCurrentUser } from "./redux/user/user.selector";
import ShopPage from "./pages/shop/shopage.com";
import Header from "./components/header/header.com";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.com";

import { connect } from "react-redux";
import CheckOutPage from "./pages/checkOutItem/check-out-page.com";

import { checkuserSession } from "./redux/user/user.actions";

class App extends Component {
  unsubfromAuth = null;

  componentDidMount() {
    const { checkuserSession } = this.props;
    checkuserSession();
    // this.unsubfromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubfromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomaPage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchtoProps = (dispatch) => ({
  checkuserSession: () => dispatch(checkuserSession()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
