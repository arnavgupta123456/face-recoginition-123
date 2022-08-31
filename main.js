prediction_1 = "";

Webcam.set({
    width:300,
    height:300,
    image_format:'png' ,
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(' #camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/E-HgdaGZP/model.json',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}
function recogonise()
{
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = prediction_1;

    var utterThis = new SpeechSynthesisUtterance(speak_data_1 );
    synth.speak(utterThis);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);

    }else{
        console.log(results);
        document.getElementById("result_label").innerHTML = results[0].label;
        
        prediction_1 = " it is" + results[0].label;
    
        speak();
        if(results[0].label == "mother")
        {
            document.getElementById("image_1").src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089";
        }
        if(results[0].label == "father")
        {
            document.getElementById("image_1").src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089";
        }
        if(results[0].label == "me")
        {
            document.getElementById("image_1").src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089";
        }
        if(results[0].label == "sister")
        {
            document.getElementById("image_1").src ="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089";
        }
    
    }
}