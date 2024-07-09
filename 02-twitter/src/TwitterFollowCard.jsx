import {useState} from 'react' 

function TwitterFollowCard ({formatUsername, userName, children}) {
    
    let [isFollowing, setIsFollowing] = useState(false)

    let buttonClassName = isFollowing 
    ? 'tw-followingCard-button is-following' 
    : 'tw-followingCard-button'
    let text = isFollowing ? 'Following' : 'Follow'
   
    
    let handleClick = () => { 
        setIsFollowing(!isFollowing)
    }



    return (
    <article className='tw-followingCard'>
        
        <headers className='tw-followingCard-header'>

        <img className='tw-followingCard-avatar' src={`https://unavatar.io/${userName}`}/>
        <div className='tw-followingCard-info'>
            <strong> {children} </strong>

            <span className='tw-followingCard-userName'>{formatUsername(userName)}</span>
        </div>

        </headers>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followingCard-text'>{text}</span>
            <span className='tw-followingCard-stopFollow'>Unfollow</span>
            </button>
           
        </aside>
    </article>)
}

export default TwitterFollowCard