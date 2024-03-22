import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post;


    const navigate  = useNavigate();


    const postStyle={
        border:'2px solid blue',
        padding:'5px',
        borderRadius:'15px'
    }

    const handleShowDetail = () =>{
 
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h3>Post of id:{id}</h3>
            <p>{title} </p>
       <Link to = {`/post/${id}`}>Post Details</Link>
       <Link to= {`/post/${id}`}>
       <button>Click me</button></Link>
       <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;