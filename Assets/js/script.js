var characters = 'abcdefghijklmnopqrstuvwxyz0123456789=+-*/<>^%^&#\'\"![]{};:';
var charactersLength = characters.length;
var interval;
var defaultValue = ['A', 'h', 'm', 'a', 'd', ' ', 'B', 'i', 'l', 'a', 'l'];

function continouslyGenerateRandomString() {
  interval = setInterval(() => {
    generateRandomString();
  }, 100)
}
function generateRandomString() {
  $('div span.randChar').each((index) => {
    $('div span.randChar').eq(index).text(characters.charAt(Math.random() * charactersLength));
  })
}
function setDefaultValueOfSpan() {
  $('div span.randChar').each((index) => {
    $('div span.randChar').eq(index).text(defaultValue[index]);
  })
}

$(document).ready(() => {
  var flag = true;
  $('#ranDiv').hover(function () {
    if (flag) {
      continouslyGenerateRandomString();
      flag = false;
      setTimeout(() => {
        clearInterval(interval);
        flag = true;
        setDefaultValueOfSpan();
      }, 750)

    }
  });

  //Programmer by day & 'Wannabee Artist' by night.

  var titleText = 'Web Developer by day, ML geek by night';//\n \nvar status = \"Currently employed at Systems Limited as an Associate Software Engineer. #Philonist #ComputerGeek\"';
  var supportingText = "Software Engineer";
  var supportingText2 = "Master's Student @ Østfold University College, Norway"
  var tags1 = "#Philonist #ComputerGeek #PlantLover #ArtLover";
  var tags2 = "#FASTIAN  #RAVIAN";

  var i = 0,j = 0, k = 0,l = 0,m=0;
  function typeWriter(containerID,content,i) {
    if (i < content.length) {
      var text = $("#"+containerID).text()
      text += content.charAt(i);
      $("#"+containerID).text(text);
      i++;
      setTimeout(()=>{
        typeWriter(containerID,content,i)
      }, 10);
    }
  }

  typeWriter("firstLine",titleText,i);
  setTimeout(()=>{
    typeWriter("secondLine",supportingText,j);
  },700);

  setTimeout(()=>{
    typeWriter("thirdLine",supportingText2,k);
  },1300) 

  setTimeout(()=>{
    typeWriter("fourthLine",tags1,l);
    $('#next').show();
  },1900) 

  setTimeout(()=>{
    typeWriter("fifthLine",tags2,m);
    $('#next').show();
  },2300) 


});
