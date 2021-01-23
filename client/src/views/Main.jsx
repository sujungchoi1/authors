import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import axios from 'axios';

// eslint-disable-next-line
export default () => {
    const [ authors, setAuthors ] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8001/api/authors")
            // .then(res=>setProducts(res.data.products)) if res.json({products: allProducts}) instead of getting it as an array from controller
            .then(res=>{
                setAuthors(res.data)
            })  
            .catch(err=>console.log("Error: ", err))     
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8001/api/authors/' + authorId)
            .then(res => {
                setAuthors(authors.filter(auth => auth._id !== authorId));
            })
            .catch(err=>console.log("Error: ", err))     
    }

    ////// CHECKBOX ///////
    const updateAuthor = (changedAuthor, id) => {
        setAuthors(authors.map(author => ( author._id === id ? changedAuthor : author)
        ));
      }

    const updateAPI = (data, id) => {
        axios.put(`http://localhost:8001/api/authors/edit/${id}`, data)
        .then(res => {
            console.log(res.data)
            updateAuthor(res.data, id);
        })
        .catch(err=>console.log(err.response));
    }
    
    const checkBoxHandler = (completed, id) => {
        updateAPI({completed: completed}, id);
        }
    ////////////////////////////////////

    return (

        <div className="mainPage">
            <h1>Favorite Authors</h1>

            <h4><Link to='/new'> Add an author! </Link></h4>
            <h5>We have quotes by:</h5>

            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th className="firstColumn" scope="col">Author</th>
                    <th className="secondColumn" scope="col">Options available</th>
                    </tr>
                </thead>
                <tbody>

                    {authors.map((value, idx)=>{
                    return <tr key={idx}>
                            <td className="authorName" key={idx}> 
                               <Link to={`/detail/${value._id}` }>{value.name}</Link>
                            </td>
                            <td>
                                <button type="button" className="btn btn-outline-success">
                                <Link to={`/edit/${value._id}`}>
                                <span style={{"color": "green"}}>Edit</span>
                                </Link> 

                                </button>
                                
                                <button onClick={(e)=>{deleteAuthor(value._id)}} 
                                type="button" className="btn btn-outline-warning">Delete</button>

                                <input 
                                type="checkbox" 
                                checked={value.completed}
                                onChange={e=>checkBoxHandler(e.target.checked, value._id)}>

                                </input>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}
