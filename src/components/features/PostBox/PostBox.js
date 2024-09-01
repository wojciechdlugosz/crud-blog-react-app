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
        {posts.map((post) => (
            <Card key={post.id}>
                <Card.Body>
                    <Card.Title className="mb-3">{post.title}</Card.Title>
                    <Card.Text className="mb-1"><b>Author: </b>{post.author}</Card.Text>
                    <Card.Text><b>Published: </b>{post.publishedDate}</Card.Text>
                    <Card.Text>{post.shortDescription}</Card.Text>
                    <Link to={`/post/${post.id}`}>
                        <Button variant="primary">Read more</Button>
                    </Link>                
                </Card.Body>
            </Card>        
        ))}
        </Row>
    );
};

export default PostBox;