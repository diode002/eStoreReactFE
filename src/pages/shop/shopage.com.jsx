import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverViewContainer from "../../components/collectionOverview/collection-oveview.cont";
import CollectionPageContainer from "../collection/collection.cont";

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribefromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const {
      match: { path },
    } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${path}`} component={CollectionOverViewContainer} />
        <Route
          path={`${path}/:collectionID`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchtoProps)(ShopPage);
