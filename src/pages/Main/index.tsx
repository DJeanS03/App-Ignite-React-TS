import './styles.css';
import { Comment } from './Comment/index.jsx';

import { format, formatDistanceToNow } from 'date-fns' /*biblioteca de data e hora*/ 
import ptBR from 'date-fns/locale/pt-BR' /* coloca data e hora em portugues */
import { ChangeEvent, FormEvent, useState } from 'react';

interface PostProps {
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };
    publishedAt: Date;
}

export function Main({author, publishedAt}: PostProps){
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true,})

    const [comments, setComments] = useState([
        'Muito legal seu post'
      ])

    const [newCommentText, setNewCommentText] = useState('')

    const isNewCommentEmpty = newCommentText.length == 0

    function createNewComment(event: FormEvent){
        event.preventDefault(); //evita o refresh da pagina   
        setComments([...comments, newCommentText]); //mantém os comentários antigos e add mais um
        setNewCommentText(''); //apaga o conteúdo da textarea após o submit    
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value) //pega o conteúdo da textarea
    }

    function deletedComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    return (
        <div className="main">
            <div className='header'>
                <div className="flex">
                    <img className='profile_photo avatar' src={author.avatarUrl} />
                    <div className="decription">
                        <strong className='name'>{author.name} </strong>
                        <span className='profession'>{author.role}</span>
                    </div>
                </div>
                <time className='time' title={publishedDateFormatted}>
                    {publishedDateRelativeNow}
                </time>
            </div>

            <div className="content">
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p className='tags'>
                    <a href="#">#novoprojeto</a>
                    <a href="">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form onSubmit={createNewComment} className='comment'>
                <strong className='comment_text'>Deixe seu feedback</strong>

                <textarea className='text_area'
                    name='textComment'
                    value={newCommentText}
                    placeholder='Deixe seu comentário aqui'
                    onChange={handleNewCommentChange}
                    required
                />

                <button className='commentButton' type='submit' disabled={isNewCommentEmpty} /* botão desabilitado qndo o textarea estiver vazio */> 
                    Publicar
                </button>
            </form>

             <div className='commentList'>
             {comments.map(comment => {
                return <Comment 
                    key={comment} 
                    content={comment} 
                    onDeletedComment = {deletedComment}
                />
             })}
             </div>
        </div>
    )
}