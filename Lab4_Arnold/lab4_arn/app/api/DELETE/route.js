export async function DELETE(request) {
    const {searchParams} = new URL(request.url);
    const idPub = searchParams.get('id');
    const commentairesResponse = await fetch(`http://localhost:3000/commentaires?idPub=${idPub}`);
    const commentairesData = await commentairesResponse.json();
    
    // Supprimez les commentaires un par un
    for (const commentaire of commentairesData) {
        await fetch(`http://localhost:3000/commentaires/${commentaire.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });
    }
    const response = await fetch(`http://localhost:3000/publications/${idPub}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
}
