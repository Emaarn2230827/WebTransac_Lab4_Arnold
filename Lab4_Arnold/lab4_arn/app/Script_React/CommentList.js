"use client";
import React, { useState, useEffect } from 'react';
import Commentaire from './Comment';

function CommentList({ idPub }) {
    const [commentaires, setCommentaires] = useState([]);   
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/commentaires?idPub=${idPub}`);
            const data = await response.json();
            setCommentaires(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API:', error);
        }
    };
    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            fetchData(); // Appel de la fonction fetchData chaque seconde
        }, 1000);

        // Nettoyage de l'intervalle lors du démontage du composant
        return () => {
            clearInterval(intervalId);
            setCommentaires([]);
        }
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
