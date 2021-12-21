
document.getElementById('test').onclick = function () {
    document.getElementById('post').classList.add('button-clicked');
    document.getElementById('test').classList.add('link-clicked');
    document.getElementById('test').classList.remove('link-post');
    document.getElementById('courier').classList.remove('button-clicked');
    document.getElementById('test1').classList.remove('link-clicked');

}
document.getElementById('test1').onclick = function () {
    document.getElementById('courier').classList.add('button-clicked');
    document.getElementById('test1').classList.add('link-clicked');
    document.getElementById('test1').classList.remove('link-post');
    document.getElementById('post').classList.remove('button-clicked');
    document.getElementById('test').classList.remove('link-clicked');
}
//
// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);
//
//     async function formSend(e){
//         e.preventDefault();
//
//         let error = 0;
//
//         let formData = new FormData(form);
//
//         if(error===0){
//             form.classList.add('_sending');
//             let response = await fetch('sendmail.php', {
//                 method: 'POST',
//                 body:formData
//             });
//             if(!response.ok){
//                  let result = await response.json();
//                 alert(result.message);
//                 form.reset();
//                 alert('asd');
//             }
//             else{
//                 alert('ошибка');
//             }
//
//         }
//     }
// })
