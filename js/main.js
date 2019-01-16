// console.log('hi');

var form = document.querySelector('.nav--search'),
    search = document.querySelector('#search'),
    searchContainer = document.querySelector('.search-bg'),
    close = document.querySelector('.close'),
    filterMobile = document.querySelector('.filter'),
    body = document.querySelector('body'),
    filterBtn = document.querySelector('#filter'),
    bookmark = document.querySelector('.bookmark'),
    bookmarkList = document.querySelector('.bookmarklist'),
    likeResult = document.querySelector('.like span'),
    likeBtn = document.querySelector('.like'),
    time = document.querySelector('.time'),
    category = document.querySelector('.category'),
    tags = document.querySelector('.tags');

function like() {
    likes = Number(likeResult.textContent); //takes value from p span and converts it to a number
    if (likeBtn.classList.contains('liked')) {
        likes -= 1;
        likeBtn.classList.remove('liked');
    } else {
        likes += 1;
        likeBtn.classList.add('liked');
    }
    likeResult.textContent = likes;
}

function toggle() {
    this.classList.toggle('active');
}

function addBookmark() {
    bookmark.classList.toggle('active');
    bookmarkList.classList.toggle('active');
}

function searching() {
    searchContainer.classList.toggle('active');
}

function filter() {
    body.classList.add('active');
}

bookmark.addEventListener('click', function(){
    addBookmark();
});

likeBtn.addEventListener('click', like);
close.addEventListener('click', toggle);
filterBtn.addEventListener('click', filter);
search.addEventListener('click', searching);
time.addEventListener('click', toggle);
category.addEventListener('click', toggle);
tags.addEventListener('click', toggle);