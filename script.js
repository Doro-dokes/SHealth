
        var video = document.getElementById('video');
        var source = document.createElement('source');
        
        
        function changeVid(path) {
        source.setAttribute('src', 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4');
        
        video.appendChild(source);
        video.play();
        
        }
    