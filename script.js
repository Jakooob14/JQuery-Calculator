let answer;
let oldAnswer;
let result;

$(".operations").children().click(function (){
    try{
        switch ($(this).html()){
            case "=":{
                oldAnswer = answer;
                if (eval(answer) === Infinity){
                    answer += "=&#8734;";
                    break;
                }
                // answer = answer.replaceAll('^', "**");
                console.log("sdf")
                console.log(answer.replaceAll(/(\d+)rt(\d+)/g, "Math.pow($1, 1/$2)"));;
                result = eval(answer);
                answer = oldAnswer + "=" + result;
                break;
            }
            case "C":{
                answer = '';
                break;
            }
            case "⌫":{
                answer = answer.slice(0, -1)
                break;
            }
            default:{
                if (answer === undefined || answer === '') answer = $(this).html();
                else answer += $(this).html();
                break;
            }
        }
    } catch (error){
        answer = "Error";
    }

    $("#answer").html(answer);
})
