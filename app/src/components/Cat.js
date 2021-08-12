import React, { useEffect } from 'react';
import { getCat, fetchFail } from '../actions/index.js';
import { connect } from 'react-redux';

const Cat = (props) => {
  const { cat, isFetching, error } = props;

  useEffect(() => {
    props.getCat();
  }, []);

  if (error) {
    return <h2>error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching a cat picture...</h2>;
  }

  const handleClick = () => {
    props.getCat();
  }

  return (
    <>
      <div className="content">
        <h2>A cat</h2>
        <button onClick={handleClick}>Get new picture</button>
        <img src={cat} alt=""></img>
        {console.log("a cat:", cat)}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getCat, fetchFail })(Cat);