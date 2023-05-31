// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let buttn = document.getElementById('buttn')
// let value1 = input1.value

// buttn.onclick = () =>{
//     input1.value = input2.value
//     input2.value = value1
// }



const buttn = document.querySelector('#buttn')

buttn.onclick = () =>{
    let a = document.querySelector('#input1').value
    document.querySelector('#input1').value = document.querySelector('#input2').value
    document.querySelector('#input2').value = a
}

