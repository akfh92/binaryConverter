let body = document.querySelector("body");

// input var
let dec_input = document.querySelector("#decConverter input");
let binary_input = document.querySelector("#binConverter input");
let hex_input = document.querySelector("#hexConverter input");

//input label var
let dec_input_label = document.querySelector("#decConverter label");
let bin_input_label = document.querySelector("#decConverter label");
let hex_input_label = document.querySelector("#decConverter label");

//output var
let dec_bin_output = document.querySelector("#output-dec-bin .input-block input")
let dec_hex_output = document.querySelector("#output-dec-hex .input-block input")

let bin_dec_output = document.querySelector("#output-bin-dec .input-block input")
let bin_hex_output = document.querySelector("#output-bin-hex .input-block input")

let hex_dec_output = document.querySelector("#output-hex-dec .input-block input")
let hex_bin_output = document.querySelector("#output-hex-bin .input-block input")

//output label var

// let dec_bin_output_label 
// let dec_twos_output_label 
// let dec_hex_output_label

// let bin_dec_output_label
// let bin_twos_output_label
// let bin_hex_output_label

// let hex_dec_output_label
// let hex_bin_output_label
// let hex_twos_output_label


let last_input =null;
let last_output = null;
let decimal = 0;
dec_input= null;
// let bin_output =0;


function dec2bin(dec){
    return (dec >>> 0).toString(2);
}


function dec2hex(dec){
    return (dec >>> 0).toString(16);
}


function bin2dec(bin){
    return parseInt(bin,2);
}


function bin2hex(bin){
    return parseInt(bin,2).toString(16);
}


function hex2dec(hex){
    return parseInt('0x'+hex,16);
}

function hex2bin(hex){
    return dec2bin(hex);
}





function calculate_dec(){
    dec_input = document.querySelector("#decConverter input");
    if (dec_input.value && dec_input.value !=last_input ){
        //Dec to Binary2
        dec_bin_output.value=dec2bin(dec_input.value);
        //Dec to hex
        dec_hex_output.value = dec2hex(dec_input.value);
        
    }
    else if(!dec_input.value && last_input){
        dec_bin_output.value = null;
        dec_hex_output.value = null;
    }
    else if(dec_input.value==""){
        dec_bin_output.value = null;
        dec_hex_output.value = null;
    }
    

}

function calculate_bin(){
    bin_input = document.querySelector("#binConverter input");
    if (bin_input.value && bin_input.value !=last_input ){
        //Binary to Dec
        bin_dec_output.value=bin2dec(bin_input.value);
        //Binary to Hex
        bin_hex_output.value = bin2hex(bin_input.value);
        
    }
    else if(!bin_input.value && last_input){
        bin_dec_output.value = null;
        bin_hex_output.value = null;
    }
    else if(bin_input.value==""){
        bin_dec_output.value = null;
        bin_hex_output.value = null;
    }
}

function calculate_hex(){
    hex_input = document.querySelector("#hexConverter input");
    if (hex_input.value && hex_input.value !=last_input ){
        //Binary to Dec
        hex_dec_output.value=hex2dec(hex_input.value);
        //Binary to Hex
        hex_bin_output.value = hex2bin(hex_dec_output.value);
        
    }
    else if(!hex_input.value && last_input){
        hex_dec_output.value == null;
        hex_bin_output.value == null;
    }
    else if(hex_input.value==""){
        hex_dec_output.value = null;
        hex_bin_output.value == null;
    }
}

//calling calculate with interval
setInterval(calculate_dec,250);
setInterval(calculate_bin,250);
setInterval(calculate_hex,250);



