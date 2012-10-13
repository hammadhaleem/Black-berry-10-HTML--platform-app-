function ready() {
         var ele = document.createElement("div");
         ele.innerHTML = "uuid: " + blackberry.identity.uuid;
        //document.documentElement.appendChild(ele);
      }
      window.addEventListener("load", function(e) {
         document.addEventListener("webworksready", ready);
      }, false);

      var img = document.createElement('img');
      img.ontouchstart=function(e) { 

            for(var i = 0; I < e. touches.length; i++)
            {
               var touch = touches[i];
               var x = touch.clientX;
               var y = touch.clientY;

               // do something
            } }

          

              function successCB(filePath) {
                blackberry.media.camera.close();
                // do something with filePath
              }

        

