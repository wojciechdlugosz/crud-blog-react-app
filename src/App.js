import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import Categories from './components/pages/Categories/Categories';

import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:postId" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
