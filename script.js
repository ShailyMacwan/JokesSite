let myJokes= [
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"Knock, knock.\"\n\"Who's there?\"\n\n[very long pause]\n\n\"Java.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 1,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "Why is Linux safe? Hackers peak through Windows only.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 2,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The generation of random numbers is too important to be left to chance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 3,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Christmas",
        "type": "twopart",
        "joke": "What do Santa's little helpers learn at school? The elf-abet!\n",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 4,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "I was struggling to figure out how lightning works, but then it struck me.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 5,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "joke": "When I was a kid, I made a really big sandcastle with my grandma. Unfortunately, that didn't impress anyone at the cremation...",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 6,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "I just saw my wife trip over and drop a basket full of ironed clothes. I watched it all unfold.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 7,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "ASCII silly question, get a silly ANSI.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 8,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "Why do programmers wear glasses?Because they need to C#",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 9,
        "safe": true,
        "lang": "en"
    }
]

let i = Math.floor(Math.random() * (myJokes.length - 1))
console.log(i)
joke.innerHTML = myJokes[i].joke



const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
    alert('you clicked me')
})
   