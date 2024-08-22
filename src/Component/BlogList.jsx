import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postNewest } from '../APIRequest/APIRequest';
import Loader from './Loader';

const BlogList = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await postNewest();
            setBlogs(data);
        } )()
    }
    , []);

   
        if(blogs === null) {
            <Loader/>
        }
         else {
            return(
                <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        blogs.map((item, index) => {
                            return (
                                <Link key={index} to={"/details/"+item.id} className='card w-100 glass'>
                    <figure><img src={item.img} alt={item.title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.short}</p>
                    </div>
                    </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
            )
        }
        

    
};

export default BlogList;