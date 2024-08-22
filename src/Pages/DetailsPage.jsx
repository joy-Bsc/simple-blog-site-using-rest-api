import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postDetails } from '../APIRequest/APIRequest';
import Layout from '../Layout/Layout';
import Loader from '../Component/Loader';
import BlogList from '../Component/BlogList';

const DetailsPage = () => {
    let {postID}= useParams();
    let [post, setPost] = useState(null);
    useEffect(() => {
        (async () => {
            const data = await postDetails(postID);
            setPost(data);
        }
        )()
    } , [postID]);
    

    return (
        <Layout>
            {post === null ? <Loader/> :<BlogList blogs={post}/>}
        </Layout>
    );
};

export default DetailsPage;