import { getPostById } from "../../../redux/postsRedux";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = () => {
    const { postId } = useParams();
    const postData = useSelector((state) => getPostById(state, postId));

    const { title, id, author, publishedDate, shortDescription } = postData;

    if(!postData) return <Navigate to="/" />
    return (
        <Card className="border-0 mx-auto" style={{ maxWidth: '40%' }}>
            <div className="d-flex justify-content-between align-items-center">
                <Card.Title>{title}</Card.Title>
                <div>
                    <Link to={`/post/edit/${id}`}>
                        <Button variant="outline-info" className="mx-2">Edit</Button>
                    </Link>
                    <Link>
                        <Button variant="outline-danger">Delete</Button>
                    </Link>                        
                </div>
            </div>
            <Card.Text className="mb-1"><b>Author: </b>{author}</Card.Text>
            <Card.Text><b>Published: </b>{publishedDate}</Card.Text>
            <Card.Text>{shortDescription}</Card.Text>
        </Card>
    );
};

export default Post;