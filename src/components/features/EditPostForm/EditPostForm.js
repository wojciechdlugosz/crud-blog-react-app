import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostById } from "../../../redux/postsRedux";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { postId } = useParams();
    const postData = useSelector((state) => getPostById(state, postId));

    const handleSubmit = (post) => {
        dispatch(editPost({ id: postData.id, ...post }));
        navigate('/');
    };

    if(!postData) return <Navigate to="/" />
    return (
        <>
        <PostForm action={handleSubmit} actionText="Edit post" {...postData} />
        </>
    );
};

export default EditPostForm;