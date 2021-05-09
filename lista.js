$(function(){
    var time = new Date();
    var $newItem, $text;

    var addBtn = $('input:button');
    $text = $('input:text');
    var nazwaProduktu = $('input#nazwaProduktu');
    nazwaProduktu.hide();
    
    setInterval( function(){
        $('span').filter('#time').text(time.getHours() + ':' + time.getMinutes());
    }, 1000);

    addBtn.addClass('add').val("Dodaj");
    addBtn.on('click',
        function () {
            if(addBtn.hasClass('add')){

                nazwaProduktu.val('');
                nazwaProduktu.slideDown(800);
                nazwaProduktu.select();

                addBtn.removeClass('add')
                    .addClass('accept')
                    .val('Zatwierdz');
            } else {

                var tekst = $text.val();
                if (tekst.length > 15){

                    $text.addClass('wrong');
                    nazwaProduktu.after('<p>Max 20 znaków!</p>');

                } else {

                    $text.removeClass('wrong');
                    $('p').remove();
                    $newItem = $('<li>').append(tekst);

                    $newItem.on('click', function(){
                        if($(this).hasClass('oneClicked')) {
                            
                            $(this).fadeOut(1000).remove();
            
                        } else {
            
                            $(this).addClass('oneClicked')
                            .hide()
                            .fadeIn(1000);
                        }
                    })

                    $('ul').append($newItem);
                    nazwaProduktu.slideUp(800);

                    addBtn.removeClass('accept')
                        .addClass('add')
                        .val('Add');
                }
            }
        });
}) 