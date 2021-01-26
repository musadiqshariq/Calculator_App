function set_number(num){
    var input = document.getElementById("inp")
    input.value += num 
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