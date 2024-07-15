import PostList from ".././components/PostList";
import { Outlet } from "react-router-dom";


// import ".././App.css";

function Posts() {
  return (
    <>
    <Outlet/>
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async  function loader(){
  
  const response = await fetch("http://Localhost:8080/posts"); 
      const resData = await response.json();
      return resData.posts;
}