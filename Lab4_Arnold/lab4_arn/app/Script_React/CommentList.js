"use client";
import React from 'react';
import Commentaire from './Comment';

function CommentList({ idPub }) {
    const [commentaires, setCommentaires] = React.useState([]);   

    React.useEffect(() => {
        fetch(`http://localhost:3000/commentaires?idPub=${idPub}`)
            .then(response => response.json())
            .then(json => {
                setCommentaires(json);
            })
            .catch(error => console.error('Erreur lors de la récupération des données de l\'API:', error));
    }, [idPub]);

    return (
        <div className="container-fluid">
            <div className="row">
                {commentaires.map(commentaire => (
                    <Commentaire key={commentaire.id} commentaire={commentaire.contenu} />
                ))}
            </div>
        </div>
    );
}

export default CommentList;
