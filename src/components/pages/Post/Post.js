import { getPostById } from "../../../redux/postsRedux";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DeleteModal from "../../features/DeleteModal/DeleteModal";

const Post = () => {
    const { postId } = useParams();
    const postData = useSelector((state) => getPostById(state, postId));

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true);
    };

    if(!postData) return <Navigate to="/" />
    return (
        <>
        <Card className="border-0 mx-auto" style={{ maxWidth: '40%' }}>
            <div className="d-flex justify-content-between align-items-center">
            <Card.Title>{postData.title}</Card.Title>
                <div>
                    <Link to={`/post/edit/${postData.id}`}>
                        <Button variant="outline-info" className="mx-2">Edit</Button>
                    </Link>
                    <Link>
                        <Button onClick={handleShow} variant="outline-danger">Delete</Button>
                    </Link>                        
                </div>
            </div>
            <Card.Text className="mb-1"><b>Author: </b>{postData.author}</Card.Text>
            <Card.Text><b>Published: </b>{postData.publishedDate}</Card.Text>
            <Card.Text>{postData.shortDescription}</Card.Text>
            <Card.Text>{postData.content}</Card.Text>
        </Card>

        <DeleteModal showModal={showModal} handleClose={() => setShowModal(false)} id={postData.id} />
        </>
    );
};

export default Post;