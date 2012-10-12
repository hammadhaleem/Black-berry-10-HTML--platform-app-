function ready() {
         var ele = document.createElement("div");
         ele.innerHTML = "uuid: " + blackberry.identity.uuid;
         document.documentElement.appendChild(ele);
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
}

function takePic() {
  try {
    blackberry.media.camera.takePic(successCB);
  } catch(e) {
    alert("Error in supported: " + e);
  }
}

function successCB(filePath) {
  blackberry.media.camera.close();
  // do something with filePath
}

function at(){

 alert ("hello ");
  alert(event.target); 

  takepic();

}


function uploadSuccess(result) {
  alert("Upload was successful");
  console.log("Bytes sent: " + result.bytesSent);
  console.log("Response code: " + result.responseCode);
  console.log("Response: " + result.response);
}

function uploadError(result) {
  alert("Upload failed");
  console.log("Error code: " + result.code);
  console.log("Source: " + result.source);
  console.log("Target: " + result.target);
  console.log("HTTP Status: " + result.https_status);
}

function fileUpload() {
  var parameters, options;
  try {
    parameters = { app : "webworks" };
    options = {
      fileKey : "file",
      fileName : "blackberry.jpg",
      mimeType : "image/jpeg",
      params : parameters,
      chunkedMode : true,
      chunkSize : 1024
    };
    blackberry.io.filetransfer.upload("/accounts/1000/shared/camera/image_123.jpg", "http://www.blackberry.com/upload", uploadSuccess, uploadError, options);
  } catch(e) {
    alert("Exception in fileUpload: " + e);
  }
}
