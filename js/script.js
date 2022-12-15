const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let container = document.getElementById('container');

posts.forEach((elem) => {
    let array_created = elem.created.split('-');
    let date_italy = `${array_created[2]}-${array_created[1]}-${array_created[0]}`;

    let image;

    if(elem.author.image == null){
        image = textFallback(elem.author.name);
    }
    else{
        image = `<img class="profile-pic" src="${elem.author.image}" alt="${elem.author.name}">`
    }

    container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${image}                 
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${elem.author.name}</div>
                        <div class="post-meta__time">${date_italy}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${elem.content}</div>
            <div class="post__image">
                <img src="${elem.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${elem.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${elem.id}" class="js-likes-counter">${elem.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
});

let likes_btn = document.getElementsByClassName('js-like-button');

let array_likes_clicked = [];

for(let i = 0; i < likes_btn.length; i++){

    likes_btn[i].addEventListener('click', function(){

        const postId = this.dataset.postid;
        const likes = document.getElementById(`like-counter-${postId}`);
        const likesNumber = parseInt(likes.innerText);

        if(!(array_likes_clicked.includes(postId))){
            likes.innerText = likesNumber+1;
            array_likes_clicked.push(postId);
            this.classList.add('clicked');
        }
        else{
            this.classList.remove('clicked');
            likes.innerText = likesNumber-1;
            let array_remove_likes_clicked = array_likes_clicked.filter((elem) => {
                if(array_likes_clicked.includes(elem))
                    array_likes_clicked.splice(elem,1)
            });
            array_likes_clicked = array_remove_likes_clicked;
        }
    })
    
}

function textFallback(name){
    const array_name = name.split(' ');
    name = `<h1 class="profile-pic color-black">${array_name[0][0]}${array_name[1][0]}</h1>`
    return name;
}