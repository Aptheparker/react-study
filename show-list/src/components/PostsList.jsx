import Post from './Post';

import classes from './PostsList.module.css';

function PostsList(){
  return(
    <ul className={classes.posts}>
      <Post author="ap" body="React.js is awesome!" />
      <Post author="sp" body="Check out the full course!"/>
    </ul>
  )
}

export default PostsList;