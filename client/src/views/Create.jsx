import React, {useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

// eslint-disable-next-line
export default () => {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]); 

  const createAuthor = (author) => {
    axios.post('http://localhost:8001/api/authors/new', author)
    .then(res=> {
        console.log(res)
        navigate("/")
    })
    .catch(err=>{ console.log(err)
      const errorResponse = err.response.data.errors; 
      const errorArr = []; 
      for (const key of Object.keys(errorResponse)) { 
          errorArr.push(errorResponse[key].message)
      }
      setErrors(errorArr);
  });
}


  return (
    <div className="createPage">
      {errors.map((err, index) => <p style={{"color": "red"}} key={index}> {err} </p>)}
      <h1>Favorite Authors</h1>
      <h5><Link to='/'> Home </Link></h5>
      <h4 style={{"color": "rgb(107, 106, 106)"}}>Add a new author:</h4>

      <AuthorForm onSubmitProp={createAuthor} initialName="" initialGenre="" initialDesc="" />
    </div>
  );
}
