let calculation;
let oldAnswer;
let result;

$(".operations").children().click(function (){
    try{
        // What is clicked
        switch ($(this).html()){
            case "=":{
                // Save input for later use
                oldAnswer = calculation;
                // Replace all '^' with '**' so the eval function actually understands it
                calculation = calculation.replaceAll('^', "**");
                // Captures numbers between 'rt' so they can be rooted
                calculation = calculation.replaceAll(/(\d+)rt(\d+)/g, "Math.pow($1, 1/$2)");
                result = eval(calculation);
                if (eval(calculation) === Infinity){
                    result = "&#8734;";
                }
                // Replaces shown calculation with the before saved input so stuff like '^' doesn't appear as '**' to the user
                calculation = oldAnswer;
                break;
            }
            case "C":{
                calculation = '';
                result = '';
                break;
            }
            case "⌫":{
                // Removes last character
                calculation = calculation.slice(0, -1)
                break;
            }
            default:{
                if (calculation === undefined || calculation === '') calculation = $(this).html();
                else calculation += $(this).html();
                break;
            }
        }
    } catch (error){
        calculation = "Error";
    }

    $("#calculation").html(calculation);
    $("#answer").html(result);
})
