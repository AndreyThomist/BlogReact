import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container';
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Post = () => {
    const id = useParams().id;
    useEffect(() => {
        const fetchPostById = async () => {
          const response = await axios.get(`http://127.0.0.1:5000/api/post/${id}`)
          const data = response.data.post;
          console.log(data);
        }

        fetchPostById();
    },[id])
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                  <h2>POSTAGEM : {id} </h2>
            </Container>
        </React.Fragment>
    )
}

export default Post;