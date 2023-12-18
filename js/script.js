const menuBtn = document.getElementById('menu-btn');
const menuToggle = document.getElementById('mobile_nav');

menuBtn.addEventListener('click', function (event) {
    menuToggle.classList.toggle('hidden')
});
// ////////////////////////////////////////////////////////////////////////////

// chat modal
// var chatModal = document.getElementsByClassName('chat-modal')[0];
// var chatModalBtns = document.getElementsByClassName('chat-modal-btn');

// chatModalBtns.forEach((btn)=>{
// btn.addEventListener('click',()=> {
//     chatModal,classList.toggle("open");
// })
// })

// chatModal.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("chat-modal")){
//         chatModal.classList.remove("open");
//     }
// })



//chat modal 
var chatModal = document.getElementsByClassName("chat-modal")[0];
var chatModalBtns = document.querySelectorAll(".chat-modal-btn");



chatModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        chatModal.classList.toggle("open");
    })
})


chatModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("chat-modal")) {
        chatModal.classList.remove("open");
    }
})