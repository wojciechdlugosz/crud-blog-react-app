import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from 'react-redux';

import Card from 'react-bootstrap/Card';

const Categories = () => {
    const categories = useSelector(getAllCategories);

    return (
        <>
        <h2>All categories</h2>
        {categories.map((category) => (
            <Card key={category.id} style={{ maxWidth: '40%' }} className="my-2 border-0 mt-3">
                <Card.Link className="text-decoration-none fs-5">{category.title}</Card.Link>
            </Card>
        ))}
        </>
    );
};

export default Categories;