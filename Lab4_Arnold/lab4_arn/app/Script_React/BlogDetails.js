"use client";
import React from 'react';
import Image from 'next/image';
import { obtenirPublication } from '../indexDb';

function BlogDetails({ publicationId }) {
  const [publication, setPublication] = React.useState({});
  React.useEffect(() => {
    async function fetchPublication() {
        try {
           
            const publicationFromDB = await obtenirPublication(publicationId);  // Récupère la publication depuis IndexedDB            
            const response = await  fetch(`http://localhost:3000/publications/${publicationId}`);
            const json = await response.json();
            setPublication(json);
            
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            const publicationFromDB = await obtenirPublication(publicationId); 
            setPublication(publicationFromDB);
        }
    }

    fetchPublication();
}, [publicationId]);

  return (
          
          <div className="container-fluid">
              <br/>
              <div className="row">
              <figure className="col-12 col-lg-12">
                  <Image src="/images/crypto.jpg" alt="crypto" className="banner" width={1960} height={200} />
                  <figcaption><h1 className="text-center">{publication.titre}</h1></figcaption>
              </figure>
              <br />
              <p className="col-12 col-lg-12">{publication.contenu}</p>
              <p className="col-12 col-lg-12">{publication.contenu}</p>
              <figure className="col-12 col-lg-12 text-center">
                  <Image src="/images/blog3.jpg" width={195} height={130} alt="communication" />
                  <figcaption>communication</figcaption>
              </figure>
              <p className="col-12 col-lg-12">{publication.contenu}</p>
              <p className="col-12 col-lg-12">{publication.contenu}</p>
              </div>
          
          </div>
  );
}

export default BlogDetails;
