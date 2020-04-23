import React from "react";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.com";

const CollectionOverview = ({ collection }) => {
  return (
    <div className="shop-collection">
      {collection.map(({ id, ...otherPropsCollection }) => (
        <CollectionPreview key={id} {...otherPropsCollection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
