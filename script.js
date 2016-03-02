//var the_number = null;
//// the_number = pick_number();
//// function pick_number(){
////     var random_number = Math.floor(Math.random() * 10) + 1;
////     return random_number;
//// }
//
//$(document).ready(function(){
//    the_number = pick_number();
//    //Generate a random number between 1 and 10 and then return that number (moved this comment to the appropriate place
//    //Moved my random pick number function so it runs at document loaded
//    function pick_number(){
//        var random_number = Math.floor(Math.random() * 10) + 1;
//        return random_number;
//    }
//
//    //using jQuery apply a click handler to the BUTTON that calls function make_guess
//    $('#button').click(function(){
//        make_guess();
//    });
//});
//
//function make_guess(){
//    //grab the value of the input from above and assign it to variable the_guess
//    //is that the right value? Is the button submitting the user's guess?
//    var the_guess = $("#guess_input").val();
//
//    if (the_guess > the_number){
//        $("#response_div").text("Too High!");
//    } else if (the_guess < the_number){
//        $("#response_div").text("Too Low!");
//    } else {
//        $("#response_div").text("You guessed it!");
//    }
//}

function guess(){
    //this.the_number = null;
    this.pick_number = function(){
        var random_number = Math.floor(Math.random() * 10) + 1;
        console.log('ran_num',random_number);
        return random_number;
    };
    this.make_guess = function(){
        var the_guess = $("#guess_input").val();
        var body_select = $('body');

        if (the_guess > the_number){
            $("#response_div").text('Too High!');
            body_select.removeClass();
            body_select.addClass('bg-danger');
        } else if (the_guess < the_number){
            $("#response_div").text("Too Low!");
            body_select.removeClass();
            body_select.addClass('bg-info');
        } else {
            $("#response_div").text("You guessed it!");
            body_select.removeClass();
            body_select.addClass('bg-success');
        }
    };
    this.reset = function(){
        var myGuess = new guess();
        the_number = myGuess.pick_number();
        $('body').removeClass();
        $('input').val('');
        $('#response_div').empty();
    };
}

var the_number = null;

$(document).ready(function(){
    var myGuess = new guess();
    the_number = myGuess.pick_number();

    $('.btn-success').click(function(){
        myGuess.make_guess();
        $('input').val('');
    });

    //doesn't work yet
    $('.btn-primary').click(function(){
        myGuess.reset();
    });
});