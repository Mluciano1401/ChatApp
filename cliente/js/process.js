function sendmsg(){
    let socket = io()
    const form = document.getElementsByClassName('form')
    const input = document.getElementsByClassName('input')
    let message = document.getElementsByClassName('ul')
    form[0].addEventListener('submit', (e)=>{
        e.preventDefault();
        if(input[0].value){
            socket.emit('chat', input[0].value)
            input[0].value = ''
        }
    })
    socket.on('chat', (msg)=>{
        let item = document.createElement('li')
        item.textContent = msg
        message[0].appendChild(item)
        window.scroll(0, document.body.scrollHeight)
    })
}
sendmsg()