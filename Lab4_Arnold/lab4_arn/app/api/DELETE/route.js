export async function DELETE(request) {
    const {searchParams} = new URL(request.url);
    const idPub = searchParams.get('id');
    const response = await fetch(`http://localhost:3000/publications/${idPub}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
}
