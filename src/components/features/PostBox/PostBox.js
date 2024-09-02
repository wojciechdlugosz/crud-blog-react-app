import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllPosts } from '../../../redux/postsRedux';

const PostBox = () => {

    const posts = useSelector(getAllPosts);

    return (
        <Row className="mx-1" xs={1} sm={2} md={3}>
        {posts.map(({ id, title, author, publishedDate, shortDescription }) => (
            <Card key={id}>
                <Card.Body>
                    <Card.Title className="mb-3">{title}</Card.Title>
                    <Card.Text className="mb-1"><b>Author: </b>{author}</Card.Text>
                    <Card.Text><b>Published: </b>{publishedDate}</Card.Text>
                    <Card.Text>{shortDescription}</Card.Text>
                    <Link to={`/post/${id}`}>
                        <Button variant="primary">Read more</Button>
                    </Link>                
                </Card.Body>
            </Card>        
        ))}
        </Row>
    );
};

export default PostBox;