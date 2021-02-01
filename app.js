function createParagraph(){
    var wordOne = document.getElementById('wordOne').value;
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value;
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value;
    var wordEight = document.getElementById('wordEight').value;
    var wordNine = document.getElementById('wordNine').value;
    var wordTen = document.getElementById('wordTen').value;
    var wordEleven = document.getElementById('wordEleven').value;
    var wordTwelve = document.getElementById('wordTwelve').value;
    var wordThirteen = document.getElementById('wordThirteen').value;


    var paragraph = '<p> Now this is a story all about how, my ' + wordOne + ' got flipped, turned upside ' + wordTwo + '. I would like to take a ' + wordThree + ', just ' + wordFour + ' right there, Ill tell you how I ' + wordFive + ' the Prince of a town called ' + wordSix + '. I ' + wordSeven + ' up to the ' + wordEight + ' about 7 or 8. Then I ' + wordNine + ' to the driver, Yo, ' + wordTen + " smell ya later! Looked at my " + wordEleven + ' I was finally there. To sit on my ' + wordTwelve + ', as the Prince of ' + wordThirteen + ".</p>" 

    document.getElementById("answer").innerHTML = paragraph;
}