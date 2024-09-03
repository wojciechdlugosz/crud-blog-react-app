import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';

import { addPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (post) => {
        dispatch(addPost({ id: shortid(), ...post }));
        navigate('/');
    };

    return (
        <>
        <PostForm action={handleSubmit} actionText="Add post" />
        </>
    );
};

export default AddPostForm;