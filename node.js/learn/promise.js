const books = [
    {Kitap: 'Kitap1', Yazar:'Yazar1'},
    {Kitap: 'Kitap2', Yazar:'Yazar2'},
    {Kitap: 'Kitap3', Yazar:'Yazar3'}
]

const listBooks = (data=books) => {
    data.map(item => {
        console.log(item);
    })
}

const addBook = (item,data) => {
    const promise = new Promise((resolve,reject) => {
        data.push(item);
        resolve('Ekleme başarılı');
        reject('Naneyi yedin');
    });
    return promise;
}

addBook({Kitap:'Tutunamayanlar', Yazar:'Gürkan'},books)
    .then((value) => {
        console.log('Yeni liste');
        listBooks();
    })
    .catch((error) =>{
        console.log(error);
    });
