$(document).ready(function() {
    // Listener for button event
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
        // Options for encryption
        options = {
            data: input,    // input as String (or Uint8Array)
            publicKeys: openpgp.key.readArmored(pubkey).keys  // for encryption
        };
        // Actual encryption and displaying it to user
        openpgp.encrypt(options).then(function(ciphertext) {
            encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
            $('#result').text(encrypted);
        });
    });
});
