import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Categories = () => {
    const categories = useSelector(getAllCategories);

    return (
        <>
        <h2 className="my-3">All categories</h2>
        {categories.map(({ id, title }) => (
            <Link key={id} to={`/categories/${id}`} className="mx-1 py-1">
                <Button variant="primary">{title}</Button>
            </Link>                
        ))}
        </>
    );
};

export default Categories;