const url = 'https://crudcrud.com/api/f3c33c54191f4a91bfec92c44311783c/DVD';

export async function updateDVD(DVD) {
    await fetch(`${url}/${DVD._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DVD)
    })
}

export async function createDVD(DVD) {
    console.log('DVD to create', JSON.stringify(DVD))
    try {
   const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DVD)
    });
    const data = response.json();
    console.log('create data', data);
    } catch (err) {
        console.log(`error when creating DVD: ${err}`)
    }
}
   
   export async function deleteDVD(id) {
       await fetch( `${url}/${id}`, {
           method: 'DELETE',
           HEADERS: {
               'Content-Type' : 'application/json'
           }
       });
   }

export async function getDVD() {
    // use fetch to GET from `url` endpoint
    const data = await fetch(`${url}`);
    return data.json();
}