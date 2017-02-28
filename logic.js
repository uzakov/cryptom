$("tr._51mx").bind("DOMSubtreeModified", function() {
	var $span= $('span._5yl5');
    $span.each(function(){
		if ($(this).text().includes('-----BEGIN PGP MESSAGE-----')) {
			var options, encrypted;
			var pubkey = "-----BEGIN PGP PUBLIC KEY BLOCK-----\n"+
                "Version: OpenPGP.js v2.3.7\n"+
                "\n"+
                "xsFNBFi1uhEBEACe8F1UDRnNnHatMScHod+GPvZRb5mJ39eEr1GhXwS94+qI\n"+
                "w775D+oU+ofzB0c3yItUnuH2o/I7QBQ4LUPSJpIQODXimiMkir2CMROyVy8h\n"+
                "wPPqYrEloAbbw0c5cxMDAC2lvTjL8loBxsoyGHznsEpOYKtOmG2v2+QtZSCp\n"+
                "HEY9FZKwGDESIeLZPnDqAV1W4FqvlfGpcpT2oZ9oM2DPqjYKNDFAUl5SbwpO\n"+
                "i0c8IOihn2Op+4u7PVbdjicP+6r2RdGf1KOzaFWIF/Kp7uq7nZxdut3Lm4Ah\n"+
                "YTk1N0uKMo2gnCGRrbtK4NRnvBn8njnJaTdLT4AHgyT4mbb6VSFJ6P8NMamf\n"+
                "SD+ya9pz6O8E9m4bdzWK2ESs8trDHY+u+8v0ILukIMRe11HJxdFPcT6uh373\n"+
                "gN5W4AhE7P8M55dEoW1PoW89eUc52p+FlcuLP4f09BWn+uZH6xLW1raL6fnO\n"+
                "lXfC6ROdnm+wC3cygv5r6CXIaZmfhQjVEMvVe5q4TRHebiY2+hXSspa9TEiw\n"+
                "NfqgiU+pNo4DlAdLI8NTt1vhHuuFUSNmIi4jrE4Kg8G6x2bEQ7KaoEdp6pmd\n"+
                "BuPn1IOVSwkoFt51rCsXnC43YvfTyAwyw96qU7xe5R51obZYTInt07gB8nIN\n"+
                "Q0C8kZtW1AT8xbJfC4x5JoZxrZo4pc2gv6KuPwARAQABzRtKYWNrIE1hbiA8\n"+
                "amFja0BleGFtcGxlLmNvbT7CwXUEEAEIACkFAli1uhQGCwkHCAMCCRDlTmM2\n"+
                "U/7sQQQVCAIKAxYCAQIZAQIbAwIeAQAAdO0P/3T74bMsunlrtcctLgx+ZWml\n"+
                "Ep5RkuVvfmCn31VLK89mVzuNqeNBdCZ4+UijduRpUUTrQ546HeCmwp47fz+h\n"+
                "8Jk6fQm5xLfbCihQDKR+enU6yXQKaeQJCvtTr8eQ9/iF8fGzaufmcBig/8DY\n"+
                "HMznEDCTpyMRq+nCGo6Bj4/8OYCLD/DoWhriKk35tm0hw6pvpsT/9lrDmYg+\n"+
                "3VRyMo3vU4CqOhIsyCzgFGZ0UjbCxrzOQfORRdt+QcvJAma97gIL6px9adNA\n"+
                "vVfADGSrCL9Kiz+kQ4zndw0v9k/cyGP+k8+/YEQ39ld37SyqG0Vq9MmQ2opn\n"+
                "LaVg5PmXSKU8KGEXYGGjhlHFiH9MEwkpNVne9gL+AZMXz42PZ0oneNCdhg4K\n"+
                "vhxy6qMHNux/AWTr9AorYCCuR6ebn8Hjjeog/oZuHrM/cVKVRF68T+lkIFhi\n"+
                "Yzc0F/X4et4EPK6bQ0uj5OheZJpAwLYBXPWir4EDonXmdDrtZI+GLrahSMXH\n"+
                "UHXvB4FgOR5IIljapIkaFLAAoLKPp5b2qbWvQw1f6RmaC4nL4KpT9ckRJLq2\n"+
                "f5YkcDVFx+P3mJPJuFWp4SdvkeXDeqyvxyAPDHjkV2G3GEGCUHNPTWFmtvzX\n"+
                "nlcyPa+BerfTilqNtw5JdXG0CTL7tEfLtsVPWYcLiiIH6ElaqIIxT7wgUYvh\n"+
                "zsFNBFi1uhEBEADU0U40ytn1C7JwzucsBcSmBy+XrvrDH5le76+x+FHl0igH\n"+
                "1j6pB6sYq2T9ij6Cp3+jRid2NAtyOi9pvYGKOVoa2xRhD0Cd9OSLWo3tiWLU\n"+
                "rfKr4Xzrh7FhiuGeitjxKOwvVMKIPT9nNFnyrra31MX72s/v1Ob7atW91/ec\n"+
                "UyzUfYoNkQQDuOlszy6dkdQY3tsHG1nRcrCJ61N9oOMNxZJwpK3u8uJHN5AW\n"+
                "ZIhlZ94Q9QPA6l7PtvcQWV110K3YRbyxfhzFH1Ligz+JOz0Zb0c4jXkMY2+P\n"+
                "QW9WOTm/wQbGTiUbjQReEUw4GzTdpQQKJ90QZCwP0zGjhDd6URJiiHATyOUp\n"+
                "T0Gp4Oev+c2Gti7zOS/n+5TGTsSYBYMjULG7BEHj7Xg588iiZ+yAjjzgL52A\n"+
                "udB/ZC7w0htxRj69LUNa5ziQywtxS8/fpY1ZIwZsYuJOioMkb8f1toI0MBW/\n"+
                "afUuiJXmpiLQaDoTTJMIvwYRG+jwFCMQc3Ex9fxLmtYz2wspK93Gwo1Cuucx\n"+
                "DnA1KmO5ZkY+U0ET/6bHIcMhxQDh68JRKvrIP8kuD2W85R5qLx9dPRbVTUkv\n"+
                "iOefvPRjSukKwC05i2H/BLDj1uYtqc2d/a4A7dypZYGnCAwDvJpsSAGkoMvt\n"+
                "v9Isv1q27Zj7e4OuqNtW+8BsLMcwCq8s4e6YdQARAQABwsFfBBgBCAATBQJY\n"+
                "tboXCRDlTmM2U/7sQQIbDAAAccMP/jwc5+8L45+2bYbomIoOMX6OTXiCxGTz\n"+
                "VWpLVLseW3I5A/bp5uNev3PgMIjgNsourOoqTjS+f9bumoL+x+wBQ1f9+N6t\n"+
                "3vUAsjrorATwFsIam50pe/HCxBv8ajZbeE/tccvw4fhFYCwOIT722SzzZXtg\n"+
                "ki7N7A4jZNIE9vhwBmApQRA/b6M+J1OC2cIaEqBCcKL7PRnsC/Q+86gNIX0c\n"+
                "iCNOxnszHG/Czt1noHf2uLvpPyMXU9x3TXqYrlXMsz5rzv04yG2oyZgZ9eJL\n"+
                "CLvCrnjHpF8k4iZuH8ypsb3VDW/pTUVJkafX6TXbf3/vqCF9k/2iMhcC0gDx\n"+
                "ci5sq+cAKaBAdJych4HCTRcImEwbFK6KqhGCLpjugh4HWTw0RsS7vCfGlDoJ\n"+
                "M4ptRpP5M9TnxnbjnpPnsIHUXIpQrhwjPZDwxkPb6D8NC9YU21gshwhSw7Ub\n"+
                "0swauMN0Zd6Zzo8z/LeqGv2Lt0y1QnYw2xTYmqPMaKAUzlSCy0BDLSUeQ0Jl\n"+
                "DU7J7JUqYoKTiiyrouxBVt2G8RbAE3eDAsp1icQ4pLUT0rQZUEPlvCTdkU6F\n"+
                "TFgMgXirKAhHnFmfngHuaJ7AWAcKipMT6k1m3ELhRs+DJAWSvmZlsQftYRCu\n"+
                "XaOZJY+OovxOr2eT5vsnCou3tZh5U/ZxBhKMDOHLm5hQFUjf1mM0\n"+
                "=YjVL\n"+
                "-----END PGP PUBLIC KEY BLOCK-----";
			var privkey = "-----BEGIN PGP PRIVATE KEY BLOCK-----\n"+
                "Version: OpenPGP.js v2.3.7\n"+
				"\n"+
            	"xcaGBFi1uhEBEACe8F1UDRnNnHatMScHod+GPvZRb5mJ39eEr1GhXwS94+qI\n"+
            	"w775D+oU+ofzB0c3yItUnuH2o/I7QBQ4LUPSJpIQODXimiMkir2CMROyVy8h\n"+
            	"wPPqYrEloAbbw0c5cxMDAC2lvTjL8loBxsoyGHznsEpOYKtOmG2v2+QtZSCp\n"+
            	"HEY9FZKwGDESIeLZPnDqAV1W4FqvlfGpcpT2oZ9oM2DPqjYKNDFAUl5SbwpO\n"+
            	"i0c8IOihn2Op+4u7PVbdjicP+6r2RdGf1KOzaFWIF/Kp7uq7nZxdut3Lm4Ah\n"+
            	"YTk1N0uKMo2gnCGRrbtK4NRnvBn8njnJaTdLT4AHgyT4mbb6VSFJ6P8NMamf\n"+
            	"SD+ya9pz6O8E9m4bdzWK2ESs8trDHY+u+8v0ILukIMRe11HJxdFPcT6uh373\n"+
            	"gN5W4AhE7P8M55dEoW1PoW89eUc52p+FlcuLP4f09BWn+uZH6xLW1raL6fnO\n"+
            	"lXfC6ROdnm+wC3cygv5r6CXIaZmfhQjVEMvVe5q4TRHebiY2+hXSspa9TEiw\n"+
            	"NfqgiU+pNo4DlAdLI8NTt1vhHuuFUSNmIi4jrE4Kg8G6x2bEQ7KaoEdp6pmd\n"+
            	"BuPn1IOVSwkoFt51rCsXnC43YvfTyAwyw96qU7xe5R51obZYTInt07gB8nIN\n"+
            	"Q0C8kZtW1AT8xbJfC4x5JoZxrZo4pc2gv6KuPwARAQAB/gkDCMix6GwvYnfq\n"+
            	"YOCp3YkGuXfj5JdJpT7vgHzEGWsk8k0P77PouSMmgc2+LnpC9j+Y5oaBWAO0\n"+
            	"x3aIAH0ZlqPDUIv0w+os98v++HA528CjrV9549Z3uhR/cK6ZlqRt2NvXBnu4\n"+
            	"k3MzbHAeB684y0CvXoMM+R9v5m4ivSa1Xgs0jNzda87R+0ObdvU4DealNSzI\n"+
            	"KjgqDvhlNWbgh+L/FjFl8oFmq7LB5ET7pun4FVnBNwNjlsAxLnXyk9YKxK97\n"+
            	"qA3lT6K178EdlHPvOVMU5Y9t4vfQJCF5s00xiw6rMjbNgs+bHqNLPdtyfile\n"+
            	"ZHdwa7unGs3P+ddRhdjJMf6fNN45wjsJ4jdiHVrDcnGl4hpbCM7cDMSVX5hP\n"+
            	"aoRL0xWbgX8+djxVIVVZ3Tttag5HODBBu2CszKa4vsmMitDgsWK//2ZHjvzC\n"+
            	"WJTqv5FOq1EZ1VA6TYWlhOoEgP3rxVSc38m7o6R7I6Ryr/2ejzAFjjJXB+lD\n"+
            	"VjGic+7UfCOHMdrSjAMc086nS8jjI9mttVfT5auOYnWdz7K9O8xueFagSvCJ\n"+
            	"TEWlZmkhS034lGv0Nbp37bWBzaJTPIdqbnpG5LxMP0uWcn6t2wD1namBN/Df\n"+
            	"RmchqXXaTLVVw+16pEuKoPdwHjre9qlbmkCIZbZtXTszjhUWp4xev4TlseDQ\n"+
            	"waAOWgGcs0QsfenaCL1/hM/RlKYPssapwA0y8RfCxKOeyuCg1F7UmuWYhAW8\n"+
            	"B7fPNzwayzyHKa2VKppFiADoNtFG+cMbLD8VW4D/gH4kJhRlG5QnWTPL+EHz\n"+
            	"XujSSk3ltts1xhf24DPjmur4FzGmM/sIwaeHVKH9vr+TMnu93j6JdGDFxARo\n"+
            	"j6Bk+5Z1fOp70CwCTp2D0axr0AYxMmdWXvaHmZxQLlN/N+1kSdwBQaKu4fuM\n"+
            	"+B4XOrFvGXWcSstpkD4iGyUt8sjowEkMuuPSzAZMr8xnlp4sh5jb+QNQZDP+\n"+
            	"J7hrQiSlu6YJwaem7jO6v+bRje9LACE2LAlCW0ZdbZKuult4Vv9VQqpSvlX8\n"+
            	"l+kUAUfZWgW7o1Pc3LC+P/wuLldKHNvnllRp3pPWiNB/DSOmCEKEU5jjl8lS\n"+
            	"HPXQ/o7Ws3/sAoMiVDUIWi8Q5nRE16vDEVff/Q1ANX+gZbw+bwnh6ESKLzS3\n"+
            	"Ec7MOL+1ZQE2VIr2Isn4WyShRnS8E0nV91NhM498MLZDViC3ydq5gU/v3YtP\n"+
            	"zvIrqZpKHv4z1B0RU9OHrCKoLIEQlFnitAgrrGx6g96I/s0Ul2OcbcG2H6c7\n"+
            	"laGR1En9WqPHeKZrB+PoMJKD2YrXzEio4fe1p2Ia1am4lK6gD9cphcXwouK4\n"+
            	"yr+rMZzpxGMhuvO8D625X712dMZodC58F97f0iFT1CpKMUD58KiQOEB8IE2Q\n"+
            	"lLDOLyGmcQ2gtqUmcRK36KQuman+Ofux51EUeFAfIGUi00fY9RpGLfNiPb6o\n"+
            	"AVcXbtxJhySERw+mNeCeAjF8GBvSrd58Jv1MFYvGmCCVYo5zIZ95fcYfzUcR\n"+
            	"f+7O2yT+RpWLmxoG9TYhqLtDoeTHHZn3rI7JHNEAGdSbyZ+AnEcAPCyPjdnU\n"+
            	"NvncqWJ+3vyMPa5eaRkf0WeUDP1yJN/JB4DXStFFHxwFksbdj8Op73Xe7tBL\n"+
            	"gJpv8IXtELmnawICxGwNIgZc8WeM/MgNl6T9Zld76cy/vCP/Ln8+BpFfu9MZ\n"+
            	"M/DXVBnan5Qex+HSGQPutQAsaFW/9czE8j9UYJHfI30l/DLpItfwQcxrlAcj\n"+
            	"VpehBxnJ0rohgABPQSM20xZU/1PNG0phY2sgTWFuIDxqYWNrQGV4YW1wbGUu\n"+
            	"Y29tPsLBdQQQAQgAKQUCWLW6FAYLCQcIAwIJEOVOYzZT/uxBBBUIAgoDFgIB\n"+
            	"AhkBAhsDAh4BAAB07Q//dPvhsyy6eWu1xy0uDH5laaUSnlGS5W9+YKffVUsr\n"+
            	"z2ZXO42p40F0Jnj5SKN25GlRROtDnjod4KbCnjt/P6HwmTp9CbnEt9sKKFAM\n"+
            	"pH56dTrJdApp5AkK+1Ovx5D3+IXx8bNq5+ZwGKD/wNgczOcQMJOnIxGr6cIa\n"+
            	"joGPj/w5gIsP8OhaGuIqTfm2bSHDqm+mxP/2WsOZiD7dVHIyje9TgKo6EizI\n"+
            	"LOAUZnRSNsLGvM5B85FF235By8kCZr3uAgvqnH1p00C9V8AMZKsIv0qLP6RD\n"+
            	"jOd3DS/2T9zIY/6Tz79gRDf2V3ftLKobRWr0yZDaimctpWDk+ZdIpTwoYRdg\n"+
            	"YaOGUcWIf0wTCSk1Wd72Av4BkxfPjY9nSid40J2GDgq+HHLqowc27H8BZOv0\n"+
            	"CitgIK5Hp5ufweON6iD+hm4esz9xUpVEXrxP6WQgWGJjNzQX9fh63gQ8rptD\n"+
            	"S6Pk6F5kmkDAtgFc9aKvgQOideZ0Ou1kj4YutqFIxcdQde8HgWA5HkgiWNqk\n"+
            	"iRoUsACgso+nlvapta9DDV/pGZoLicvgqlP1yREkurZ/liRwNUXH4/eYk8m4\n"+
            	"VanhJ2+R5cN6rK/HIA8MeORXYbcYQYJQc09NYWa2/NeeVzI9r4F6t9OKWo23\n"+
            	"Dkl1cbQJMvu0R8u2xU9ZhwuKIgfoSVqogjFPvCBRi+HHxoYEWLW6EQEQANTR\n"+
            	"TjTK2fULsnDO5ywFxKYHL5eu+sMfmV7vr7H4UeXSKAfWPqkHqxirZP2KPoKn\n"+
            	"f6NGJ3Y0C3I6L2m9gYo5WhrbFGEPQJ305Itaje2JYtSt8qvhfOuHsWGK4Z6K\n"+
            	"2PEo7C9Uwog9P2c0WfKutrfUxfvaz+/U5vtq1b3X95xTLNR9ig2RBAO46WzP\n"+
            	"Lp2R1Bje2wcbWdFysInrU32g4w3FknCkre7y4kc3kBZkiGVn3hD1A8DqXs+2\n"+
            	"9xBZXXXQrdhFvLF+HMUfUuKDP4k7PRlvRziNeQxjb49Bb1Y5Ob/BBsZOJRuN\n"+
            	"BF4RTDgbNN2lBAon3RBkLA/TMaOEN3pREmKIcBPI5SlPQang56/5zYa2LvM5\n"+
            	"L+f7lMZOxJgFgyNQsbsEQePteDnzyKJn7ICOPOAvnYC50H9kLvDSG3FGPr0t\n"+
            	"Q1rnOJDLC3FLz9+ljVkjBmxi4k6KgyRvx/W2gjQwFb9p9S6IleamItBoOhNM\n"+
            	"kwi/BhEb6PAUIxBzcTH1/Eua1jPbCykr3cbCjUK65zEOcDUqY7lmRj5TQRP/\n"+
            	"pschwyHFAOHrwlEq+sg/yS4PZbzlHmovH109FtVNSS+I55+89GNK6QrALTmL\n"+
            	"Yf8EsOPW5i2pzZ39rgDt3KllgacIDAO8mmxIAaSgy+2/0iy/WrbtmPt7g66o\n"+
            	"21b7wGwsxzAKryzh7ph1ABEBAAH+CQMIUvse97lNvRNgrFhNgRTDe1yRGFPP\n"+
            	"Tsfz0s1STbIdYkr0T5TQe898VidxpOdv3AlW3w9dXCfuR/unJfDWss+VadbN\n"+
            	"HahQzsd9kMhGIAK7F5UOEWaupmvkNnyTTSUb7tM2LoQBI1qIx3LpOLrrQCV7\n"+
            	"hq4sYkxglHZifBV/VsclyZ2E16YEOolAHy1Okx2aYyq2fZcAMy4fs28LCsgw\n"+
            	"g3QyVSHx9skeTKKwiQXj8Qdx7Nz69m6wEaCidn+g7hIJyUhzawxtXWV04PBY\n"+
            	"ouYOmVFUexPy86lOuanTl/wa+W+iTyGCKpNP0U2b6BKWvIa3nj1xZK+6+LzZ\n"+
            	"OVpLNoiUVtKuGxQycSSeJIIgzg6hMIfgVLa46bX3uTLD4Zph3IfeGO5PDpwh\n"+
            	"0NHkYrepzH97maZsO3iDnhfSSCCSY3O+jFXjZwf4hkws5c/dRgFvWOoNu0EF\n"+
            	"uMbGa1rFQpWFNE6c7nmFArOnnoYr+C5IbKqs4Ezi1ZjY4tpt9oOGAiqqcoh5\n"+
            	"glU+qqJ/rZQxf6fVF3djcFpPDa4GGpI5Zoc9DV0ESXcVkuuK4RVycxpGmEE0\n"+
            	"u/Lbc4hgJAUj+UTINQiPpuN1hEMw1rqY1PM2VbTWUSju06VBSt0iyn6JbcO1\n"+
            	"rh6IiEEXSKZOsQq4X7hOMFwuaEvfy5jX6OkjKJkI7k5k23wLadpsb6sh//yc\n"+
            	"f/va6Qai4oJlNzp7FwosaWZDQ8tyUUcYyu2a9Z9W3/aqM4pKqxrZLUfyGtkU\n"+
            	"vg10bJHaxasc+aGp+nXFsSr3H5CMtouwWn1iZWAzQxImh7BnfgHmDrCCKcRb\n"+
            	"NdzjrtHu2igEidVNEvykzZyFomZcZTqX5JwbrecbNadGPyBsKRZSN/24vmIQ\n"+
            	"8HI1uYRNm4LbOPYCgE0ajEl3S1Jm+V3SRFLwPggQgZnQimGYKwRhh8EXp4j9\n"+
            	"U5CNJzUESlVJWGg/rBtY1dwUBw3NZ8eo/kt2zE4xfsimEA2NtKAASSmO8CAx\n"+
            	"yA/CiDyf8wlZNm4X6Z5p1gROuwVTc3CKayTndpQ8D5v+A2xIzDby4A0XUJVx\n"+
            	"/aVncsAablx/nS/79NkwUZ75e8TDu193XSMBprqx+uj/YfLOsjRrmku6nHCv\n"+
            	"wmigS9M4impLoisjADamfEnCDo4O7LGSgvKmHoiHjcUCgoNOxN0GCC0gmf6/\n"+
            	"q5apWfXPIlR+ba/WEdsAIaRKFuzM4Z/ySGl25CztuJ5hI1Ib6q8yTLQlEJN+\n"+
            	"JzWbWDnuV8TaeK2Z/UhoyohcdqArY6AoWWnpAK0fIvimVceZJe5WGHZB3wuB\n"+
            	"IkQemCCW/0Jtl4LyDjJ4AZL0qbUJaUmFBRNalnubYgwPL5t0o160HqQYvmQy\n"+
            	"OM3Hqj+3Pfh871XkORgjwAbNBA5um0vaU8p+m7QjAvBpHkFfSqBEovVlFjKG\n"+
            	"iMcBFk8VcE9lzAgUuUhQuf8Iu5ScORFddm0sAQVPKusnqth/SB6enXvwH1S4\n"+
            	"i+Eu5ck2gHwtir7mTKXUHk7YJPS+LEaVGsQOrzGVEeJ1oppYgimjarUS7KFC\n"+
            	"MoFJpYsnf2fCcYr8noAtLLwyYCEZ1VlqScragsUqFJah/sGbeCI7x+KUCiQN\n"+
            	"4qxa0Zfnrv6jaisE8NhIXJd2AbQTsxxdMoFxDGulvivPYKy1wNXJDMtTlt2g\n"+
            	"58mLhdUNTz9IowNLyMM4LvoBQjdvclZwuElWbvE9+wWimbjF9ryOa37KQpHW\n"+
            	"+2kkgFuS2FVL5QsmAQahLyzx6ia+iRDfvH3/K5C4gI8TotdieHV8lXIQQt5W\n"+
            	"Z/M+QZxxiMLBXwQYAQgAEwUCWLW6FwkQ5U5jNlP+7EECGwwAAHHDD/48HOfv\n"+
            	"C+Oftm2G6JiKDjF+jk14gsRk81VqS1S7HltyOQP26ebjXr9z4DCI4DbKLqzq\n"+
            	"Kk40vn/W7pqC/sfsAUNX/fjerd71ALI66KwE8BbCGpudKXvxwsQb/Go2W3hP\n"+
            	"7XHL8OH4RWAsDiE+9tks82V7YJIuzewOI2TSBPb4cAZgKUEQP2+jPidTgtnC\n"+
            	"GhKgQnCi+z0Z7Av0PvOoDSF9HIgjTsZ7Mxxvws7dZ6B39ri76T8jF1Pcd016\n"+
            	"mK5VzLM+a879OMhtqMmYGfXiSwi7wq54x6RfJOImbh/MqbG91Q1v6U1FSZGn\n"+
            	"1+k1239/76ghfZP9ojIXAtIA8XIubKvnACmgQHScnIeBwk0XCJhMGxSuiqoR\n"+
            	"gi6Y7oIeB1k8NEbEu7wnxpQ6CTOKbUaT+TPU58Z2456T57CB1FyKUK4cIz2Q\n"+
            	"8MZD2+g/DQvWFNtYLIcIUsO1G9LMGrjDdGXemc6PM/y3qhr9i7dMtUJ2MNsU\n"+
            	"2JqjzGigFM5UgstAQy0lHkNCZQ1OyeyVKmKCk4osq6LsQVbdhvEWwBN3gwLK\n"+
            	"dYnEOKS1E9K0GVBD5bwk3ZFOhUxYDIF4qygIR5xZn54B7miewFgHCoqTE+pN\n"+
            	"ZtxC4UbPgyQFkr5mZbEH7WEQrl2jmSWPjqL8Tq9nk+b7JwqLt7WYeVP2cQYS\n"+
            	"jAzhy5uYUBVI39ZjNA==\n"+
            	"=ekGX\n"+
            	"-----END PGP PRIVATE KEY BLOCK-----";

            var text = $(this).text();
			text = text.replace(/Version:/, '\n$&');
			text = text.replace(/Comment:/, '\n$&');
			text = text.replace(/openpgpjs\.org/, '$&\n\n');
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


