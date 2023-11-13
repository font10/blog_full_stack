import './App.css';
import { Routes, Route } from 'react-router-dom'
import { BlogDetails, Blogs, Home, BlogsByPlace, Auth } from './pages';
import { Layout } from './components'
import { route } from './models/router.model';

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path={ route.root.path } element={<Home />} />
        <Route path={ route.auth.path } element={<Auth />} />
        <Route path={ route.blogs.path } element={<Blogs />} />
        <Route path={`${route.details.path}/:id`} element={<BlogDetails />} />
        <Route path={`${route.blogsbyplace.path}/:place`} element={<BlogsByPlace />} />
      </Routes>
    </div>
  );
}

export default App;
