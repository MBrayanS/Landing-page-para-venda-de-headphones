let floates = $('.floates').find('img')

for(let i = 0; i < floates.length; i++){
    let id = floates[i].id

    $(`#${id}`).click(({ target })=>{
        $('#img-produto').fadeOut('fast',()=>{
            $('#img-produto').attr('src', target.src)
            $('#img-produto').fadeIn();
        });
    })
}