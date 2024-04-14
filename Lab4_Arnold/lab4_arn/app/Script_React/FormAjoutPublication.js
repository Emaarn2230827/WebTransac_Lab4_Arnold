
import React from 'react';
import addPublication from '../addPublication/addPubServer';
function FormAjoutPublication() {
   
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
                    <button type="submit"  className="btn btn-primary">Submit</button>                         
            </form>
        </>
    );
}

export default FormAjoutPublication;
