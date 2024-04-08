"use client";
import React from 'react';
import Commentaire from './Comment';
function AddComment({ idPub }) {
    const [commentaire, setCommentaire] = React.useState("");
    const [commentaires, setCommentaires] = React.useState([]);

    function handleName(event) {
        setCommentaire(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:3000/commentaires`, {
            method: 'POST',
            body: JSON.stringify({
                idPub: idPub,
                contenu: commentaire,
                datePublication: getCurrentDate()
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then(newComment => {
            // Actualiser l'état des commentaires en ajoutant le nouveau commentaire
            setCommentaires(prevCommentaires => [...prevCommentaires, newComment]);
            // Effacer le champ de commentaire
            setCommentaire("");
        })
        .catch(error => console.error('Erreur lors de l\'ajout du commentaire:', error));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <form className="form-group" onSubmit={handleSubmit}>
                    <label htmlFor="comment">Commentaires</label><br/><br/>
                    <textarea className="form-control" rows="5" value={commentaire} onChange={handleName} placeholder="Entrez votre commentaire..."></textarea><br/>
                    <p className="col-12 " align="right"><button type="submit" className="btn btn-primary" id="ajouterCommentaire">Submit</button></p>
                </form>
            </div>
            <div className="row">
                {commentaires.map(commentaire => (
                    <Commentaire key={commentaire.id} commentaire={commentaire.contenu} />
                ))}
            </div>
        </div>
    );
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
 export default AddComment;