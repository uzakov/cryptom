$("tr._51mx").bind("DOMSubtreeModified", function() {
    var $span= $('span._5yl5');
    $span.each(function(){
        if ($(this).text().includes('-----BEGIN PGP MESSAGE-----')) {
            alert($(this).text());
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
            var privkey = [
                "-----BEGIN PGP PRIVATE KEY BLOCK-----",
                "Version: OpenPGP.js v2.3.7",
                "",
                "xcA4BFi28s4BAgDCsb8FyuSfMU9sltRopQ59gwnCmxkJRp04pQ0zRJQIbeff",
                "9UUWc4D9JA8l+tqJQWKLNOBRlECGwdSzmCkJMA1rABEBAAEAAf4jQcTx65gT",
                "K/7SD05P1PQWzpAJ6cRS5bK6+0i0rAqSq+Nej6rfJXz4/OB7MQYv+DW9GRIa",
                "bFfUICK0cGEoZTNBAQDyAz2QnNStU58bsxhu09Do3cRModTz3AkVnnbX5N0Z",
                "WQEAzfJlMCS18qui8hEYDwUc1K1hEDP3KXQbDB7QQ2gBQGMA/R7F6k9fh95c",
                "IbVJcRnGuWATex5Tf9ZzH6hPGLnsgUJcT37NG0phY2sgTWFuIDxqYWNrQGV4",
                "YW1wbGUuY29tPsJ1BBABCAApBQJYtvLOBgsJBwgDAgkQJGVGnFi9UtAEFQgC",
                "CgMWAgECGQECGwMCHgEAAOlxAf9+o5XgN68Np+V4wjjMLsSOlS9tqmqyXrNu",
                "fPgOEplQvkFI/BvH2vENH1ylbuglVdjfDP+9gMSkRffgM0nj4Uuqx8A4BFi2",
                "8s4BAgDIG9hdCImFLbP+O2AVgsbvtbaUYS21+rTKL9zRj6+IX0M0CJLec3CJ",
                "6o+8TLdKpdGH4ZO3sl4Xpojs8tOJIxzzABEBAAEAAgC7h2TPYtXFqhv5D9mu",
                "rv0R3b/588wrs4RDynDtLvN4HuriUmzgLPmR374MoFx4F+nEDn+HOKd3jUEx",
                "9mKcGw2BAQD//PVcnBirdrx1lnyUe1DFdMDgF3GdYSZ4/R+OT9KGwQEAyB45",
                "CJs0gr8ePxwpcJmAjCB/kW1GVuoCGGbODbar5LMA/0kHmm2xwmJLX0y4PJp7",
                "DP9Fqpci08zXWXMF0dOv2lIXU1PCXwQYAQgAEwUCWLbyzgkQJGVGnFi9UtAC",
                "GwwAAINTAgCZKYalQj4pNCqExCXDicjVPKVKNPZW6Ses4V/SNkMNzAISDBgk",
                "qaL18jYhFwnDu8pc+wAmlNAV/GJP1OaVMeRo",
                "    =0BaC",
                "-----END PGP PRIVATE KEY BLOCK-----"].join("\n");
            var text = $(this).text();
            text = text.replace(/Version:/, '\n$&');
            //text = text.replace(/Comment:/, '\n$&');
            //text = text.replace(/openpgpjs\.org/, '$&\n\n');
            text = text.replace(/[^=]=/, '$&\n');
            text = text.replace(/-----END/, '\n$&');
            options = {
                message: openpgp.message.readArmored(text),     // parse armored message
                publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
                privateKey: openpgp.key.readArmored(privkey).keys[0] // for decryption
            };

            var that = this;
            var a = openpgp.decrypt(options).then(function(plaintext) {
                $(this).text(plaintext.data);
                // return plaintext.data;
                $(that).text(plaintext.data);
            })
            .catch(function (error) {
                alert('Failed: ' + error);
            });

        }
    });
});
