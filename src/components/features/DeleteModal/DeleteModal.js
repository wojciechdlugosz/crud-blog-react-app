import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';

import { removePost } from '../../../redux/postsRedux';

const DeleteModal = ({ id, showModal, handleClose }) => {

    const dispatch = useDispatch();

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removePost(id));
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>This operation will completly remove this post from app</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Cancel</Button>
                <Button onClick={handleRemove} variant="danger">Remove</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;