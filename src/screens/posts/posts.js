import React, {useState,useEffect, useCallback} from 'react'
import Grid from '@material-ui/core/Grid';
import CardPost from '../../components/cardPost'
import Container from  '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'


const useStyles =  makeStyles({
    container:{
        marginTop:"3%"
    },
})
const Posts = () => {
    const styles = useStyles();
    const [posts,setPosts] = useState([])
    const [postCount,setPostCount] = useState(1)

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios(
              'http://127.0.0.1:5000/api/posts',
            );
       
            setPosts(result.data.posts);
            setPostCount(result.data.postCount)
          };
       
          fetchData();
    },[]);


    const fetchPostPerPage = async (page,value) => {
         const result = await axios(`http://127.0.0.1:5000/api/posts?page=${value}`);
         setPosts(result.data.posts);
         setPostCount(result.data.postCount)
    }

    return (
        <React.Fragment>
            <Container className={styles.container}>
            <Grid container spacing={1}>
                {posts.map(post => {
                   return <Grid key={post.id} item xs={12} sm={4}>
                       <CardPost id={post.id} title={post.title} image={post.image}  body={post.body}></CardPost>
                    </Grid>
                })}
            </Grid>
            </Container>
            <Container style={{marginTop:"3%",marginBottom:"3%"}}>
            <Pagination onChange={fetchPostPerPage} count={Math.ceil(postCount/10)} color="secondary" />
            </Container>
        </React.Fragment>
    )
}

export default Posts;