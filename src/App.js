import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])

  return (
    <div className="App">
        <form>
            <input type="text" placeholder="Назва поста"/>
            <input type="text" placeholder="Опис поста"/>
            <MyButton>Створити пост</MyButton>
        </form>
        <PostList posts={posts} title="Список постів про JS"/>
    </div>
  );
}

export default App;
