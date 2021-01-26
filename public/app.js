function set_number(num){
    var input = document.getElementById("inp")
    var last_char = input.value[input.value.length-1]
    var opr = ["+","-","*","/","%","."]
    if(opr.indexOf(last_char) !== -1 && opr.indexOf(num) !== -1){
                var other_chars = input.value.slice(0,input.value.length-1)
                input.value = other_chars + num
    }
    else{
        input.value += num
    }
}
function get_result(){
    var input = document.getElementById("inp")
    input.value = eval(input.value)
}
function clear_result(){
    var input = document.getElementById("inp")
    input.value = ""
}
function del(){
    var input = document.getElementById("inp")
    var val = input.value
    var arr = val.split("")
    var updated_str = arr.pop()
    var updated_val = arr.join("")
    input.value = updated_val
}