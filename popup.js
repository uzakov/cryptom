$(document).ready(function() {
    $('#btn_submit').click(function(){
        var input = $('#input').val();
        var options, encrypted;
        var pubkey =
            ["-----BEGIN PGP PUBLIC KEY BLOCK-----",
                "Version: OpenPGP.js v2.3.7",
                "",
                "xk0EWLY7+AECAMhIV6Py9MIm2WzrbeceEJpcai03/E90/5GUlPuQD/xsNDBo",
                "nqImqLzWUbKFxr9MPYG7lh7dCw3Bf5V+Gw8/rCsAEQEAAc0bSmFjayBNYW4g",
                "PGphY2tAZXhhbXBsZS5jb20+wnUEEAEIACkFAli2O/gGCwkHCAMCCRAkssAb",
                "vqJH0QQVCAIKAxYCAQIZAQIbAwIeAQAAIvICAMAvMVYezlrwvPrPQFV5iRk1",
                "HaAawhOlC3xqDWhMJKjE8i57+epZIvY4q5mY2BXQXE1r505C9BWbYuWpeiWg",
                "bNjOTQRYtjv4AQIAup7Hg5UVgxewpml/WKvtM2nfMxIzSiX8ZvvqVyeiOkNZ",
                "xx74sdQKAaT1FRKlJQ8M5VBkjfEHYUciP8YwtKqjtQARAQABwl8EGAEIABMF",
                "Ali2O/gJECSywBu+okfRAhsMAABWIgH+Lt5UGHBPf9T9y/CZm/2QCiN5P9YR",
                "JeoCB2AqnmtEM6EB9AeKy/Jvmj9EVxch/aezsWJKp5Z5vw50QMxMj3XN2w==",
                "=rx/B",
                "-----END PGP PUBLIC KEY BLOCK-----"].join("\n");

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
