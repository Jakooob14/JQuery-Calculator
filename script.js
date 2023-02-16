let answer;

$(".operations").children().click(function (){
    try{
        if($(this).html() === "=") {
            if (eval(answer) === Infinity){
                answer += "=&#8734;";
            } else{
                answer += "=" + eval(answer);
            }
        }
        else if ($(this).html() === "C") answer = '';
        else{
            if (answer === undefined || answer === '') answer = $(this).html();
            else answer += $(this).html();
        }
    } catch (error){
        answer = "Error";
    }

    $("#answer").html(answer);
})
