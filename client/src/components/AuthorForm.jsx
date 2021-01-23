import React, { useState } from 'react'
import axios from 'axios';
import {navigate, Link} from '@reach/router'

    // eslint-disable-next-line
export default (props) => {
    const { initialName, initialGenre, initialDesc, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(initialName); 
    const [desc, setDesc] = useState(initialDesc); 
    const [genre, setGenre] = useState(initialGenre); 
    // const [errors, setErrors] = useState([]);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        onSubmitProp({name, genre, desc});
        setName("");
    }

    return (

        <form className="formGroup" onSubmit={onSubmitHandler}>

            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                className="form-control" id="name" placeholder="ex) Ernest Hemingway" />

                <select onChange={(e)=>setGenre(e.target.value)} name="select" value={genre} >
                    <option value="essay" >essay</option>
                    <option value="fiction" >fiction</option>
                    <option value="memoir">memoir</option>
                    <option value="mystery">mystery</option>
                    <option value="sci-fi">sci-fi</option>
                    <option value="poetry">poetry</option>
                    <option value="crime/detective">crime/detective</option>
                    <option value="can't define">can't define</option>
                </select>
            </div>

            <div className="form-group">
                <label>Description:</label>
                <textarea 
                onChange={(e) => setDesc(e.target.value)}
                rows="4" cols="50" className="form-control" value={desc}></textarea>
            </div>
            <div>
                <button className="btn btn-primary"><Link style={{"color": "white"}} to='/'> Cancel </Link></button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>

    )
}

// backup
// import React, { useState } from 'react'
// import axios from 'axios';
// import {navigate, Link} from '@reach/router'

//     // eslint-disable-next-line
// export default () => {
//     //keep track of what is being typed via useState hook
//     const [name, setName] = useState(""); 
//     const [errors, setErrors] = useState([]);
//     //handler when the form is submitted
//     const onSubmitHandler = e => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.post('http://localhost:8001/api/authors/new', {name})
//             .then(res=> {
//                 console.log(res)
//                 navigate("/")
//             })
//             .catch(err=>{ console.log(err)
//                 const errorResponse = err.response.data.errors; 
//                 const errorArr = []; 
//                 for (const key of Object.keys(errorResponse)) { 
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 setErrors(errorArr);
//             });
//     }

//     return (

//         <form className="formGroup" onSubmit={onSubmitHandler}>

//             {errors.map((err, index) => <p style={{"color": "red"}} key={index}> {err} </p>)}

//             <div className="form-group">
//                 <label HtmlFor="name">Name:</label>
//                 <input type="text" 
//                 onChange={(e) => setName(e.target.value)} 
//                 value={name} 
//                 className="form-control" id="name" placeholder="ex) Ernest Hemingway" />
//             </div>
//             <div>
//                 <button class="btn btn-primary"><Link style={{"color": "white"}} to='/'> Cancel </Link></button>
//                 <button type="submit" class="btn btn-primary">Submit</button>
//             </div>
//         </form>

//     )
// }
