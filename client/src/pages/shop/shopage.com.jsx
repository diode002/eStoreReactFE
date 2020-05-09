import React, { Component, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverViewContainer from "../../components/collectionOverview/collection-oveview.cont";
import CollectionPageContainer from "../collection/collection.cont";

function ShopPage({ fetchCollectionsStart, match: { path } }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
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

const mapDispatchtoProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchtoProps)(ShopPage);
