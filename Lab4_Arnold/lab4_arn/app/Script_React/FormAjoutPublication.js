"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 
function FormAjoutPublication() {
   
    const router = useRouter();

    // État local pour stocker les valeurs du formulaire
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [content, setContent] = React.useState('');

    // Fonction pour gérer la soumission du formulaire
   const handleSubmit = async (event) => {
        event.preventDefault();

        // Création de la publication
        const newPublication = {
            titre: title,
            auteur: author,
            contenu: content
        };

        // Envoi de la publication
        try {
            const response = await fetch('http://localhost:3000/publications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPublication)
            });

            // Redirection vers la page principale après l'ajout
            if (response.ok) {
                router.push('/');
            } else {
                console.error('Erreur lors de l\'envoi de la publication:', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la publication:', error);
        }
       
    };

    return(
        <>
            <h1> Ajouter une Publication</h1>
            <form onSubmit={handleSubmit} className="my-4 mx-auto"> 
                <div className="mb-3 align-items-center">
                    <label htmlFor="title" className="form-label">Titre :</label>
                    <input type="text" className="form-control custom-input" id="title" name="title" placeholder="Entrez le titre" required
                        value={title} onChange={(e) => setTitle(e.target.value)} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Auteur :</label>
                    <input type="text" className="form-control custom-input" id="author" name="author" placeholder="Entrez l'auteur" required
                        value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Contenu :</label>
                    <textarea id="content" className="form-control custom-input" name="content" rows="4" required
                        value={content} onChange={(e) => setContent(e.target.value)} /> 
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div id="confirmationDialog" title="Confirmer l'envoi"></div>
        </>
    );
}
export default FormAjoutPublication;
