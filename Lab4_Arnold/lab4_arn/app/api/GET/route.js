export async function GET(request) {

    const {searchParams} = new URL(request.url);
    const idPub = searchParams.get('id');
    if(idPub == null){
        const response = await fetch('http://localhost:3000/publications', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
    }
    else{
        const response = await fetch(`http://localhost:3000/publications?id=${idPub}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
}