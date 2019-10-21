import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

import "./counter.css";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="wrap jumbotron">
      <h2>{counter}</h2>
      <button onClick={dec} className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={rnd} className="btn btn-primary btn-lg">
        RND
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(
  mapStateToProps,
  actions
)(Counter);
