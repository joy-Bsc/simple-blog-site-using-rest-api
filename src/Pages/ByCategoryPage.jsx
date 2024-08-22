import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../APIRequest/APIRequest';
import Layout from '../Layout/Layout';
import Loader from '../Component/Loader';
import BlogList from '../Component/BlogList';

const ByCategoryPage = () => {
    let {categoryID}= useParams();
    let [category, setCategory] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await postByCategory(categoryID);
            setCategory(data);
        }
        )()
    }
    , [categoryID]);
    return (
        <Layout>
            {category === null ? <Loader/> :<BlogList blogs={category}/>}
        </Layout>
    );
};

export default ByCategoryPage;