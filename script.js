const i = document.querySelector('#box')
document.querySelector('.btn').addEventListener('click',function(){
    i.classList.remove('hidden')
})

document.querySelector('.btn').addEventListener('dblclick',function(){
    i.classList.add('hidden')
})
