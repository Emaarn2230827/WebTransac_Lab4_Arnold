export async function POST(request) {
    const {id, titre, auteur, contenu } = await request.json();
    const response = await fetch('http://localhost:3000/publications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id: id,
            titre: titre,
            auteur: auteur,
            contenu: contenu,
            datePublication: getCurrentDate()
        })
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
