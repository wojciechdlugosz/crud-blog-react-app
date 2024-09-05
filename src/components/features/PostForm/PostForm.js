import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content })
        }
    };

    return (
        <Form onSubmit={validate(handleSubmit)} className="mx-auto" style={{ maxWidth: '40%' }}>
        <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control 
                {...register("title", { required: true, minLength: 3 })}
                type="text" 
                placeholder="Enter title" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and must contain more than 3 letters</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
                {...register("author", { required: true, minLength: 3 })} 
                type="text" 
                placeholder="Enter author" 
                value={author}
                onChange={e => setAuthor(e.target.value)} 
            />
            {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and must contain more than 3 letters</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPublishedDate">
            <Form.Label>Published</Form.Label>
            <DatePicker 
                name="publishedDate" 
                selected={publishedDate}
                onChange={(date) => setPublishedDate(date)} 
            />
            {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formShortDescription">
            <Form.Label>Short description</Form.Label>
            <Form.Control 
                {...register("shortDescription", { required: true, minLength: 20 })}
                className="pb-5" 
                as="textarea" 
                placeholder="Leave a comment here" 
                value={shortDescription}
                onChange={e => setShortDescription(e.target.value)} 
            />
            {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required and must contain more than 20 letters</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMainContent">
            <Form.Label>Main content</Form.Label>
            <ReactQuill
                theme="snow" 
                placeholder="Leave a comment here" 
                name="content"
                value={content} 
                onChange={setContent} 
            />
            {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
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
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
};

export default PostForm;