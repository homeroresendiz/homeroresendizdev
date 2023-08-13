const keywords = ['sus', 'amogus', 'amongus'];
var user_input = '';

var audio_sus = jQuery('#audio_sus');

document.addEventListener('keydown', function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        const letter = String.fromCharCode(event.keyCode).toLowerCase();
        user_input += letter;
        if (keywords.includes(user_input)) {
            user_input = '';
            audio_sus[0].play();
        }
    } else {
        user_input = ''; 
    }
});
