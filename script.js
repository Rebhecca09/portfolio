let bt=document.querySelector('#dois')
let dv=document.querySelector('div')
let dn=document.querySelector('#dd')
let ms=document.querySelector('#ee')
let gf=document.querySelector('#ff')

let aberto=false

bt.addEventListener('click',()=>{

if(aberto){
    dv.style.left='-500px'
    aberto=false
}
else{
    dv.style.left='0'
    aberto=true
}
})
