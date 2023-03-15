$(document).ready(function() {
    const inputClass = [90, 92, 94, 95, 97, 122, 124, 126, 128, 130, 149];
    let inputClassText="";
    for (const i in inputClass) {
        inputClassText += ".xl" + inputClass[i];
        if (i != inputClass.length-1) inputClassText += ", ";
    }
    $(inputClassText).each(function(){
        $(this).html('<input type="number" value="'+ $(this).html() + '"></input>');
    })
});

const UV = [0.22, 0.6, 1.5, 3.5, 8, 20, 50, 120];
const non_UV = [0.3, 1, 3, 10, 30, 100, 300, 1000];
function calculator(c, p1, p2, p3, uv){
    const p1_value = $('#'+p1).val();
    const p2_value = $('#'+p2).val();
    const p3_value = $('#'+p3).val();
    if (c==="1"){
        const multiply = 1000000/8/p1_value/p2_value*(uv==="1"? UV[p1.slice(4,5)-1]: non_UV[p1.slice(4,5)-1]);
        const result = multiply < 365? Math.round(multiply) : 365;
    }
    return result;
}

$(":input").change(function(){
    const resultClass = [99, 100, 101, 102];
    let resultClassText="";
    for (const i in resultClass) {
        resultClassText += ".xl" + resultClass[i];
        if (i != resultClass.length-1) resultClassText += ", ";
    }
    $(resultClassText).each(function(){ //c1_s1_1
        $(this).attr('id')
        $(this).html(calculator());
    })
})