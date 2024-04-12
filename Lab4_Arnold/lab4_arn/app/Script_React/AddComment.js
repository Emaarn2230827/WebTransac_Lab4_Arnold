
import React from 'react';
function AddComment({ idPub }) { 
    async function addCommemt(formData) {    
     
        "use server";
        const coment = formData.get('comment') ;
       await fetch('http://localhost:3000/commentaires', {
            method: 'POST',
            body: JSON.stringify({
                idPub: idPub,
                contenu: coment,
                datePublication: getCurrentDate()
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <form className="form-group"  action={addCommemt}>
                    <label htmlFor="comment">Commentaires</label><br/><br/>
                    <textarea className="form-control" name ="comment" id="com" rows="5"   placeholder="Entrez votre commentaire..."></textarea><br/>
                    <p className="col-12 " align="right"><button type="submit" className="btn btn-primary" id="ajouterCommentaire">Submit</button></p>
                </form>
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