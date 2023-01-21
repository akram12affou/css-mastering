const hum = document.getElementsByClassName('hum')
const hum_cont = document.getElementsByClassName('hum_cont')
let isopen = false;
hum_cont[0].addEventListener('click', () => {
if(!isopen){
    document.styleSheets[0].addRule('.nav_container','transform: translateX(0vh);')
    document.styleSheets[0].addRule('.hum::before', ' transform: rotate(45deg)');
    document.styleSheets[0].addRule('.hum::after', ' transform: rotate(-45deg)');
    document.styleSheets[0].addRule('.hum', ' background-color:rgba(240, 248, 255, 0);');
    isopen = true
}else{
    document.styleSheets[0].addRule('.nav_container','transform: translateX(35vh);') 
  document.styleSheets[0].addRule('.hum::before', ' transform: translateY(-10px)');
    document.styleSheets[0].addRule('.hum::after', ' transform: translateY(10px)');
    document.styleSheets[0].addRule('.hum', 'background-color:white');
    isopen=false;
}
})