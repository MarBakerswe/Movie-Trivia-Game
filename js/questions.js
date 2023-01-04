let currentquestion = 0;
let questions = [
{ // question 1
	"id": 1,
	"question": "Q1: In The Matrix, does Neo take the Blue pill to move forward?",
	"response": "Neo took the Red pill to move forward",
	"answer": true,
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
},
{// question 2
	"id": 2,
	"question": "Q2: Elizabeth Taylor married the same man twice.",
	"response": "Elizabeth Taylor and Welsh actor Richard Burton were married twice (1964–1974, 1975–1976), both unions ending in divorce.",
	"answer": true,
    "imgUrl": "https://people.com/thmb/W7o_oHXtJVdLvI0wsDzojBSf7aM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(216x0:218x2)/liz-taylor-01a-435-b11a3444aa34463c8aa18195c9f84dbe.jpg"
},
{// question 3
	"id": 3,
	"question": "Q3: The Sandlot movie was released in 1994.",
	"response": "The Sandlot (released in some countries as The Sandlot Kids) is a 1993 American coming-of-age sports comedy film co-written, directed, and narrated by David Mickey Evans.",
	"answer": false,
    "imgUrl": "https://m.media-amazon.com/images/I/91W2JLVNlsL.jpg"
},
{// question 4
	"id": 4,
	"question": "Q4: Moonlight won Best Picture in 2018?",
	"response": "Moonlight has won the best picture Oscar in a chaotic awards ceremony climax which mistakenly awarded the top honour to La La Land, a fiasco which stunned Hollywood and viewers around the world.",
	"answer": true,
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg"
},
{// question 5
	"id": 5,
	"question": "Q5: Molly Ringwald made four movies with director John Hughes?",
	"response": "Roseville, California, U.S. Ringwald is known for her collaborations with filmmaker John Hughes. She established herself as a teen icon after appearing in the successful Hughes films Sixteen Candles (1984), The Breakfast Club (1985), and Pretty in Pink (1986).",
	"answer": true,
    "imgUrl": "https://www.al.com/resizer/ZEEJ7t_VkRue_48rLyHwXZIq3jc=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/entertainment_impact/photo/13002657-large.jpeg"
},
{// question 6
	"id": 6,
	"question": "Q6: Meg Ryan played Tom Cruise's love interest in the movie Top Gun.",
	"response": "Meg Ryan appeared in a minor role in Top Gun. Back then in 1986, the actress' Hollywood career had yet to take off. Meg Ryan's Top Gun character was Carole Bradshaw, wife of Nick Goose Bradshaw (Anthony Edwards)",
	"answer": false,
    "imgUrl": "https://m.media-amazon.com/images/I/91u++CxhrQL.jpg"
},
{// question 7
	"id": 7,
	"question": "Q7: Mindy Kaling played Mrs. Whatsit in the movie A Wrinkle In Time?",
	"response": "Mindy Kaling played Mrs. Whatsit in the movie A Wrinkle In Time.",
	"answer": true,
    "imgUrl": "http://www.shockya.com/news/wp-content/uploads/disney-a-wrinkle-in-time-movie-poster.jpg"
},
{// question 8
	"id": 8,
	"question": "Q8: It took 7 hours to do Zoe Saldana's gamora make up for Guardians of the Galaxy.",
	"response": "Instead of a simple slathering on green makeup, it turns out that her transformation takes just over seven hours of intense detail work from two makeup artists.",
	"answer": true,
    "imgUrl": "http://images.fandango.com/images/fandangoblog/GOTG_Bus%20Shelter_Gamora_v6a_lg.jpg"
},
{// question 9
	"id": 9,
	"question": "Q9: Jaws was originally released in the summer of 1976",
	"response": "Jaws was originally released in the summer of 1975",
	"answer": false,
    "imgUrl": "https://images.moviesanywhere.com/246283329b6fbec9158c89d2c8a76bfe/3f2f72c0-6820-413f-a347-173d330d27ed.jpg"
},
{// question 10
	"id": 10,
	"question": "Q10: Ian McKellen is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie",
	"response": "At the 2002 Oscars, Ian McKellen was the only actor nominated from Lord of the Rings: The Fellowship of the Ring, which had 13 total nominations.",
	"answer": true,
    "imgUrl": "https://amc-theatres-res.cloudinary.com/v1579117568/amc-cdn/production/2/movies/3200/3161/Poster/p_800x1200_The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_En_100216.jpg"
}
];

(function()
{
	// your page initialization code here
	fnReset(); //call reset on document ready

	document.getElementById("nextquestionbttn").addEventListener('click', function(event)
	{
		fnCheck();
	});

	document.getElementById("true").addEventListener('click', function(event)
	{ //when true is clicked the fnCheck(answer) is invoked on line 149
		fnCheck(true);
	});
	document.getElementById("false").addEventListener('click', function(event)
	{
		fnCheck(false);
	});
	document.getElementById("nextquestionbttn").addEventListener('click', function(event)
	{
		fnNext();
	});
	document.getElementById("playerscore").addEventListener('click', function(event)
	{
		fnReset();
	});

})();

function fnReset()
{

	document.getElementById('response').classList.add('hide');
	document.getElementById('nextquestionbttn').classList.add('hide');
	document.getElementById('score').classList.add('hide');
	document.getElementById('riquestionbox').classList.remove('hide');
	currentquestion = 0;
	document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
	//adding the iamge for each movie that correspondence to the current question
	document.getElementById('movieImg').innerHTML = `<img src="${questions[currentquestion].imgUrl}"/>`;
}

function fnNext()
{
	document.getElementById('response').classList.add('hide');
	if (currentquestion < questions.length - 1)
	{
		currentquestion = currentquestion + 1;
		document.getElementById('nextquestionbttn').classList.add('hide');
		document.getElementById('score').classList.add('hide');

	}
	else
	{

		document.getElementById('nextquestionbttn').classList.add('hide');
		document.getElementById('riquestionbox').classList.add('hide');
		document.getElementById('score').classList.remove('hide');
	}
	document.getElementById('response').classList.add('hide');
	document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
	//adding the iamge for each movie that correspondence to the current question
	document.getElementById('movieImg').innerHTML = `<img src="${questions[currentquestion].imgUrl}"/>`;
    
}


function fnCheck(answer)
{
	document.getElementById('response').classList.remove('correct', 'incorrect');
	var questionAnswer = questions[currentquestion].answer;
	if (questionAnswer === answer)
	{
		// show the correct answer
		document.getElementById('response').classList.add('correct');
		document.getElementById('response').innerHTML = `You chose: ${answer}. The answer is ${questionAnswer} ${questions[currentquestion].response}`;
	}
	else
	{
		// showing theincorrect answer
		document.getElementById('response').classList.add('incorrect');
		document.getElementById('response').innerHTML = `You chose: ${answer}. The answer is ${questionAnswer} ${questions[currentquestion].response}`;
	}
	document.getElementById('response').classList.remove('hide');
	document.getElementById('nextquestionbttn').classList.remove('hide');
}

function finalScore(){
// selecting true id
let tureAnswer = document.querySelectorAll('#true');
let score = 0;
//array of correct answers
let rightAnswers = [1, 2, 4, 5, 7, 8, 10]

for(var i = 0; i < tureAnswer.length; i++) {

    tureAnswer[i].addEventListener("click", function(e)
    {
        e.target.classList.toggle("clickedOn")
        score++
		document.getElementById("playerscore").textContent = `You have ${score} right answers`;
    });   
} 

}

finalScore()

