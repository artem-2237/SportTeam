/*form*/
const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', ()=>{
    uploadFile(formImage.files[0]);
});
function uploadFile(file){
    if(!['application/msword', 'application/pdf'].includes(file.type)){
        alert('Разрешены только .doc .pdf');
        formImage.value = '';
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e){
        formPreview.innerHTML = `<div class="remove__file"><span></span></div><span>${file.name}</span>`;
    };
    reader.onerror = function(e){
        alert('Ошибка');
    };
    reader.readAsDataURL(file);
};
$(formPreview).click(function (e) {
    $(this).empty();
    formImage.value = '';
    file = 0;
});
/*form*/