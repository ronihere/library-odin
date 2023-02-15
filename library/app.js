let book_name ='';
let book_author = ''; 
let book_pages = 0;
let book_read = false;
let table_body = document.querySelector('tbody');


let books = [];

// let b1 = new book("Moogly", "DK", 999 , true);

function book(book_name,book_author,book_pages,book_read) {
    this.book_name = book_name;
    this.book_author = book_author;
    this.book_pages = book_pages;
    this.book_read = book_read;
    addBookTolibrary(this);
}

function addBookTolibrary(book) {
    books.push(book);
    displayTable(book);
   
}

function displayTable(book) {
   
        let newrow = document.createElement('tr');
        for (j = 0; j <= 4; j++){
            let newcell = document.createElement("td");
            if (j == 0) newcell.textContent = book.book_name;
            else if (j == 1) newcell.textContent = book.book_author;
            else if (j == 2) newcell.textContent = book.book_pages;
            else if (j == 3) newcell.textContent = book.book_read;
            else if (j==4) {
                let button_del = document.createElement('button');
                button_del.classList.add('btn');
                button_del.textContent = 'del';
                button_del.addEventListener('click', function () {
                    let tr_element = button_del.parentNode.parentNode;
                    table_body.removeChild(tr_element);
                });
                newcell.appendChild(button_del);
            } 
            newrow.appendChild(newcell);
        }
        table_body.appendChild(newrow);
}





function getBookDetails() {
   book_name = document.querySelector('input[name="name"]').value;
   book_author = document.querySelector('input[name="author"]').value;
   book_pages = document.querySelector('input[name="pages"]').value;
//    console.log(book_read + " " + book_name);
    
   let b2 = new book(book_name, book_author, book_pages, book_read);
    // let demo = new book("Moogly", "DK", 999, true);
}
function checkboxValue() {
  book_read = true;
}


