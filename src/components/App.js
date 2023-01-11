import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";


console.log(blogData);

function App() {
  return (
    <div className="app">
       <Header name={blogData.name}/>
       <About about={blogData.about} image={blogData.image}/>
       <ArticleList posts={blogData.posts}/>
    </div>
     
  );
}

export default App;
