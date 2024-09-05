import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategoryById } from "../../../redux/categoriesRedux";
import PostBox from "../../features/PostBox/PostBox";

const CategoryPage = () => {
    const { categoryId } = useParams();
    const category = useSelector((state) => getCategoryById(state, categoryId));

    if(!category) return <Navigate to="/" />
    return (
        <>
        <h2 className="my-3">Category: {category.title}</h2>
        <PostBox categoryId={categoryId} />
        </>
    );
};

export default CategoryPage;