import React, { useEffect, useState } from "react";
import { getInitialData } from "../../redux/actions/storeAction";
import { connect } from "react-redux";

function Abisek(props) {
  const initialData = () => {
    props.getInitialData("");
    return "";
  };
  const [selectedState, setState] = useState(initialData);
  console.log("cool");
  return <div>Hello Abisek</div>;
}

const mapStateToProps = (state) => {
  return {
    storeData: state.storeReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialData: (data) => dispatch(getInitialData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Abisek);
