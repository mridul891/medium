import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from "./pages/Signin"
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import { Appbar } from './components/Appbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/" element={<Blogs />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App