import './styles.css';

export function Sidebar(){
    return(
        <div className='sidebar'>
            <img className='cover' src="https://images.unsplash.com/photo-1493551511613-abc8320c265e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
            
            <div className="profile">
                <img className='avatar' src="https://github.com/DJeanS03.png"/>

                <strong className='name'>Jean Victor</strong>
                <span className='profession'>Web Developer</span>
            </div>     
            <footer>
                <div className="edit_profile flex"> 
                    <a className='edit_profile_button flex' href="#"> 
                        <i className='bx bx-edit-alt icon'></i>  
                        Editar seu perfil
                    </a>
                </div>
            </footer>
        </div>
    )
}