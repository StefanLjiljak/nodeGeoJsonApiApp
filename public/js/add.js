const storeForm = document.querySelector('#store-form');
const storeId = document.querySelector('#store-id');
const storeAddress = document.querySelector('#store-address');

// Send POST to API to add store
async function addStore(e) {
    e.preventDefault();

    if (storeId.value === '' || storeAddress.value === '') {
        alert('Please fill in fields')
    }

    const sendBody = {
        storeId: storeId.value,
        address: storeAddress.value
    }

    try {
        const res = await fetch('/api/v1/stores', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(sendBody)
        })

        if (res.status === 400) {
            throw Error('Store already exists')
        }

        alert('Store added')
        window.location.href = window.location.href
    } catch (err) {
        alert(err)
        return
    }
}

storeForm.addEventListener('submit', addStore);