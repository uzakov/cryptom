$(document).ready(function() {
$('#btn_submit').click(function(){
    var input = $('#input').val();
    var options, encrypted;
    var pubkey ="-----BEGIN PGP PUBLIC KEY BLOCK-----\n"+
        "Version: OpenPGP.js v2.3.7\n"+
        "\n"+
        "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\n"+
        "=YjVL\n"+
        "-----END PGP PUBLIC KEY BLOCK-----";

    options = {
        data: input,    // input as String (or Uint8Array)
        publicKeys: openpgp.key.readArmored(pubkey).keys  // for encryption
    };

    openpgp.encrypt(options).then(function(ciphertext) {
        encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
         $('#result').text(encrypted);

    });

    });
});
