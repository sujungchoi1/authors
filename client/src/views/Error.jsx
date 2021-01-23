import React from 'react';
import { Link } from '@reach/router';
// import AuthorForm from '../components/AuthorForm';

// eslint-disable-next-line
export default () => {

  return (
    <div className="errorPage">
      
      <h5>We're sorry, but we could not find the author you are looking for.</h5>
      <h5> Would you like to add this author to our database? </h5>
      <h3><Link to='/new'> Add an author</Link></h3>
      <h3><Link to='/'> Back to Main Page</Link></h3>

    </div>
  );
}