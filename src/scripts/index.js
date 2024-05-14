const modal = document.getElementById('modal');

const openModalBtn = document.getElementsByClassName('openModalButton');

openModalBtn[0].addEventListener('click', function() {
    modal.showModal();
})

document.getElementById('openModalButton1').addEventListener('click', function(){
    document.getElementById('modal').showModal();
})

document.getElementById('close-modal').addEventListener('click', function(){
    document.getElementById('modal').close();
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});