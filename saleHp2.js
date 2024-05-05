const CronJob = require("cron").CronJob;
const axios = require("axios");

console.log("Started:.....");
const shopeeCookie =
	"_gcl_au=1.1.1110053402.1691137332; SPC_F=5Zku7YgBU3Jhe2wHMXN780TyE4jGeyT6; REC_T_ID=03d02963-32a0-11ee-a84e-2cea7f9ac9fd; _fbp=fb.1.1691137332978.1707210026; SPC_CLIENTID=NVprdTdZZ0JVM0poytatsmkxerwsglnx; _hjSessionUser_868286=eyJpZCI6ImNmZmM5YzNkLTE3OWQtNTZiZi1iNjM3LWQ5YmVhYWFjMjhiOCIsImNyZWF0ZWQiOjE2OTE0MjUyMTIzNTAsImV4aXN0aW5nIjp0cnVlfQ==; SC_DFP=QTfOcJRXqpQomydjwZaGJPGeQLFWLkYE; _gac_UA-61914164-6=1.1695314541.Cj0KCQjw06-oBhC6ARIsAGuzdw1s-0yUJS3b3NArC09u0NlgxVqCAUTXdpErGkbVvuNBG_x8gcQuGJsaAiqiEALw_wcB; SPC_ST=.NlNBd2lqMXRBdXRBYVA2UMgxKIYgy+hqZHfnC2gd3weMmH64dlfE/iTt4h/qo1Ce9sFLEngbv4fG0iJ280s9Yp6a0jKJIziKEFlocaaGC9lsUGZfwOUM/mYvloBBFlqMYeFv7vHjEFeTdI77PUnr52Y4BC54pduYBA3n5yNUanhDiOgVe6TZ5rPTVoSnpuL2gGRgZw0h1n7KzKqDduT1SQ==; SPC_U=36092318; SPC_T_IV=Mk9vM0I3ZVdsSFZscmJhVg==; SPC_R_T_ID=+HT+ZCUDGnrcrRAjvnna/8+hVE4NcB1kGihTifTTTfCfrPtEK+DKXCYv00RCNPbbetEL2JqLA0128vHEtuLlpQvfmszLSOEak5FHuLZZXMxpp2bCbnmCRCAZTwICm4iWF5roisNYYdWeXQjJIZgewwK8Mjadqnf+AljhFCFV940=; SPC_R_T_IV=Mk9vM0I3ZVdsSFZscmJhVg==; SPC_T_ID=+HT+ZCUDGnrcrRAjvnna/8+hVE4NcB1kGihTifTTTfCfrPtEK+DKXCYv00RCNPbbetEL2JqLA0128vHEtuLlpQvfmszLSOEak5FHuLZZXMxpp2bCbnmCRCAZTwICm4iWF5roisNYYdWeXQjJIZgewwK8Mjadqnf+AljhFCFV940=; csrftoken=KZbZS8LFGE2BSwpZ5O1uGxXSWdkTOlvo; SPC_SI=W4ESZQAAAABhYWIxNk1UUtzzewAAAAAAN2V6ZzlxY1Q=; _QPWSDCXHZQA=d62d7751-d5a1-466b-b10d-6d41e5b48b5c; REC7iLP4Q=8db768a0-5342-478a-b2e1-8401aa391737; _gcl_aw=GCL.1696868689.CjwKCAjwyY6pBhA9EiwAMzmfwfqyD--RGEYm9BT7YduLsPCynxs5y56i0BEgzkxe43k_O0SfeFV6ZBoCB_QQAvD_BwE; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.2.1882858015.1696868690; SPC_IA=1; _hjSession_868286=eyJpZCI6IjIzZDAyZjk3LTk1YzQtNDRjMC05OTY5LTU3NTBmMjNmNmNkYyIsImNyZWF0ZWQiOjE2OTY4Njg3MDc1NTAsImluU2FtcGxlIjpmYWxzZSwic2Vzc2lvbml6ZXJCZXRhRW5hYmxlZCI6ZmFsc2V9; _hjAbsoluteSessionInProgress=1; _med=refer; shopee_webUnique_ccd=9Tr9G5UvadxdpgLxM7IlrA%3D%3D%7C412jrbXonb0uektvRAC1jKuyJRrVsyGSJKiZukJw9ArZ4a40O2nCRz0L%2F4OmSWR87htiJTZCiHEAuQ%3D%3D%7CXU4vyqo7P1DDtEAP%7C08%7C3; ds=d557e8f10fb977e1cce7ff9f97222f9f; _ga=GA1.1.1843175792.1691425212; _hjIncludedInSessionSample_868286=0; _ga_M32T05RVZT=GS1.1.1696868689.23.1.1696868840.48.0.0; SPC_EC=NHZ1ZnMyd29oVUE0TFhmaRhseYmqUPOSJqBLFR3TcnuERy9y1vqnsYwcF6a5gYPpFZJ4V1VdtytejpB+9LQNST6ShqxBiXT4ZXBXK6X/bPCF0CJLRyjaT31eG6Iz8ZVEy8DG3CChLBT9MZKwIq9bHQl8hjM/5KNeJ8gV3eyQ+aw=";

const shopeeReference =
	"https://shopee.vn/https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0sw6%2FDhj9AUMKgw4%2FDkFsREDQ1wrLDmMKlSMKFP8Kuwo3DgMKnHnIsci56CMKCHArCtEB6KsKwPsO0wpAiw6%2FDoTfDqcKQFCV5wrNZLHbDhcKZw5EMZ8Omwptvw7Q6J8KswrbDucOmw4fDpV3CuSpuFy9nwrnDpS0YS8ObLsOfw4zCn8KvFsKrwrLCvF3Cl8Kzw5w0wqpTwroCbcOQw7p1OMOmwpvDuMKfV8O5wqbCvFsuwpZlUSxPwrPCnFtowqPClX8Kw5pyVS5WwovDonbCucKcw6XCrcKqQATDqcKiWC8Ww6h%2FwrUuZsO5K0fCpcOlw7bCiGFnOcKtKsKiJMKpwoAKw6JNUcOPDcOpwqXDhm3CicO3wpxvaioMw4TCgGTCp8KVw6vCgsKxdELCoFAawqfCqWTDkF8lHUnCp1XDpcKYDcKmw7nDvMO5XcKxWsKVw4vDm1XCsVjCr8OXwqt1OcOPZ8K5wqQtwqDDssO7w4vDg3vClTXDvHLDvsKlw41%2BaC7Dp8OfeWbDkcOJDk0qMEzDs8OOciUHw4vDvcOlw7wmM8O4KMKzwq7CuTzDvMORZsO%2Fwr3DvcO8w7FyfsOPwrLDrcOUw5U9wrrDuhVdw7nDoxvCm8Khw6k7wp5VCl89w7%2FCncKxw4vDucKtN8O%2FYDPCucODwpDCs8OMw7LDi8ODwr9ddsO4w7TDgHzCiMOfeMOGwprCoBfDqEbDrsKyRl0ew75hWcOzw7ljw5ZEwonDlQrDv8K%2BcsKfw57DocOjwqc%2FZcOjXcO%2FwpVVwpfDswfCucK7w4HDm8KnGlRgKRfCpMKjOyBOC8OMwqTCscK2M8KbZ8OPwoZ6w53DuBYDw5zDrMOlM2DDuMO7bVd1N8KNbcOFd8K1VsOtwovCtiPCrAF2wq%2FCnMO9ZsKsw6zCi8Knw6vDmmnDhMKDw4PDhsOdwq3Dl8KFw78ZRGQLwrXDkkAqbsKYcsOSTk3DhsOWXWHDhMKAAGbCocOqYXBCw6zCssKGSgnCgsOAwoEJZ8O4HgjCl8K1CjhVTsKjwoMeS1bDncKDb1vCjmg1wq5DYFtDag1ANFjCp8KlwpnDuDQNw686LnfDocOdecKQw7TCgcKxbMOHFsKkJSlsRS3DtcOBw7Y4JQEXODcqQMKkwr9Hwp7Cj3fDtMOuw67CisKiXMO7FAfCoUfDssOVK8KvczhYw5ASB8Ohw4oow5xmXsKWw7NbHDxMw4PColl6w6V0Ch1uVcOwwpNuw6UMEMKmw7jCkMOcLA8ZD8O5w63ClcODTsOqIcOuV8K0wrHCgk8rGcKOdsOMEsO7SMK3AmvCpMKBGl%2FCijjClFvCn8OBGMKiNcK7aC7CgGpJWsKPwoBewoYpaHjDpcK4Rh9bGHPCr0zDsjXCqE3DlyZ9wq%2FDtMO5C2oRUW3CusKbZ8KBwpfCkcOGHsKJAnzDiVRBwrDCqcKJOsO6UlFnFcKhXSfCjlfClgknWBDCsycRGMKpd8K9w7sKw7bCnMKNQEzDh8Kqwq9TPMOWWEXDkMKdw6Yew7lebnHCgCsnw4lWUHbCv1XChyjDncK6I8OeLsOBbsOSw63CqEgxw67Cj8Ksf8KOwpVKA0rCoMOFacOvwqvDi8KowrbDhB47CMO9ZMKCB8KXw5XDtATDu0kYT8OAwo%2FCixrDisK%2BG0YwwpDCtC%2FDhMK1w5jCo8KTHgY%2Fw6HCuUrDk8KXIDTDnS1Hw4nDssKNw5UOUmJIw7wawowZwqDDnMKfw4MSQcKKKBfDi2I5S8OSMSkfwqkXwqZwaXTChcOacWM5S8OAw6nCp3HDvnjDnifCiw8TwqjDoBDDlklxw4UCGmrDkB7CiH7Cr8Ohw6wfwonDn8Khw4QIZSfDuwjDjcKGwo0xw5bCtEXDph1BWztRcyHCpsOdwr3CksOVwoLDonA8wr%2FCvcK2wozDnBYRw5JSwokecWQQwqfDmxHCvjHCgcOpS8KxSEhQP1MNwo3DssOkwpDDqjcuXMOPw7BEeTrDgylOw53DtBQYw73CuQ4bMkDDuzQBGiIZUcKdw5rDlcKCw7ZlRk4Awr%2FCvMKtwrIUUTjDrwk%2BcMO8UMO1wqTDv3Ihw4zDsQvDpQvDs8Kkwp7DuH3DisObw7XDmx4XOETCnsKgBsKcYGfDm37Cm8O7w5xVTWgbw6PDunlww4ZiJcK8w51VwpxAwrLCnsO0AjVwGMKaw40QDhwXA8OVHh89EydlXMKowpHCi8KRHyvCgHZ8M37DhiDDrCfCmRd%2BDmQlIHwQwpnCiSZBw4tXwptWP8OhNX1zB8K2DcODYw%2FCksOUAMK9Gy8xwqAjw6vDtMOSccOBXmU3woofw7XDomtmT8Orw7fDtMKRIMO2d2hAOcKfwqfDlsKcTsO%https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D";

const voucherCode = "TUTA666K";
const shopID = 769368869;
function placeOrder(timestamp, promotion_data, discount_value) {
	const merchandiseSubtotal = 742300; /// Tổng tiền hàng chưa giảm giá
	const shippingSubtotalBeforeDiscount = 71300; // Phí vận chuyển
	const shopOrder = [
		{
			shop: {
				shopid: 769368869,
			},
			items: [
				{
					itemid: 15395736352,
					modelid: 213517869035,
					quantity: 1,
					add_on_deal_id: 213697040,
					is_add_on_sub_item: false,
					item_group_id: "6096696579207057629",
					insurances: [],
				},
				{
					itemid: 18955689514,
					modelid: 59129930195,
					quantity: 1,
					add_on_deal_id: 213697040,
					is_add_on_sub_item: false,
					item_group_id: "5016471648539984644",
					insurances: [],
				},
				{
					itemid: 23375751230,
					modelid: 186966776763,
					quantity: 1,
					add_on_deal_id: 213697040,
					is_add_on_sub_item: false,
					item_group_id: "2434641690971943761",
					insurances: [],
				},
				{
					itemid: 13791951715,
					modelid: 144409579584,
					quantity: 1,
					add_on_deal_id: null,
					is_add_on_sub_item: null,
					item_group_id: null,
					insurances: [],
				},
				{
					itemid: 23952178137,
					modelid: 204526488223,
					quantity: 1,
					add_on_deal_id: null,
					is_add_on_sub_item: null,
					item_group_id: null,
					insurances: [],
				},
				{
					itemid: 21468212417,
					modelid: 137253630992,
					quantity: 1,
					add_on_deal_id: null,
					is_add_on_sub_item: null,
					item_group_id: null,
					insurances: [],
				},
				{
					itemid: 19842193457,
					modelid: 202141625833,
					quantity: 1,
					add_on_deal_id: null,
					is_add_on_sub_item: null,
					item_group_id: null,
					insurances: [],
				},
			],
		},
	];
	const checkoutPriceData = {
		merchandise_subtotal: merchandiseSubtotal * 100000,
		shipping_subtotal_before_discount: shippingSubtotalBeforeDiscount * 10000,
		shipping_discount_subtotal: 0,
		shipping_subtotal: shippingSubtotalBeforeDiscount * 10000,
		tax_payable: 0,
		tax_exemption: 0,
		iof_amount: 0,
		custom_tax_subtotal: 0,
		promocode_applied: discount_value * 100000,
		credit_card_promotion: null,
		shopee_coins_redeemed: null,
		group_buy_discount: 0,
		bundle_deals_discount: null,
		price_adjustment: null,
		buyer_txn_fee: 0,
		buyer_service_fee: 0,
		insurance_subtotal: 0,
		insurance_before_discount_subtotal: 0,
		insurance_discount_subtotal: 0,
		vat_subtotal: 0,
		total_payable:
			(merchandiseSubtotal + shippingSubtotalBeforeDiscount - discount_value) *
			100000,
	};

	const shippingOrder = [
		{
			sync: true,
			buyer_address_data: {
				addressid: 200030953,
				address_type: 0,
				tax_address: "",
			},
			// selected_logistic_channelid: 58011, // đơn vị vận chuyển quốc tế
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
			_cft: [201055851],
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
			checkout_price_data: checkoutPriceData,
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

function saveAndGetVoucherData(voucher) {
	const config = {
		method: "POST",
		url: "https://shopee.vn/api/v2/voucher_wallet/save_voucher",
		headers: {
			Referer: shopeeReference,
			Cookie: shopeeCookie,
			Origin: "https://shopee.vn",
			"Content-Type": "application/json",
		},
		maxBodyLength: Infinity,
		data: JSON.stringify({
			voucher_code: voucher,
			need_user_voucher_status: true,
		}),
	};

	axios
		.request(config)
		.then((response) => {
			const { voucher } = response.data.data;
			const start_time = new Date(voucher.start_time * 1000);

			console.log("Lưu mã thành công!");
			console.log(voucher.start_time);
			console.log(
				`Thời gian bắt đầu: ${start_time.getHours()}:${start_time.getMinutes()}:${start_time.getSeconds()} `
			);

			const promotionID = voucher.promotionid;

			const discountValue = voucher.reward_value / 100000;
			const promotionData = {
				can_use_coins: true,
				use_coins: false,
				shop_vouchers: [
					{
						shopid: shopID,
						promotionid: promotionID,
						voucher_code: voucherCode,
						applied_voucher_code: voucherCode,
						invalid_message_code: 0,
						reward_type: 0,
						shipping_order_distributions: [
							{
								shipping_id: 1,
								discount_value: discountValue * 100000,
								coin_earned: 0,
							},
						],
					},
				],
			};
			const startTime = new Date(voucher.start_time * 1000 - 1000);
			const hour = startTime.getHours();
			const minute = startTime.getMinutes();
			const second = startTime.getSeconds();
			const job = new CronJob(
				`${second} ${minute} ${hour} * * *`,
				function () {
					sleep(625).then(() => {
						placeOrder(Date.now(), promotionData, discountValue);
					});
					job.stop();
				},
				null,
				false,
				"Asia/Ho_Chi_Minh"
			);
			job.start();
		})
		.catch((error) => {
			console.log(error);
		});
}

saveAndGetVoucherData(voucherCode);

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
