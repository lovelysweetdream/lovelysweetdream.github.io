function quoteGenerator() {

    var quotes = [
        "This website only exists when you look at it.",
        "The Quick Brown Fox Jumps Over The Lazy Dog",
        "Have a Lovely Sweet Dream",
        "in Life, the Sensuous Dream",
        "in Limbo, the Silent Dream",
        "in Logic, the Symbolic Dream",
        "in Laughter, the Spiritual Dream", 
        "in Lunacy, the Savage Dream", 
        "in Leisure, the Sonorous Dream",
        "in Linking, the Sapient Dream",
        "Working... please wait...",
        "My Nice Mother Long Pond Lots Kill Jack Key",
        "The New Jersey Has The Long President The New President",
        "im typing this with a brke keybard",
        "Get me out of this thing!",
        "Nobody else but you",
        "Stop making that big face!",
        "Frontier Psychiatrist!",
        "I wanna dance, wanna fly, wanna unicorn!",
        "I want things to be beautiful.",
        "Hello my friend",
        "What Would I Want? Sky",
        "There's a Sun Around the Bend",
        "You can have so much fun in this house!",
        "Why don't you try refreshing the page?",
    ];

    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }

quoteGenerator();

const audioClipPaths = [
        "squeak.mp3",
        "sqreak.mp3",
        "shmeak.mp3",
        "squee.mp3"
    ]; 
	 
    function playAudio() {
       let index = Math.floor(Math.random() * 4);
       let audioClip = audioClipPaths[index]
      
       new Audio(audioClip).play();
     }