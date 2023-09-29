import './App.css';
import { Routes, Route } from 'react-router-dom'
import { BlogDetails, Create, Home, Auth, UpdatedBlog } from './pages';
import { Layout } from './components'
import { route } from './models/router.model';


function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path={ route.root.path } element={<Home />} />
        <Route path={ route.auth.path } element={<Auth />} />
        <Route path={ route.create.path } element={<Create />} />
        <Route path={`${route.details.path}/:id`} element={<BlogDetails />} />
        <Route path={ route.update.path } element={<UpdatedBlog />} />
      </Routes>
    </div>
  );
}

export default App;
