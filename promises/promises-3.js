//nested promises

const books = [
    {title: 'Book1',author: 'Author1',genre: 'Fiction',id:1},
    {title: 'Book2',author: 'Author2',genre: 'Sci-Fi',id:2},
    {title: 'Book3',author: 'Author3',genre: 'Math',id:3}
];

const authors =[
    {name: 'Author1',bio:'Great author'},
    {name: 'Author2',bio:'Good author'},
    {name: 'Author3',bio:'Extraordinary author'}
];

function getBook (id){
    return new Promise((resolve,reject)=>{
        const book = books.find(book=>book.id === id);
        if(book){
            resolve(book);
        }else{
            reject(Error('No book :('));
        };
    });
}

// getBook(1).then((book)=>{
//     console.log(book);
//     return getAuthor(book);
// }).catch((error)=>{
//     console.log(error);
// });//Works and returns book with id 1
// getBook(23).then((book)=>{
//     console.log(book);
// }).catch((error)=>{
//     console.log(error);
// });//fails because no book with id 23
function getAuthor(book){
    return new Promise((resolve,reject)=>{
        const author = authors.find(author=> author.name === book.author);
        if(author){
            book.author = author;
            resolve(book);
        }
        else{
            reject('Author not found! :(');
        }
    });
}
getBook(1).then((book)=>{
    return getAuthor(book);
}).then((book)=>{
    console.log(book);
}).catch((error)=>{
    console.log(error);
});