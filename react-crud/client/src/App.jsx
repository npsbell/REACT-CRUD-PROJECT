import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import ViewPostPage from "./component/ViewPostPage/ViewPostPage";
import CreatePostPage from './component/CreatePostPage/CreatePostPage'
import EditPostPage from './component/EditPostPage/EditPostPage'

function App() {

   return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/products/create" element={<CreatePostPage />}/>
          <Route path="/products/view/:id" element={<ViewPostPage />}/>
          <Route path="/products/edit/:id" element={<EditPostPage />}/>
        </Routes>
      </Router>
    </div>
   )     
   }

 export default App;
