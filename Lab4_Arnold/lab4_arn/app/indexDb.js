"use client";

import publications from "../../db.json";
import commentaires from "../../db.json";

//nom de la bd
const DB_NAME = 'BdBlogs';
const DB_NAME2 = 'BdCommentaires';
const DB_VERSION = 1;
//nom des  tables
const OBJECT_STORE_NAME = 'publications';
const OBJECT_STORE_NAME2 = 'commentaires';

// Fonction pour initialiser la base de données IndexedDB
export async function initPublicationsIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
                const pub = db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id', autoIncrement: true });
                pub.createIndex('titre', 'titre', { unique: false });
                pub.createIndex('auteur', 'auteur', { unique: false });
                pub.createIndex('contenu', 'contenu', { unique: false });
                pub.createIndex('datePublication', 'datePublication', { unique: false });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            console.error('Erreur lors de l\'initialisation d\'IndexedDB :', event.target.error);
            reject(event.target.error);
        };
    });
}

// Fonction pour ajouter une publication
export async function ajouterPublication(publication) {
    const db = await initPublicationsIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

        const request = objectStore.add(publication);

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = (event) => {
            console.error('Erreur lors de l\'ajout de la publication :', event.target.error);
            reject(event.target.error);
        };
    });
}


// Fonction pour obtenir une publication par ID
export async function obtenirPublication(id) {
    const db = await initPublicationsIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(OBJECT_STORE_NAME, 'readonly');
        const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

        const request = objectStore.get(id);

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            console.error('Erreur lors de la récupération de la publication :', event.target.error);
            reject(event.target.error);
        };
    });
}

// Fonction pour obtenir toutes les publications
export async function obtenirToutesPublications() {
    const db = await initPublicationsIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(OBJECT_STORE_NAME, 'readonly');
        const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

        const request = objectStore.getAll();

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            console.error('Erreur lors de la récupération de toutes les publications :', event.target.error);
            reject(event.target.error);
        };
    });
}



// Initialisation des données de publications dans IndexedDB
export const initPubIndexedDB = async () => {
    const db = await initPublicationsIndexedDB();
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);
    objectStore.clear();
    const storedPublications = await obtenirToutesPublications();
    
    // Si la base de données est vide, ajouter les publications de db.json
    if (storedPublications.length === 0) {
        for (const publication of publications.publications) {
            await ajouterPublication(publication);
        }
    }
};

export async function initCommentairesIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open( DB_NAME2 , DB_VERSION);

        request.onupgradeneeded = (event) => {
            const bd = event.target.result;
            if (!bd.objectStoreNames.contains(OBJECT_STORE_NAME2)) {
                const com = bd.createObjectStore(OBJECT_STORE_NAME2, { keyPath: 'id', autoIncrement: true });
                com.createIndex('idPub', 'idPub', { unique: false });
                com.createIndex('contenu', 'contenu', { unique: false });
                com.createIndex('datePublication', 'datePublication', { unique: false });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            console.error('Erreur lors de l\'initialisation d\'IndexedDB :', event.target.error);
            reject(event.target.error);
        };
    });
}


// Fonction pour ajouter un commentaire
export async function ajouterCommentaire(commentaire) {
    const bd = await initCommentairesIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = bd.transaction(OBJECT_STORE_NAME2, 'readwrite');
        const objectStore = transaction.objectStore(OBJECT_STORE_NAME2);

        const request = objectStore.add(commentaire);

        request.onsuccess = () => {
            resolve();
        };
        request.onerror = (event) => {
            console.error('Erreur lors de l\'ajout du commentaire :', event.target.error);
            reject(event.target.error);
        };
    });
}
export async function obtenirTousCommentaires(idPub) {
    const bd = await initCommentairesIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = bd.transaction(OBJECT_STORE_NAME2, 'readonly');
        const objectStore = transaction.objectStore(OBJECT_STORE_NAME2);

        const index = objectStore.index('idPub');
        const request = index.getAll(idPub);

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            console.error('Erreur lors de la récupération de tous les commentaires :', event.target.error);
            reject(event.target.error);
        };
    });
}
// Fonction pour initialiser les commentaires de db.json dans IndexedDB
export const initComIndexedDB = async (idPub) => {
    const bd = await initCommentairesIndexedDB();
    const transaction = bd.transaction(OBJECT_STORE_NAME2, 'readwrite');
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME2);
    objectStore.clear();
    const commentairesFromDB = await obtenirTousCommentaires(idPub);

    // Si la base de données est vide, ajouter les commentaires de db.json
    if (commentairesFromDB.length === 0) {
        for (const commentaire of commentaires.commentaires) {
            await ajouterCommentaire(commentaire);
        }
    }
    
}
