import React from 'react'


    export default async function addPublication(formData) {
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
    }
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


