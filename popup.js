$(document).ready(function() {
    $('#btn_submit').click(function(){
        var input = $('#input').val();
        var options, encrypted;
        var pubkey = [
            "-----BEGIN PGP PUBLIC KEY BLOCK-----",
            "Version: OpenPGP.js v2.3.7",
            "",
            "xk0EWLbyzgECAMKxvwXK5J8xT2yW1GilDn2DCcKbGQlGnTilDTNElAht59/1",
            "RRZzgP0kDyX62olBYos04FGUQIbB1LOYKQkwDWsAEQEAAc0bSmFjayBNYW4g",
            "PGphY2tAZXhhbXBsZS5jb20+wnUEEAEIACkFAli28s4GCwkHCAMCCRAkZUac",
            "WL1S0AQVCAIKAxYCAQIZAQIbAwIeAQAA6XEB/36jleA3rw2n5XjCOMwuxI6V",
            "L22qarJes258+A4SmVC+QUj8G8fa8Q0fXKVu6CVV2N8M/72AxKRF9+AzSePh",
            "S6rOTQRYtvLOAQIAyBvYXQiJhS2z/jtgFYLG77W2lGEttfq0yi/c0Y+viF9D",
            "NAiS3nNwieqPvEy3SqXRh+GTt7JeF6aI7PLTiSMc8wARAQABwl8EGAEIABMF",
            "Ali28s4JECRlRpxYvVLQAhsMAACDUwIAmSmGpUI+KTQqhMQlw4nI1TylSjT2",
            "VuknrOFf0jZDDcwCEgwYJKmi9fI2IRcJw7vKXPsAJpTQFfxiT9TmlTHkaA==",
            "=74/2",
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
