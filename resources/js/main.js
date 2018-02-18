$(function () {
    var settings = {
        TIME_LIMIT: 5,
        NUM_ANSWERS: 4
    }

    $('#answers').on('click', '.startQuiz', function() {
        startQuiz();
    });

    $('#answers').on('click', '.answerButton', function() {
        showAnswer(this.name, this);
    });

    $('#answers').on('click', '.nextButton', function() {
        if(questionNum < mics.length) {
            questionNum++;
            showQuestion(questionNum);
        } else {
            endQuiz();
        }
    });

    $('#countdown, #info').hide();

    var numCorrect = 0;
    var answer;
    var questionNum = 1;
    var enableTimer = true;
    var countdown;
    var timeLeft;
    var start;

    for(var i=2; i<=mics.length; i++) {
        $('#numOptionsSelect').append($('<option></option>')
                                    .attr('value', i)
                                    .text(i));
    }
    
    function startQuiz() {
        numCorrect = 0;
        questionNum = 1;

        if(!isNaN($('#timeSelect').val())) {
            settings.TIME_LIMIT = $('#timeSelect').val();
        }
        if(settings.TIME_LIMIT == 0) {
            enableTimer = false;
        } else {
            settings.TIME_LIMIT *= 1000;
            enableTimer = true;
        }

        settings.NUM_ANSWERS = $('#numOptionsSelect').val();

        shuffle(mics);
        $('#options, #info').hide();

        showQuestion(questionNum);
    }
    
    function showQuestion(num) {
        answer = mics[num-1];
        var answers = [];

        answers.push(answer.name);
        
        for(var i=0; i<settings.NUM_ANSWERS-1; i++) {
            var r;
            do {
                r = Math.floor(Math.random() * mics.length);
            } while (answers.indexOf(mics[r].name) >= 0);

            answers.push(mics[r].name);
        }

        shuffle(answers);

        $('#main, #answers, #info, #countdown').hide();

        $('#main').html('<div class="text-center"><img class="img-fluid" src='+answer.img+' /></div>');

        $('#answers').html('<div class="row"><div class="col-sm" id="answerCol1"></div><div class="col-sm" id="answerCol2"></div></div>');

        for(var i=0; i<answers.length; i++) {
            if(i%2 === 0) {
                $('#answerCol1').append('<button type="button" class="btn btn-block mt-0 mb-1 answerButton" name="'+ (answers[i]) +'">'+ answers[i] +'</button>');
            } else {
                $('#answerCol2').append('<button type="button" class="btn btn-block mt-0 mb-1 answerButton" name="'+ (answers[i]) +'">'+ answers[i] +'</button>');
            }
        }

        if(enableTimer === true) {
            start = Date.now();

            countdown = window.requestAnimationFrame(updateCountdown);

            $('#countdown').show();
        }
        

        $('#main, #answers').show();
    }
    
    function showAnswer(selectedAnswer, thisButton) {
        $('.answerButton').prop('disabled', true);

        window.cancelAnimationFrame(countdown);

        if(selectedAnswer === answer.name) {
            $(thisButton).addClass('btn-success');
            numCorrect++;
        } else {
            $(thisButton).addClass('btn-danger');
        }

        Object.keys(answer).forEach(function(key, index) {
            $('#'+ key).html(answer[key]);
        });

        $('#info').show();

        if(questionNum < mics.length) {
            $('#answers').append('<button type="button" class="btn btn-block btn-info nextButton">Next Question</button>');
        } else {
            $('#answers').append('<button type="button" class="btn btn-block btn-info nextButton">End Quiz</button>');
        }
    }
    
    function endQuiz() {
        $('#main, #countdown, #answers, #info').hide();

        $('#main').html('<div class="text-center"><h3>Final Score:</h3><h4>'+ numCorrect +'/'+ mics.length +'</h4></div>');

        $('#answers').html('<button type="button" class="btn btn-block btn-info startQuiz">New Quiz</button>')

        $('#main, #options, #answers').show();
    }
    
    function shuffle(a) {
        var j, x, i;
    
        for(i=a.length-1; i>0; i--) {
            j = Math.floor(Math.random() * (i+1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    }

    function updateCountdown() {
        countdown = window.requestAnimationFrame(updateCountdown);
        timeLeft = settings.TIME_LIMIT - (Date.now() - start);
        $('#countdown .progress-bar').width(Math.floor((timeLeft / settings.TIME_LIMIT) * 100) +'%');
        $('#countdown .progress-bar').html(Math.ceil(timeLeft / 1000));

        if(timeLeft <= 0) {
            $('#countdown .progress-bar').empty();
            showAnswer(null);
        }
    }
})