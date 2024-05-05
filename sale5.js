const CronJob = require("cron").CronJob;
const axios = require("axios");

// time to start
var timestamp = 1694710836;

var shopeeCookie =
	"_fbp=fb.1.1681404321324.191876287; SPC_F=7c8Oi03KCLxng71Gv2fcAbgH88CpQN3H; REC_T_ID=946ddb10-da1a-11ed-9384-9440c93e1540; SPC_CLIENTID=N2M4T2kwM0tDTHhuyjfnxbxwdwjtvrba; _hjSessionUser_868286=eyJpZCI6IjM2NGY0MmM2LTMxNWUtNWJlYi1iODgzLTA2M2EzYzMxOGFjMSIsImNyZWF0ZWQiOjE2ODE0MDQzMjI5MDgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_FV78QC1144=GS1.1.1686037220.1.0.1686037223.57.0.0; _gcl_au=1.1.879374690.1689350926; __stripe_mid=02676d21-b8ce-44d3-8201-083954588e01904647; SPC_SC_TK=71acdf26f9fd5d56bbf9e478f9795982; SPC_SC_UD=773477074; SPC_STK=fsc+1ejKluP+vEFm7qOAusWN1YM1/O0z+q5i0OPhp+mXB5cyhxNFTdj+DAevDeC8eGc7CBpiMjKBI7n6SycwxDB3/xVKnsar45i5WPb54x4bH9RHRlG5sLagqm+sIPRpyPwe6DiCnnYAXKSKZol9JqH5HeBpw8TWV2AfmeYce80=; SC_DFP=SZlpwLdStVTKRoERmevfjSmbbExPGiAj; _gcl_aw=GCL.1694706375.CjwKCAjw3oqoBhAjEiwA_UaLtkAo993jGdG_gWr6R-8kn1ZAIqsbSh6qdSWKdqT-1xv0lby3VlhIBxoCcfcQAvD_BwE; csrftoken=j4WPSWb3EXN0v0dFphLiRI52DJKB1kTG; SPC_SI=2C8AZQAAAAB5NFBEVWVpZJpWGQAAAAAAZ01Rb2RTMTc=; SPC_IA=1; _QPWSDCXHZQA=ce0303e9-b563-4f40-9878-a02a09288fb8; REC7iLP4Q=dd9131d6-9fb6-4db6-b7d6-694c61ee4252; _gid=GA1.2.1761836440.1694706379; _gac_UA-61914164-6=1.1694706379.CjwKCAjw3oqoBhAjEiwA_UaLtkAo993jGdG_gWr6R-8kn1ZAIqsbSh6qdSWKdqT-1xv0lby3VlhIBxoCcfcQAvD_BwE; _hjSession_868286=eyJpZCI6IjhjNGRlNGUwLTJkMWQtNDRjYi1hYjQyLTdlNThmZTk2MTkwMCIsImNyZWF0ZWQiOjE2OTQ3MDYzNzkzODQsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; _hjIncludedInSessionSample_868286=0; _med=refer; _dc_gtm_UA-61914164-6=1; AMP_TOKEN=%24NOT_FOUND; SPC_ST=.czNkbk1hRzM2aGlvaEthYhaye+zpZDn53ekYdcLw8n28yaaqdtJjCaNBopO32WXAbmUJBzliqBEZm96QUpYqwjddINozbi8KMOGuTCdOP7mZvvLpnG/aERjDfQ2Q6d0XsPPhrvU+B+YYMJhnz9Ik7dalm2nuh75EZaULEKByogxcL8FwXtyZqkomSpWUsOTE7OlNjP6+jM3MuNsgqOSLXg==; SPC_U=773477074; SPC_T_IV=ZW1JNnI3eVFlZjV6a3drQg==; SPC_R_T_ID=K7d625OiJJz/96iAdxPpipkbBY5g4G7i1EG6Zpu7MXk35eU+zeG8xfR9Mm47y0Ce+fbKVSkz5ruYHIqAD87qKHaJgYvxnOIhEX/dFLu+APkMQIXdiDbEPcvXw5iJPUUkkYad007ukfEewe9L6UDdjUbp+yQUDmQirtLp/7ZxHSA=; SPC_R_T_IV=ZW1JNnI3eVFlZjV6a3drQg==; SPC_T_ID=K7d625OiJJz/96iAdxPpipkbBY5g4G7i1EG6Zpu7MXk35eU+zeG8xfR9Mm47y0Ce+fbKVSkz5ruYHIqAD87qKHaJgYvxnOIhEX/dFLu+APkMQIXdiDbEPcvXw5iJPUUkkYad007ukfEewe9L6UDdjUbp+yQUDmQirtLp/7ZxHSA=; _ga=GA1.1.212987767.1681404322; shopee_webUnique_ccd=Bo%2BV%2BQLWKEHMIwQDc1Pn7w%3D%3D%7CdDhO6dZvGVjlKL42bxGvzw0fRBx6L5beFS5iEe6BOQYsbFlB6UOyY1oqK60fTkBcz7%2FuWTDPQOU%3D%7CRdQ6V%2Fh%2BnI9GCKmD%7C08%7C3; ds=672eccbd5d2f8430e8a15e131ddd1d93; _ga_M32T05RVZT=GS1.1.1694706378.153.1.1694710178.7.0.0; SPC_EC=dzRmSlVlZGNMVmhiU1V2aTX41xuNo5XSgYjEHw1hqrbba2Eh9GbRtCy5hVqoX27fotzMgHhiCYIkjfwegSMzIvQvNb70KMri8CJnw5UTVSMf7ENe/HSN02ujg+LGAXFqemTOX/hP4bLyb8gxMybYGCVMUgUBqB1KYLVaH6/ewek=";

var shopeeReference =
	"https://shopee.vn/https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0sw6%2FDhj9AUMKgw4%2FDkFsREDQ1wrLDmMKlSMKFP8Kuwo3DgMKnHnIsci56CMKCHArCtEB6KsKwPsO0wpAiw6%2FDoTfDqcKQFCV5wrNZLHbDhcKZw5EMZ8Omwptvw7Q6J8KswrbDucOmw4fDpV3CuSpuFy9nwrnDpS0YS8ObLsOfw4zCn8KvFsKrwrLCvF3Cl8Kzw5w0wqpTwroCbcOQw7p1OMOmwpvDuMKfV8O5wqbCvFsuwpZlUSxPwrPCnFtowqPClX8Kw5pyVS5WwovDonbCucKcw6XCrcKqQATDqcKiWC8Ww6h%2FwrUuZsO5K0fCpcOlw7bCiGFnOcKtKsKiJMKpwoAKw6JNUcOPDcOpwqXDhm3CicO3wpxvaioMw4TCgGTCp8KVw6vCgsKxdELCoFAawqfCqWTDkF8lHUnCp1XDpcKYDcKmw7nDvMO5XcKxWsKVw4vDm1XCsVjCr8OXwqt1OcOPZ8K5wqQtwqDDssO7w4vDg3vClTXDvHLDvsKlw41%2BaC7Dp8OfeWbDkcOJDk0qMEzDs8OOciUHw4vDvcOlw7wmM8O4KMKzwq7CuTzDvMORZsO%2Fwr3DvcO8w7FyfsOPwrLDrcOUw5U9wrrDuhVdw7nDoxvCm8Khw6k7wp5VCl89w7%2FCncKxw4vDucKtN8O%2FYDPCucODwpDCs8OMw7LDi8ODwr9ddsO4w7TDgHzCiMOfeMOGwprCoBfDqEbDrsKyRl0ew75hWcOzw7ljw5ZEwonDlQrDv8K%2BcsKfw57DocOjwqc%2FZcOjXcO%2FwpVVwpfDswfCucK7w4HDm8KnGlRgKRfCpMKjOyBOC8OMwqTCscK2M8KbZ8OPwoZ6w53DuBYDw5zDrMOlM2DDuMO7bVd1N8KNbcOFd8K1VsOtwovCtiPCrAF2wq%2FCnMO9ZsKsw6zCi8Knw6vDmmnDhMKDw4PDhsOdwq3Dl8KFw78ZRGQLwrXDkkAqbsKYcsOSTk3DhsOWXWHDhMKAAGbCocOqYXBCw6zCssKGSgnCgsOAwoEJZ8O4HgjCl8K1CjhVTsKjwoMeS1bDncKDb1vCjmg1wq5DYFtDag1ANFjCp8KlwpnDuDQNw686LnfDocOdecKQw7TCgcKxbMOHFsKkJSlsRS3DtcOBw7Y4JQEXODcqQMKkwr9Hwp7Cj3fDtMOuw67CisKiXMO7FAfCoUfDssOVK8KvczhYw5ASB8Ohw4oow5xmXsKWw7NbHDxMw4PColl6w6V0Ch1uVcOwwpNuw6UMEMKmw7jCkMOcLA8ZD8O5w63ClcODTsOqIcOuV8K0wrHCgk8rGcKOdsOMEsO7SMK3AmvCpMKBGl%2FCijjClFvCn8OBGMKiNcK7aC7CgGpJWsKPwoBewoYpaHjDpcK4Rh9bGHPCr0zDsjXCqE3DlyZ9wq%2FDtMO5C2oRUW3CusKbZ8KBwpfCkcOGHsKJAnzDiVRBwrDCqcKJOsO6UlFnFcKhXSfCjlfClgknWBDCsycRGMKpd8K9w7sKw7bCnMKNQEzDh8Kqwq9TPMOWWEXDkMKdw6Yew7lebnHCgCsnw4lWUHbCv1XChyjDncK6I8OeLsOBbsOSw63CqEgxw67Cj8Ksf8KOwpVKA0rCoMOFacOvwqvDi8KowrbDhB47CMO9ZMKCB8KXw5XDtATDu0kYT8OAwo%2FCixrDisK%2BG0YwwpDCtC%2FDhMK1w5jCo8KTHgY%2Fw6HCuUrDk8KXIDTDnS1Hw4nDssKNw5UOUmJIw7wawowZwqDDnMKfw4MSQcKKKBfDi2I5S8OSMSkfwqkXwqZwaXTChcOacWM5S8OAw6nCp3HDvnjDnifCiw8TwqjDoBDDlklxw4UCGmrDkB7CiH7Cr8Ohw6wfwonDn8Khw4QIZSfDuwjDjcKGwo0xw5bCtEXDph1BWztRcyHCpsOdwr3CksOVwoLDonA8wr%2FCvcK2wozDnBYRw5JSwokecWQQwqfDmxHCvjHCgcOpS8KxSEhQP1MNwo3DssOkwpDDqjcuXMOPw7BEeTrDgylOw53DtBQYw73CuQ4bMkDDuzQBGiIZUcKdw5rDlcKCw7ZlRk4Awr%2FCvMKtwrIUUTjDrwk%2BcMO8UMO1wqTDv3Ihw4zDsQvDpQvDs8Kkwp7DuH3DisObw7XDmx4XOETCnsKgBsKcYGfDm37Cm8O7w5xVTWgbw6PDunlww4ZiJcK8w51VwpxAwrLCnsO0AjVwGMKaw40QDhwXA8OVHh89EydlXMKowpHCi8KRHyvCgHZ8M37DhiDDrCfCmRd%2BDmQlIHwQwpnCiSZBw4tXwptWP8OhNX1zB8K2DcODYw%2FCksOUAMK9Gy8xwqAjw6vDtMOSccOBXmU3woofw7XDomtmT8Orw7fDtMKRIMO2d2hAOcKfwqfDlsKcTsO%https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D";

var shopID = 229505613;
var promotionID = 714919494991872;
var voucherCode = "PEMM333";
var shopOrder = [
	{
		shop: {
			shopid: 229505613,
		},
		items: [
			{
				itemid: 16988393508,
				modelid: 69140776152,
				quantity: 1,
				add_on_deal_id: 209739406,
				is_add_on_sub_item: true,
				item_group_id: "209739406",
				insurances: [],
				channel_exclusive_info: {
					source_id: 0,
					token: "",
				},
				supports_free_returns: false,
			},
			{
				itemid: 22045185974,
				modelid: 158244144210,
				quantity: 1,
				add_on_deal_id: 209739406,
				is_add_on_sub_item: false,
				item_group_id: "209739406",
				insurances: [
					{
						insurance_product_id: "1650882748039998921",
						name: "Bảo hiểm Thời trang",
						description:
							"Bảo vệ sản phẩm được bảo hiểm khỏi thiệt hại do sự cố bất ngờ, tiếp xúc với chất lỏng hoặc hư hỏng trong quá trình sử dụng.",
						product_detail_page_url:
							"https://insurance.shopee.vn/ec/ec-pdp.html?from=mp_checkout&product_id=1650882748039998921",
						premium: 199900000,
						premium_before_discount: 199900000,
						insurance_quantity: 1,
						selected: false,
					},
				],
				channel_exclusive_info: {
					source_id: 0,
					token: "",
				},
				supports_free_returns: false,
			},
		],
		shipping_id: 1,
	},
];
var shippingOrder = [
	{
		sync: true,
		buyer_address_data: {
			addressid: 200023707,
			address_type: 0,
			tax_address: "",
		},
		selected_logistic_channelid: 5001,
		shipping_id: 1,
		shoporder_indexes: [0],
		selected_preferred_delivery_time_slot_id: null,
		prescription_info: {
			images: null,
		},
		fulfillment_info: {
			fulfillment_flag: 64,
			fulfillment_source: "",
			managed_by_sbs: false,
			order_fulfillment_type: 2,
			warehouse_address_id: 0,
			is_from_overseas: false,
		},
	},
];

function applyVoucher() {
	const options = {
		method: "POST",
		url: "https://shopee.vn/api/v4/checkout/get",
		headers: {
			Origin: "https://shopee.vn",
			Referer: shopeeReference,
			Cookie: shopeeCookie,
			"Content-Type": "application/json",
		},
		data: JSON.stringify({
			_cft: [33283691, 7528043],
			timestamp: timestamp,
			shoporders: shopOrder,
			selected_payment_channel_data: {
				version: 1,
				payment_channelid: 59000,
				option_info: "",
				text_info: {},
			},
			promotion_data: {
				use_coins: false,
				free_shipping_voucher_info: {
					free_shipping_voucher_id: 0,
					free_shipping_voucher_code: "",
					disabled_reason: null,
					banner_info: {
						msg: "",
						learn_more_msg: "",
					},
					required_be_channel_ids: null,
					required_spm_channels: null,
				},
				platform_vouchers: [],
				shop_vouchers: [
					{
						shopid: shopID,
						promotionid: promotionID,
						voucher_code: voucherCode,
					},
				],
				check_shop_voucher_entrances: true,
				auto_apply_shop_voucher: false,
			},
			fsv_selection_infos: [],
			device_info: {
				device_id: "",
				device_fingerprint: "",
				tongdun_blackbox: "",
				buyer_payment_info: {},
			},
			buyer_info: {
				share_to_friends_info: {
					display_toggle: false,
					enable_toggle: false,
					allow_to_share: false,
				},
				kyc_info: null,
				checkout_email: "",
			},
			cart_type: 0,
			client_id: 0,
			client_event_info: {
				is_platform_voucher_changed: false,
				is_fsv_changed: false,
			},
			tax_info: {
				tax_id: "",
			},
			shipping_orders: shippingOrder,
			order_update_info: {},
		}),
	};

	axios(options)
		.then((response) => {
			const data = response.data;
			if (data.promotion_data.invalid_message !== "") {
				console.log(data.promotion_data.invalid_message);
			} else {
				console.log("success");
				placeOrder(
					data.timestamp,
					data.checkout_price_data,
					data.promotion_data
				);
			}
		})
		.catch((error) => {
			throw new Error(error);
		});
}

function placeOrder(timestamp, checkout_price_data, promotion_data) {
	const options = {
		method: "POST",
		url: "https://shopee.vn/api/v4/checkout/place_order",
		headers: {
			Referer: shopeeReference,
			Cookie: shopeeCookie,
			Origin: "https://shopee.vn",
			"Content-Type": "application/json",
		},
		data: JSON.stringify({
			_cft: [33283691, 7528043],
			timestamp: timestamp,
			shoporders: shopOrder,
			selected_payment_channel_data: {
				version: 1,
				payment_channelid: 59000,
				option_info: "",
				text_info: {},
			},
			promotion_data: promotion_data,
			fsv_selection_infos: [],
			device_info: {
				device_id: "",
				device_fingerprint: "",
				tongdun_blackbox: "",
				buyer_payment_info: {},
			},
			buyer_info: {
				share_to_friends_info: {
					display_toggle: false,
					enable_toggle: false,
					allow_to_share: false,
				},
				kyc_info: null,
				checkout_email: "",
			},
			cart_type: 0,
			client_id: 0,
			client_event_info: {
				is_platform_voucher_changed: false,
				is_fsv_changed: false,
			},
			tax_info: {
				tax_id: "",
			},
			shipping_orders: shippingOrder,
			order_update_info: {},
			checkout_price_data: checkout_price_data,
		}),
	};

	axios(options)
		.then((response) => {
			const data = response.data;
			console.log(data);
		})
		.catch((error) => {
			throw new Error(error);
		});
}

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

applyVoucher();

var job = new CronJob(
	"35 0 0 * * *",
	function () {
		sleep(625).then(() => {
			applyVoucher();
		});
		job.stop();
	},
	null,
	false,
	"Asia/Ho_Chi_Minh"
);
job.start();
