import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

// eslint-disable-next-line
export default (props) => {
    // for GET request
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8001/api/authors/${props.id}`)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            {loaded && (
            <div>
            <h1 style={{"marginBottom":"20px"}}>{author.name}</h1>
            <h4>Genre: {author.genre}</h4>
            <h4>Notes: {author.desc}</h4>
            {/* <h4>Description: {author.description}</h4> */}
            <div className="edit_delete">
                <h5><Link to={"/edit/" + author._id }>EDIT</Link></h5>

            </div>

            <h5><Link to='/'> Back to Main Page </Link></h5>
            </div>
            )}
        </div>
    )
}
