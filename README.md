# 99 verhalen website


# Javascript
## Micro interacties

Voor de micro interacties heb ik 2 functies voor gemaakt, de eerste functie haalt de waarde op en zet deze om in een getal. Vervolgens check ik of de button waar ik op geklikt heb, de klas 'liked' heeft zoniet dan telt de functie er 1 bij en anders haalt de functie 1 eraf. En dit zet de functie weer in de code.

```javascript

function like() {
    likes = Number(likeResult.textContent); 
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

Dit is een simpele toggle functie, waarmee ik aangeef dat de knop waarop wordt geklikt een klas 'active' krijgt zodat ik die kan stijlen.
```javascript

function toggle() {
    this.classList.toggle('active');
}

```


Hieronder is een stukje voor de interactie van het verhaal. De functie nextSentence() pakt alle zinnen uit de sentencesContainer, hierin zitten de zinnen van het eerste paragraaf van het verhaal. Vervolgens pak ik alle zinnen met de klas .sentence--active hiermee check ik of ze al getoond zijn. En als laatst geef ik een variabel aan de eerste zin.

In de if statement check ik of de zin al een keer is getoond/geweest, zo nee maak dan de zin inactief. En laat dan de eerst volgende zien.
```javascript

function nextSentence() {

    var paragraphs = document.querySelectorAll('.paragraph__sentence'),
        paragraphActive = document.querySelector('.sentence--active'),
        current = paragraphs[0];

    if (paragraphActive.classList.contains('show')) {
        if (paragraphActive.classList.contains('sentence--last')) {
            fullpage_api.moveTo('secondPage');
        } else {
            paragraphActive.classList.remove('sentence--active', 'show');
            sentencesContainer.appendChild(current);
        }
    } else {
        current.classList.add('sentence--active', 'show');
        showParagraph(currentParagraph);
    }
}

next.addEventListener('click', nextSentence);
```