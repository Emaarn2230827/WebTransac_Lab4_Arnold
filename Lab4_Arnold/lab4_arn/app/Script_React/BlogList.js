"use client";
import React from 'react';
import BlogCard from './BlogCard';    
function BlogList() {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/publications')
            .then(response => response.json())
            .then(json => {
                setPublications(json);
            })
            .catch(error => console.error('Erreur lors de la récupération des données de l\'API:', error));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row align-items-center" id="blogContainer">
                {publications.map(pub => (
                    <BlogCard id={pub.id} titre={pub.titre} contenu={pub.contenu} />
                ))}
            </div>
        </div>
    );
}

export default BlogList;