import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';

import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publishedDate: '',
        shortDescription: '',
        content: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ id: shortid(), ...formData }));
        setFormData({
            title: '',
            author: '',
            publishedDate: '',
            shortDescription: '',
            content: '',
        });
        navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
        <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '40%' }}>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleInputChange} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter author" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleInputChange} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPublishedDate">
                <Form.Label>Published</Form.Label>
                <Form.Control 
                    type="date" 
                    placeholder="Enter date" 
                    name="publishedDate" 
                    value={formData.publishedDate} 
                    onChange={handleInputChange} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formShortDescription">
                <Form.Label>Short description</Form.Label>
                <Form.Control 
                    className="pb-5" 
                    as="textarea" 
                    placeholder="Leave a comment here" 
                    name="shortDescription" 
                    value={formData.shortDescription}
                    onChange={handleInputChange} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMainContent">
                <Form.Label>Main content</Form.Label>
                <Form.Control 
                    className="pb-5" 
                    as="textarea" 
                    placeholder="Leave a comment here" 
                    name="content"
                    value={formData.content} 
                    onChange={handleInputChange} 
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add post</Button>
        </Form>
        </>
    );
};

export default AddPostForm;