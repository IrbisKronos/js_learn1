import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        // не змінюємо стан напряму, викликаємо ф-ю SetPost і передаємо туди новий масив куди
        // розгортаємо старий масив з вже існуючими постами і в кінець додаємо до нього новий
        setPost({title: '', body: ''})
    }

  return (
    <div className="App">
        <form>
            {/*Керований компонент*/}
            <MyInput
                value = {post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Назва поста"
            />
            {/*Некерований/Неконтрольований елемент*/}
            <MyInput
                value = {post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Опис поста"
            />
            <MyButton onClick={addNewPost}>Створити пост</MyButton>
        </form>
        <PostList posts={posts} title="Список постів про JS"/>
    </div>
  );
}

export default App;
