import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import BlogForm from './pages/BlogForm';
import ProtectedRoute from './utils/ProtectedRoute';
import AllBlogs from './pages/AllBlogs';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/upload" element={
          <ProtectedRoute>
            <BlogForm />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

