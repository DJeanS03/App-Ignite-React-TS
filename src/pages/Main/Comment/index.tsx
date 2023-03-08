import { useState } from 'react';
import './styles.css';

interface CommentProps {
    content: string;
    onDeletedComment: (comment: string) => void;
}

export function Comment({content, onDeletedComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0);


    function handleLikeComment(){  //adiciona mais likes ao clicar
        setLikeCount((likes) => {
            return likes + 1;
        })
    }

    function deletedComment(){
        onDeletedComment(content)
    }
    return(
        <div>
            <div className="comment_content ">   
                <img className='profile_photo profile_photo' src="https://github.com/Diego3g.png"/>        
                <div className="comment_box">
                    <div className="comment_header">
                        <div className="comment_decription">
                            <strong className='name'>Devon Lane</strong>   
                                <time className='time' title='01/03/2023 às 08:42' dateTime='2023-03-01 08:42:57'>Cerca de 2h atrás</time>    
                        </div>
                        <i className='bx bxs-trash trash_icon' onClick={deletedComment}></i>
                    </div>
                    <div className='comment_text'>
                        {/* <p>Muito bom Devon, parabéns!! 👏👏</p> */}
                        <p>{content}</p>
                    </div>
                </div>
            </div>
            <div className="footer" onClick={handleLikeComment}>
                <i className='bx bx-like like'></i><p>Aplaudir</p>
                <span className='number'>{likeCount}</span>
            </div>  
         </div>       
    )
} 
