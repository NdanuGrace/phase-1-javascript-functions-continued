// uses default activity 
function saturdayFun(activity="roller-skate"){
    return`This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));


// permits default activity to be overridden
const mondayWork= function (activity="go to the office"){
    return `This Monday, I will ${activity}.`

}

// creates a func when called wraps an adj in highlight
function wrapAdjective(adjective="*"){
    return function(compliment="special"){
        return `You are ${adjective}${compliment}${adjective}!`
    }
}
wrapAdjective("%")("a dedicated programmer");