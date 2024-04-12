
import React from 'react';
import { revalidatePath } from 'next/cache';

function FormAjoutPublication() {

    async function addPublication(formData) {
        "use server";
        const title = formData.get('title');
        const author = formData.get('author');
        const content = formData.get('content');
        await fetch('http://localhost:3000/publications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titre: title,
                auteur: author,
                contenu: content,
                datePublication: getCurrentDate()
            })
        });
       revalidatePath('/');
     // comment faire la redirection vers la page principale
    }

    return(
        <>
            <h1> Ajouter une Publication</h1>
            <form  className="my-4 mx-auto" action={addPublication}> 
                <div className="mb-3 align-items-center">
                    <label htmlFor="title" className="form-label">Titre :</label>
                    <input type="text" className="form-control custom-input" id="title" name="title" placeholder="Entrez le titre" required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Auteur :</label>
                    <input type="text" className="form-control custom-input" id="author" name="author" placeholder="Entrez l'auteur" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Contenu :</label>
                    <textarea id="content" className="form-control custom-input" name="content" rows="4" required/> 
                </div>              
                    <button type="submit" className="btn btn-primary">Submit</button>                         
            </form>
        </>
    );
}
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
export default FormAjoutPublication;
