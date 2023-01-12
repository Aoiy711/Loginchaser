let buttonword = 1

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }
const check = () => {
    if(idbox.value=="id" && passwordbox.value=="password"){
        button.value="Sign In"
    }
    else{
        document.getElementById('button').style.left = `${getRandomArbitrary(195, 5) -97.5}px`
        document.getElementById('button').style.top = `${getRandomArbitrary(145, 5) -55}px`
        
        buttonword = Math.round(getRandomArbitrary(3, 1))
        if (buttonword==1){
            button.value="못잡겠지~"
        }
        else if (buttonword==2){
            button.value="멍충멍충~"
        } 
        else{
            button.value="털키어때~"
        }
    }
}
const okok = () => {
    if(idbox.value=="id"&&passwordbox.value=="password"){
        alert('로그인 성공!')
    }
    else if(idbox.value==''&&passwordbox.value==''){
        alert('어이고 수고 많으셨수ㅋㅋ 근데 아이디랑 비번을 채우셔야 해')
    }
    else{
        alert('어이고 수고 많으셨수ㅋㅋ 근데 아이디랑 비번이 틀리셨다고')
    }
}
button.onmouseover = check;
button.onclick = okok;