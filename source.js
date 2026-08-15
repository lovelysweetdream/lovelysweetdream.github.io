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
