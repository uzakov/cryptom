$("tr._51mx").bind("DOMSubtreeModified", function() {
    var $span= $('span._5yl5');
    $span.each(function(){
        if ($(this).text().includes('-----BEGIN PGP MESSAGE-----')) {
            alert($(this).text());
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

            var privkey = 
				["-----BEGIN PGP PRIVATE KEY BLOCK-----",
                "Version: OpenPGP.js v2.3.7",
				"",
            	"xcBmBFi2O/gBAgDISFej8vTCJtls623nHhCaXGotN/xPdP+RlJT7kA/8bDQw",
            	"aJ6iJqi81lGyhca/TD2Bu5Ye3QsNwX+VfhsPP6wrABEBAAH+CQMIg7DgFpTx",
            	"j2FgBjcAxrRdqZrj+I6DQnMffrnHddKW4nhlwVPhEztXXt8/o6VQkGfv7+yo",
            	"q4gW/EOTatBqrMqmnS5icug9Rd+kpTjjCyTVWtIQ5Rotdo+pAKqLlSq5JQyR",
            	"1ia+gBzN+KTlgAxdketSAo3hZ+sG5C20Ez742r1mXcGpqgeZhKM4hxl08fwi",
            	"CUyVMes0M8AMpR+f+nEKmBXJosTeb4wv5Ikkwqz9/fAiUjJp4NofE9EOPhHE",
            	"mYkUAACYmvIJbi5pma7wcFVBz1IGjLch19o3zRtKYWNrIE1hbiA8amFja0Bl",
            	"eGFtcGxlLmNvbT7CdQQQAQgAKQUCWLY7+AYLCQcIAwIJECSywBu+okfRBBUI",
            	"AgoDFgIBAhkBAhsDAh4BAAAi8gIAwC8xVh7OWvC8+s9AVXmJGTUdoBrCE6UL",
            	"fGoNaEwkqMTyLnv56lki9jirmZjYFdBcTWvnTkL0FZti5al6JaBs2MfAZgRY",
            	"tjv4AQIAup7Hg5UVgxewpml/WKvtM2nfMxIzSiX8ZvvqVyeiOkNZxx74sdQK",
            	"AaT1FRKlJQ8M5VBkjfEHYUciP8YwtKqjtQARAQAB/gkDCNC9fFpRsKwAYInj",
            	"FYqGOcgWeuejXKo7sc8RDUi60zoppPzpOlNbHzPRInJ5U7CcEO9o/J1WHRsj",
            	"feb6sQabr12zYPEgsfAI/PAdrSV5fHvrV+A+YqomdBhvWE4t3a7XXWTtsAux",
            	"gYmhr/drLD63fgq/LDTxdk00PJnidstYirfuKhSvRWzgyq1oJPqWQku8nWPU",
            	"ryhDk9o8Mx8+Pj8T4g+ij5I48D2LgMb9OYiga2c54XUVbImm3hflYk//YsUg",
            	"nfxKF6ZpDDw/jCG0umCpfDnA7ytOSMJfBBgBCAATBQJYtjv4CRAkssAbvqJH",
            	"0QIbDAAAViIB/i7eVBhwT3/U/cvwmZv9kAojeT/WESXqAgdgKp5rRDOhAfQH",
            	"isvyb5o/RFcXIf2ns7FiSqeWeb8OdEDMTI91zds=",
            	"=bvUn",
            	"-----END PGP PRIVATE KEY BLOCK-----"].join("\n");

            var passphrase = "Secretpass";

            //var dec = function(enc){
            //    openpgp.decryptKey({
            //        privateKey: privKey.keys[0],
            //        passphrase: passphrase
            //    });
//
            //    options = {
            //        message: openpgp.message.readArmored(enc),     // parse armored message
            //        publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
            //        privateKey: openpgp.key.readArmored(privkey).keys[0] // for decryption
            //    };
            //    return openpgp.decrypt(options);
			//};
            //$(this).text("woot");
            //console.log(openpgp.key.readArmored(privkey).keys[0].decrypt(passphrase));
            //$(this).text(dec($(this).text()));

            //openpgp.key.readArmored(privkey).keys[0].decrypt(passphrase);

			var unlocked = openpgp.decryptKey({
            	privateKey: openpgp.key.readArmored(privkey).keys[0],
                passphrase: passphrase
            });
			options = {
                message: openpgp.message.readArmored($(this).text()),     // parse armored message
                publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
                privateKey: unlocked // for decryption
			};
			console.log("If it gets this far then all is not lost");
            openpgp.decrypt(options).then(function(plaintext) {
            	console.log(plaintext.data);
                $(this).text(plaintext.data);
            });
            console.log("If no log between messages then it probably actually is lost.");

			//var message = openpgp.message.readArmored($(this).text());
			//var key = openpgp.key.readArmored(privkey).keys[0];
            //
            //$(this).text("tesssss");
			//$(this).text(openpgp.decrypt(key, message));

			//console.log("Text set");
            //var text = $(this).text();
            //text = text.replace(/Version:/, '\n$&');
            //text = text.replace(/Comment:/, '\n$&');
            //text = text.replace(/openpgpjs\.org/, '$&\n\n');
            //text = text.replace(/[^=]=/, '$&\n');
            //text = text.replace(/-----END/, '\n$&');

            //options = {
            //    message: openpgp.message.readArmored(text),     // parse armored message
            //    publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
            //    privateKey: openpgp.key.readArmored(privkey).keys[0].decrypt(passphrase) // for decryption
            //};

            //var that = this;
            //var a = openpgp.decrypt(options).then(function(plaintext) {
            //    $(this).text(plaintext.data);
            //    // return plaintext.data;
            //    $(that).text(plaintext.data);
            //})
            //    .catch(function (error) {
            //        alert('Failed: ' + error);
            //    });


        }
    });
});

