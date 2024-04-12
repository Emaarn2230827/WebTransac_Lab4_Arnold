export async function PUT(request) {
  
    const {searchParams} = new URL(request.url);
    const idPub = searchParams.get('id');
    const {titre, auteur, contenu, datePublication } = await request.json(); 

    // Requête HTTP PUT pour mettre à jour la publication
    const response = await fetch(`http://localhost:3000/publications/${idPub}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           titre,
           auteur,
           contenu,
           datePublication
        }),
    });

    // Récupérer la réponse JSON de la requête
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
}
