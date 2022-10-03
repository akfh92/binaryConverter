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
let dec_bin_output = document.querySelector("output-dec-bin")
let dec_twos_output = document.querySelector("output-dec-twos")
let dec_hex_output = document.querySelector("output-dec-hex")

let bin_dec_output = document.querySelector("output-bin-dec")
let bin_twos_output = document.querySelector("output-bin-twos")
let bin_hex_output = document.querySelector("output-bin-hex")

let hex_dec_output = document.querySelector("output-hex-dec")
let hex_bin_output = document.querySelector("output-hex-bin")
let hex_twos_output = document.querySelector("output-hex-twos")

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
let last_input =null
let decimal = 0
function calculate_dec(){
    dec_input = document.querySelector("#decConverter input");

    if (dec_input.value && dec_input.value !=last_input ){
        last_input = dec_input.value

        let decimal = dec_input.value
        
    }

}