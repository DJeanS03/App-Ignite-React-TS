import './styles/global.css';
import './App.modules.css';
import { Header } from './pages/Header/index.jsx';
import { Sidebar } from './pages/Sidebar/index.jsx';
import { Main } from './pages/Main/index.jsx';

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: 'https://github.com/DJeanS03.png',
      name: 'Jean Victor',
      role: 'Desenvolvedor Front-End'
    },
    publishedAt: new Date ('2023-02-25 20:54:37'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className='wrapper'>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Main 
                key = {post.id}
                author = {post.author}
                publishedAt = {post.publishedAt}
              />
            )
            })}
        </main>
      </div>
    </div>
  )
} 