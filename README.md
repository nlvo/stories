# 99 verhalen website

![](name-of-giphy.gif)

CSS/Sass
======
## Mediaqueries


# Javascript
## Micro interacties

```javascript

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

```