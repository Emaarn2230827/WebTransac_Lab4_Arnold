"use client";

import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { initPubIndexedDB, obtenirToutesPublications } from '../indexDb';

function BlogList() {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        async function fetchPublications() {
            try {
                            
                // Récupère les publications à partir du serveur
                const response = await fetch('http://localhost:3000/publications');
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou serveur indisponible');
                }
                
                const json = await response.json();
                setPublications(json);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du serveur:', error);
                 // Initialisation des données de publications
                await initPubIndexedDB();
                // Récupère les publications à partir de IndexedDB si le serveur est indisponible
                const publicationsFromDB = await obtenirToutesPublications();
                setPublications(publicationsFromDB);
            }
        }

        // Appelle la fonction pour récupérer les publications
        fetchPublications();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row align-items-center" id="blogContainer">
                {publications.map(pub => (
                    <BlogCard key={pub.id} id={pub.id} titre={pub.titre} contenu={pub.contenu} />
                ))}
            </div>
        </div>
    );
}

export default BlogList;
