var faces = [{
    src:'images/dangote.jpg',
    title:'dangote',
    hint:'richest man in 9ja',
    clue:'tdagnygvotluer',
    link: 'https://en.wikipedia.org/wiki/Aliko_Dangote'
},{src:'images/donjazzy.jpg',
    title:'donjazzy',
    hint:'mavin records',
    clue:'dtotnejbazdzyc',
  link: 'https://en.wikipedia.org/wiki/Don_Jazzy'},{src:'images/myoga.jpg',
    title:'ogaatthetop',
    hint:'NSCDC.thatsall',
    clue:'ogaattohestsfp', link: 'https://en.wikipedia.org/wiki/My_Oga_at_the_top'},{src:'images/2baba.jpg',
    title:'2baba',
    hint:'african queen',
    clue:'u2bhfagdbmnixa', link: 'https://en.wikipedia.org/wiki/2Baba'},{src:'images/abacha.jpg',
    title:'abacha',
    hint:'apple killed him',
    clue:'arbaurcdidhgfa', link: 'https://en.wikipedia.org/wiki/Sani_Abacha'},{src:'images/adeboye.jpg',
    title:'adeboye',
    hint:'can somebody shout hallelujah',
    clue:'pxswtrayebofde', link: 'https://en.wikipedia.org/wiki/Enoch_Adeboye'},{src:'images/adefarasin.jpg',
    title:'adefarasin',
    hint:'He is a Pastor',
    clue:'aspdebfasaridn', link: 'https://en.wikipedia.org/wiki/Paul_Adefarasin'},{src:'images/awolowo.jpg',
    title:'awolowo',
    hint:'look at the cap and glasses',
    clue:'tawgoljovwonki', link: 'https://en.wikipedia.org/wiki/Obafemi_Awolowo'},{src:'images/banky.jpg',
    title:'bankyw',
    hint:'capable man',
    clue:'abkeanskucywop', link: 'https://en.wikipedia.org/wiki/Banky_W.'},{src:'images/buhari.jpg',
    title:'buhari',
    hint:'the change',
    clue:'bxcusvfharyrfi', link: 'https://en.wikipedia.org/wiki/Muhammadu_Buhari'},{src:'images/chimamanda.jpg',
    title:'chimamanda',
    hint:'a writer',
    clue:'cshiumadmanvda', link: 'https://en.wikipedia.org/wiki/Chimamanda_Ngozi_Adichie'},{src:'images/deolasagoe.jpg',
    title:'deolasagoe',
    hint:'Deola fashion designer',
    clue:'dexolgasdargoe', link: 'https://en.wikipedia.org/wiki/Deola_Sagoe'},{src:'images/djspinall.jpg',
    title:'djspinall',
    hint:'the cap',
    clue:'drjsapibnaluly', link: 'https://en.wikipedia.org/wiki/DJ_Spinall'},{src:'images/dokubo.jpg',
    title:'asaridokubo',
    hint:'militant',
    clue:'asbaridoktuibo', link: 'https://en.wikipedia.org/wiki/Mujahid_Dokubo-Asari'},{src:'images/fela.jpg',
    title:'fela',
    hint:'plenty wives + ganja',
    clue:'fenuyexoungrla', link: 'https://en.wikipedia.org/wiki/Fela_Kuti'},{src:'images/goodluck.jpg',
    title:'goodluck',
    hint:'ex president',
    clue:'gnoorsdlusrfck', link: 'https://en.wikipedia.org/wiki/Goodluck_Jonathan'},{src:'images/herbert.jpg',
    title:'macaulay',
    hint:'10 naira note',
    clue:'mawcfarsulfuay', link: 'https://en.wikipedia.org/wiki/Herbert_Macaulay'},{src:'images/honpatrick.jpg',
    title:'honpatrick',
    hint:'la honourable grammarly',
    clue:'hoenpadtrmiuck', link: 'http://infonubia.com/2013/09/hon-patrick-obahiagbons-interview-on.html'},{src:'images/jagaban.jpg',
    title:'jagaban',
    hint:'Tinubu nickname',
    clue:'jtagradbadtrun', link: 'https://en.wikipedia.org/wiki/Bola_Tinubu'},{src:'images/kanu.jpg',
    title:'kanu',
    hint:'olympics 98 hero',
    clue:'kyritadenyvhou', link: 'https://en.wikipedia.org/wiki/Nwankwo_Kanu'},{src:'images/lagbaja.jpg',
    title:'lagbaja',
    hint:'konko below',
    clue:'layvgbiajdavbr', link: 'https://en.wikipedia.org/wiki/Lagbaja'},{src:'images/obasanjo.jpg',
    title:'obasanjo',
    hint:'baba iyabo',
    clue:'obrasfyauvnjor', link: 'https://en.wikipedia.org/wiki/Olusegun_Obasanjo'},{src:'images/okonjo.jpg',
    title:'okonjo',
    hint:'finance',
    clue:'oekcdgtoyvnjuo', link:'https://en.wikipedia.org/wiki/Ngozi_Okonjo-Iweala'},{src:'images/oritsejafor.jpg',
    title:'oritsejafor',
    hint:'CAN',
    clue:'oruitgsejdafor', link: 'https://en.wikipedia.org/wiki/Ayo_Oritsejafor'},{src:'images/psquare.jpg',
    title:'psquare',
    hint:'Senorita',
    clue:'pyusqdqrutarve', link: 'https://en.wikipedia.org/wiki/P-Square'},{src:'images/toolz.jpg',
    title:'toolz',
    hint:'NdaniTV',
    clue:'teovstuiobflzs', link: 'https://en.wikipedia.org/wiki/Toolz'},{src:'images/wizkid.jpg',
    title:'wizkid',
    hint:'One dance ft drake',
    clue:'awsridzyekbind', link: 'https://en.wikipedia.org/wiki/Wizkid_(musician)'},{src:'images/wole.jpg',
    title:'soyinka',
    hint:'nobel laurel',
    clue:'scrotysijdnkda', link: 'https://en.wikipedia.org/wiki/Wole_Soyinka'}];

//used to display objects in the faces when u get the pics right
var counter = 0;
//variables used in the game
var idea;
var names;
var namesNo = 0;
var namesSplit = [];
var nice = 0;
var comment;
var scores = 0;
var levels = 1;
var kicker;
var stager = 1;
//track is used to track stages
var track = 50;
//array that throws jab when u get it wrong
var abuse = ["where are you from","you don fall my hand","shaking my head","beht why",
            "just try again","u miss am o"];
//array that informs them that they passed
var correctG = ["You passed: you smart","You passed: you sabi","You passed: ride on","You passed: i like that",
            "You passed: keep it up","You passed: thumbs up"];

//putting the clickable buttons below pix
function putclickable(){

  //  counter = window.localStorage.getItem('key');
    var nameforsplit = faces[counter].title;
    namesplitter = nameforsplit.split("");
    for (var t = 0; t < namesplitter.length; t++){
        var btn = document.createElement("BUTTON");
        var texts = document.createTextNode(namesplitter[t]);
     //   btn.appendChild(texts);
        document.body.appendChild(btn);
        document.getElementById("clickable").appendChild(btn);
        $('#clickable button').addClass("inputx");
        //$('#clickable button').attr("onclick", revclick());
    }
}
//filling option buttons
function splitNamesForButtons(){
    //counter = parseInt(window.localStorage.getItem('key'));
    idea = faces[counter].clue;
    namesSplit = idea.split("");
    for (var i = 0;i < namesSplit.length;i++){
        // trying fills the buttons
        var trying = i;
        document.getElementById(trying).value = namesSplit[i];
    }
}


//new way to check winner...fantastic
var kicker;
function emptyalert(){
        kicker = $('#clickable .inputx').text();
}

//checks winning if button is fully filled...main game controller
function trykicker(){
    names = faces[counter].title;
    if(kicker.length == names.length){
        if(kicker === names){
            winningFunction();
        }else {losingfunction();}
    }
}



function winningFunction(){
    counter++;
    scores += 10;
    //testing stages
    levels += 1;
    //saving the scores to the phone
    window.localStorage.setItem('points', scores);
    scores = parseInt(window.localStorage.getItem('points'));
    //saving the stage to the phone
    window.localStorage.setItem('stages', levels);
    levels = parseInt(window.localStorage.getItem('stages'));
    //saving the counter to phone
    window.localStorage.setItem('key', counter);
    counter = window.localStorage.getItem('key');
    //saving stages
     window.localStorage.setItem('stageman', stager);
    stager = window.localStorage.getItem('stageman');
    linkers();
    /////
    document.getElementById("score").innerHTML = scores;
    document.getElementById("level").innerHTML = levels;
    //document.getElementById("stage").innerHTML = stager;
        //trying to adjust the clickables left margin
    names = faces[counter].title;
    if((names.length >= 2) && (names.length <= 5)){
        document.getElementById("clickable").style.marginLeft = "90px";
    } else if ((names.length >= 6) && (names.length <= 6.5)){
        document.getElementById("clickable").style.marginLeft = "70px";
    } else if ((names.length >= 7) && (names.length <= 8)){
        document.getElementById("clickable").style.marginLeft = "60px";
    } else if ((names.length >= 9) && (names.length <= 11)){
        document.getElementById("clickable").style.marginLeft = "30px";
    } else {document.getElementById("clickable").style.marginLeft = "15px"; }


    //new things
   var nice = Math.floor(Math.random() * 6);
    comment = correctG[nice];
    document.getElementById("commenter").innerHTML = comment;
    $('#myBtn').click();
    addStage();
   // alert(comment);
   // navigator.notification.alert(comment, null, "9ja Mascots", "Continue");
    $('.inputx').remove();
    putclickable();
    $('#options input').show();
    splitNamesForButtons();
   // clicking();
    //end of new things
    document.getElementById("result").innerHTML = " ";
    document.getElementById("help").innerHTML = " ";
    $('.inputx').remove();
    $('#options input').show();
    $('#images').attr("src",faces[counter].src);
    $('#images').attr("alt",faces[counter].title);
    splitNamesForButtons();
    putclickable();
// return click on other levels
$('.inputx').click(function(e){
    e.preventDefault();
    if($(this).is(':not(:empty)')){
        var letter = $(this).text()
        $('#options input:not(:visible)').filter(function(){
            return this.value == letter;
            //change to show()
        }).first().show();
        $(this).empty();
    }
}).not(':empty').each(function(){
    var letter = $(this).text()
    $('#options input:visible').filter(function(){
        return this.value == letter;
        //change to hide()
    }).first().hide();
})
}

function losingfunction(){
   var yab = Math.floor(Math.random() * 6);
    document.getElementById("result").innerHTML = abuse[yab];
    navigator.vibrate(200);
//
}

//code for game start

function loading(){
    //start saving play on phone
    //saving counter
    if(window.localStorage.getItem('key')==null){
        window.localStorage.setItem('key', 0);
        counter = parseInt(window.localStorage.getItem('key'));
        //document.getElementById("score").innerHTML = scores;
       } else { counter = parseInt(window.localStorage.getItem('key'));
              /*document.getElementById("score").innerHTML = scores;*/ }
        //saving stages
    if(window.localStorage.getItem('stageman')==null){
        window.localStorage.setItem('stageman', 1);
        stager = parseInt(window.localStorage.getItem('stageman'));
        document.getElementById("stage").innerHTML = stager;
       } else { stager = parseInt(window.localStorage.getItem('stageman'));
              document.getElementById("stage").innerHTML = stager;}
        //saving levels
     if(window.localStorage.getItem('stages')==null){
        window.localStorage.setItem('stages', 1);
        levels = parseInt(window.localStorage.getItem('stages'));
        document.getElementById("level").innerHTML = levels;
       } else { levels = parseInt(window.localStorage.getItem('stages'));
              document.getElementById("level").innerHTML = levels;}
        //saving scores
     if(window.localStorage.getItem('points')==null){
        window.localStorage.setItem('points', 0);
        scores = parseInt(window.localStorage.getItem('points'));
        document.getElementById("score").innerHTML = scores;
       } else { scores = parseInt(window.localStorage.getItem('points'));
              document.getElementById("score").innerHTML = scores;}


    $('#images').attr("src",faces[counter].src);
    $('#images').attr("alt",faces[counter].title);
    splitNamesForButtons();
    putclickable();
    clicking();
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
        }
    }

/*
this is start of page
this is start of page
this is start of page
*/
$(document).ready(
    function(){
        $(".button-collapse").sideNav();
        $('.collapsible').collapsible();
        $('.materialboxed').materialbox();
        closevideo();
        toury();
        loading();
})
//code for game start
//jQuery for clickable

function clicking(){
$('#options input').click(function(e){
    e.preventDefault();
    sounding();
    if($('.inputx:empty:first').text($(this).val()).length)
        //change to .hide()
        $(this).hide();
    emptyalert();
    trykicker();
        })

$('.inputx').click(function(e){
    e.preventDefault();
    if($(this).is(':not(:empty)')){
        var letter = $(this).text()
        $('#options input:not(:visible)').filter(function(){
            return this.value == letter;
            //change to .show()
        }).first().show();
        $(this).empty();
    }
}).not(':empty').each(function(){
    var letter = $(this).text()
    $('#options input:visible').filter(function(){
        return this.value == letter;
        //change to hide()
    }).first().hide();
})
}

//help function
function helperMan(){
    document.getElementById("help").innerHTML = faces[counter].hint;
}



//end of nav bar
function linkers(){
   /* var clickers = document.createElement("BUTTON");        // Create a <button> element
    $('#faceslinks button').addClass("linking");
    var t = document.createTextNode(faces[(counter - 1)].title);       // Create a text node
    clickers.appendChild(t);                               // Append the text to <button>
    document.getElementById("faceslinks").appendChild(clickers);
    clickers.onclick = function(){
        window.open(faces[(counter -1)].link, '_blank', 'location=yes');
    };*/

// create the element
    var newLink = document.createElement("a");
    // add the URL attribute
    newLink.setAttribute("href", faces[(counter -1)].link);
  //  newLink.setAttribute("target", "_window");
  //  newLink.setAttribute("location", "yes");
    // Add some text
    newText = document.createTextNode(faces[(counter - 1)].title);
    // Add it to the new hyperlink
    newLink.appendChild(newText);
    // Find the place to put it
   // document.getElementById("faceslinkss").appendChild(newLink);
  /*$("faceslinkss a").on("click", {url: lastLink}, function(url){
       window.open(url);
  })*/
    clickers = document.createElement("BUTTON");
    var t = document.createTextNode(faces[(counter - 1)].title);       // Create a text node
    clickers.appendChild(t);
    document.getElementById("faceslinkss").appendChild(clickers);
    var lastLink = faces[(counter -1)].link;
    clickers.onclick = function(){
      //  newLink.click(newLink.setAttribute("href", window.open(lastLink, '_blank', 'location=yes')));
        window.open(lastLink, '_blank', 'location=yes')
    }
}

//trying stager...now working
function addStage(){
    switch(levels){
        case track:
            stager++;
            track += 50;
            navigator.notification.alert("Welcome to stage " + stager, null, "9ja Mascots", "Continue");
          //  alert("Welcome to stage " + stager);
            document.getElementById("stage").innerHTML = stager;
            break;
        default:
            document.getElementById("stage").innerHTML = stager;
    }
}

//trying sound
function sounding(){
    var audio = document.getElementById('music');
    var soundman = document.getElementById('switch1');
    if (soundman.checked) {
        audio.play();
        setTimeout(function stopMusic(){
        audio.pause();
        audio.currentTime = 0;
        },200);
    }
}
//dark theme
function darktheme(){
    var darker = document.getElementById('darktheme');
    if(darker.checked){
        document.body.style.backgroundImage = "url('images/background6.jpg')";
        document.getElementById('help').style.color = "white";
        document.getElementById('result').style.color = "white";
        document.getElementById('result').style.textShadow = "none";
    }  else {document.body.style.backgroundImage = "none";
        document.getElementById('help').style.color = "darkgreen";
        document.getElementById('result').style.color = "forestgreen";
        document.getElementById('result').style.textShadow = "1px 1px white";
        }
}
function closevideo(){
    setTimeout(function(){
        document.getElementById('videoholder').style.display = "none";
    },10500);
}
function toury(){
      // Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "How to type",
          content: "Click the green buttons below to type name of celebrity in the image below",
          target: document.getElementById("headmaster"),
          placement: "bottom",
            xOffset: "center",
            delay: 11000
        },
        {
          title: "You make a mistake?",
          content: "Click buttons above to cancel letter",
          target: document.getElementById("clickable"),
          placement: "bottom",
            xOffset: "center",
            arrowOffset: 120
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);
}
