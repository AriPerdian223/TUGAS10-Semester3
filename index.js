const { response } = require("express");

const mahasiswaNim = '20220040072' ;
const updatedData = {
    nama : 'ARI PERDIAN',
    gender : 'L',
    prodi : 'TI',
    alamat : 'Jl. Bhayangkara'
};

fetch(`http://localhost : 3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));