let calct_text = '';
let calc_input = document.querySelector('#display_text')
document.querySelectorAll('button').forEach(item => {
    item.onclick = () => {
        var button_value = item.innerText;

        if (button_value == 'C') 
            calct_text = ""
         else if (button_value == '←') 
            calct_text = calct_text.slice(0, -1)
         else if (button_value == '=') 
            calct_text = eval(calct_text)
         else {
            if (calct_text.length<= 18)
        {
        if(button_value == '*' ||
           button_value == '/' ||
           button_value == '.' ||
           button_value == '-' ||
           button_value == '+'  ) button_value = CheckValue(button_value);
        calct_text += button_value;
        }
    }
    
    calc_input.value = calct_text;
    calct_text = String(calct_text);
} 
})

CheckValue = (button_value) => {
    var last_symb = calct_text.slice(-1);
    if(calct_text.length == 0) return '';
        if (button_value == last_symb)
             return ''
        else if (last_symb == '*' ||
                last_symb == '/' ||
                last_symb == '-' ||
                last_symb == '+' ||
                last_symb == '.')
                return ''
        else 
            return button_value
                
            }
