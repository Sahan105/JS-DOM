function ageInDays() {
    var birthDay = prompt('What is your age.....???');
    var myBirthDay = (2020 - birthDay) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + myBirthDay + ' days old.');
    h1.setAttribute('id', 'ageInDay');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);


}
function reset() {
    document.getElementById('ageInDay').remove();
}
/* Cat Generator */
function generateCate() {
    var image = document.createElement('img');
    var div = document.getElementById('cat-gen');
    image.src = "https://media.giphy.com/media/StT6DPSOmBIKQ/giphy.gif";
    div.appendChild(image);
}

