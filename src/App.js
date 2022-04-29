import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelectX from "./components/UI/select/MySelectX";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'ФDescription'},
        {id: 2, title: 'МJavascript 2', body: 'УDescription'},
        {id: 3, title: 'СJavascript 3', body: 'МDescription'},
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        console.log('Спрацювала ф-я getSortedPost')
        if(selectedSort){
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;

    }, [selectedSort, posts])

    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

    }, [searchQuery, sortedPosts])

    // ф-я на вхід очикуватиме новий створений пост (newPost). Його ми будемо передавати в компоненті PostForm (setPost)
    // і все що ми робимо - змінюємо стан: розгортаємо старий масив і в кінці додаюмо новий пост
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Отримаємо post з дочірнього елемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    // - <PostForm create={createPost}/> передаємо в наш компонент ф-ю зворотнього виклика. Сам props назвимо create,
    // а ф-ю - createPost
    // - removePost передаємо без дужок, як посилання, бо якщо передати з дужками, то ф-я просто викличеться
    // - "Постів не знайдено" - умовне відображення, в разі якщо постів нема. Виконується завдяки тернарному оператору
  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Пошук..."
            />
            <MySelectX
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортування"
                options={[
                    {value: 'title', name: 'По назві'},
                    {value: 'body', name: 'По опису'},
                ]}
            />
        </div>
        {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPost} title="Список постів про JS"/>
        :
            <h2 style={{textAlign: 'center'}}>
                Постів не знайдено
            </h2>
        }
    </div>
  )
}

export default App;