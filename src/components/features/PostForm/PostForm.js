import PropTypes from 'prop-types';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break;
            case 'publishedDate':
                setPublishedDate(value);
                break;
            case 'shortDescription':
                setShortDescription(value);
                break;
            case 'content':
                setContent(value);
                break;
            default:
                break;
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '40%' }}>
        <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter title" 
                name="title" 
                value={title}
                onChange={handleInputChange} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter author" 
                name="author" 
                value={author}
                onChange={handleInputChange} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPublishedDate">
            <Form.Label>Published</Form.Label>
            <Form.Control 
                type="date" 
                placeholder="Enter date" 
                name="publishedDate" 
                value={publishedDate}
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
                value={shortDescription}
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
                value={content} 
                onChange={handleInputChange} 
            />
        </Form.Group>
        <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.instanceOf(Date),
    shortDescription: PropTypes.string,
    content: PropTypes.string,
};

export default PostForm;