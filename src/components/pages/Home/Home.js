import PostBox from "../../features/PostBox/PostBox";
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className="row my-3">
            <h2 className="col">All posts</h2>
            <Link to={`/post/add`} className="col d-flex justify-content-end text-decoration-none">
                <Button variant="outline-info">Add post</Button>
            </Link>                
        </div>
        <PostBox />
        </>
    );
};

export default Home;