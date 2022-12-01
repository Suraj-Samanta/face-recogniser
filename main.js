Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    png_quality:90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
sorter= ml5.imageClassifier('model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Is Loaded")
}
function check(){
    img = document.getElementById('captured_image');
    sorter.classify(img, gotResult);
}
function result(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}