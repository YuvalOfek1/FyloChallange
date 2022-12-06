var progress = 0;
var totalSize = 10;
var sizeUnit = ' MB';
var currentSizeUnit = document.getElementsByClassName('size-unit');
var remainCapacityElement = document.getElementById('remain');
var remainCapacity;
var maxCapacity = document.getElementById('max-capacity');
var minCapacity = document.getElementById('min-capacity');
var progressPercent = progress / totalSize * 100;
var usedCapacity = document.getElementById('used-capacity');
var progressBar = document.getElementById('progress-bar-fill');
var circle = document.getElementById('circle');
var imageUpload = document.getElementById('image-upload');

var fileSize;
var fileName;
var isValid;

minCapacity.innerText = 0 + sizeUnit;

updateProgress();
imageUpload.addEventListener('change', () => {
    
    fileName = imageUpload.files[0].name;
    isValid = /\.(jpe?g|png|png||gif|)$/i.test(fileName);
    if(!isValid){
        alert("File format isn't supported");
        return;
    }
    
    fileSize = imageUpload.files[0].size / 1024 / 1024;
    fileSize = parseFloat(imageUpload.files[0].size/1000/1000);
    progress+=fileSize;
    if(progress > totalSize){
        alert("There is not enough space on the disk");
        progress-=fileSize;
        return;
    }
    updateProgress();
    
    

});


function updateProgress(){
    
    usedCapacity.innerText = parseInt(progress) + sizeUnit;
    remainCapacityElement.innerText = totalSize - parseInt(progress);
    maxCapacity.innerText = totalSize + sizeUnit;
    progressBar.style.width = 100*(parseInt(progress)/totalSize) + '%';
    console.log(remainCapacity);
    if(progress==0){
        circle.style.left = 10 + "px";
    }
    else{
        circle.style.left = 0 + "px";
    }
}











