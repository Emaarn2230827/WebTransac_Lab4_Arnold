

import React from "react";
import Header from "../../Script_React/Header";
import Footer from "../../Script_React/Footer";
import BlogDetails from "../../Script_React/BlogDetails";
import AddComment from "../../Script_React/AddComment";
import CommentList from "../../Script_React/CommentList";
export default function BlogPost({params})
{
    return  (   
    <>
           <Header />
           <BlogDetails publicationId={params.id}/>
           <AddComment idPub={params.id} /> 
           <CommentList idPub={params.id}   />
           <Footer />
        
    </>);
}

