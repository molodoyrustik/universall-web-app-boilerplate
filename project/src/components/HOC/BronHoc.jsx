import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



export default function (OriginalComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (this.props.auth) {
        return <Redirect to='/bron'/>;
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.auth) {
        return <Redirect to='/bron'/>;
      }
    }
    render() {
      if (!this.props.auth) {
        return <Redirect to='/login'/>;
      }
      return (<OriginalComponent {...this.props} {...this.state}/>);
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }



  return connect(mapStateToProps)(Authentication);
}
