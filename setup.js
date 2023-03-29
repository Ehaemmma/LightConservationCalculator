$(document).ready(function() {
    $("input").change(function(){
        const id = this.id.slice(0, 4);
        $('#'+id+"_0").html(calculator(id+"_0"));
        $('#'+id+"_1").html(calculator(id+"_1"));
    })
});

const UV = [0.22, 0.6, 1.5, 3.5, 8, 20, 50, 120];
const non_UV = [0.3, 1, 3, 10, 30, 100, 300, 1000];

function calculator(r){
    const calculatorID = r.slice(1,2);
    const sensitivity = r.slice(3,4)-1;
    const uvID = r.slice(5,6);
    const p1_value = $('#'+r.slice(0,4)+"p1").val();
    // alert(p1_value);
    const p2_value = $('#'+r.slice(0,4)+"p2").val();
    // alert(p2_value);
    const p3_value = $('#'+r.slice(0,4)+"p3").val();
    // alert(p3_value);
    if (calculatorID==="1"){
        const multiply = 1000000/8/p1_value/p2_value*(uvID==="1"? UV[sensitivity]: non_UV[sensitivity]);
        const result = Math.min(Math.round(multiply),365);
        return result;
    }
    if (calculatorID==="2"){
        const multiply = 1000000*60/p1_value/p2_value/(365.25/7*p3_value)*(uvID==="1"? UV[sensitivity]: non_UV[sensitivity]);
        const compared = Math.min(Math.round(multiply), 24*60);
        const result = Math.floor(compared/60) + ":" + Math.round(compared-Math.floor(compared/60)*60);
        return result;
    }
    if (calculatorID==="3"){
        const multiply = 1000000*60/p1_value/p2_value/(365.25/7*p3_value)*(uvID==="1"? UV[sensitivity]: non_UV[sensitivity]);
        const result = Math.round(multiply*10)/10;
        return result;
    }
    return 0;
}

