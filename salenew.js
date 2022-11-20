var request = require("request");
var CronJob = require("cron").CronJob;

var request = require("request");
// time to start
var timestamp = 1668524400;

var shopeeCookie =
  '_gcl_au=1.1.178711877.1662339253; _fbp=fb.1.1662339253340.978563067; REC_T_ID=4583e972-2cb5-11ed-8206-e6879448f014; SPC_F=RlT4Y8LNhac46s3oFN6LMF7t4mzXnhSD; REC_T_ID=458200e2-2cb5-11ed-a545-2cea7faed481; G_ENABLED_IDPS=google; SPC_CLIENTID=UmxUNFk4TE5oYWM0kkxxwgbddyryemyj; _hjSessionUser_868286=eyJpZCI6ImVlNmMzNmZiLTk5YzgtNTgzOS05OGZhLTY1NTQ1YjljYjFjYSIsImNyZWF0ZWQiOjE2NjIzMzkyNTY3NjQsImV4aXN0aW5nIjp0cnVlfQ==; _gcl_aw=GCL.1662710160.Cj0KCQjwyOuYBhCGARIsAIdGQROTEeVPe_a-cSKf8CGU9DpeljvbI0Xut92AI7pFyRqMXgVru6UhUvQaAuSHEALw_wcB; _ga_KK6LLGGZNQ=GS1.1.1663120972.2.0.1663120974.0.0.0; __stripe_mid=79ebe435-eaa0-4619-ae97-4388c632f31d003d44; _ga_CGXK257VSB=GS1.1.1668257483.6.0.1668257484.59.0.0; _med=affiliates; _gid=GA1.2.1199963617.1668440222; SPC_ST=.eE0zeWpxczdGdnI5ZE1GUlDqyCktbQYagVogYGTLQTmOmHW5ZIXkZQdryTwIM6YNt4UYvfNSPVo0PdxwusMTD20aVaqbe/nXMBgCHx5Ap8TDPqQ2H23mJtbxMbVKILHqLSXV26QkgUBCpRte4jL00/H+xUM1TjxmctohBWDH4W4ZnPIGUgXJsodib8X5h1cKpJ/3PZ0Q/2HlmAv0FkcKsg==; SPC_U=190293746; SPC_T_ID=mn7iar8utyPUNZOcSWw5TslNil6MpLeeziQ1IPTzttZzsb096n4/Az8xF7DJg20MQNRzhYG0LZ3QKOZhZ2RR6uZb2eX7NTNGHAgPt4fqQ5Mg9sscWD3M3rvgDNCVNTbDqd6m2uAnRt0nnNq/c70YvnfWfhjbvRn8my0E3TheM0k=; SPC_T_IV=RjBEMTRHRVhsV1NMSGNkZg==; SPC_T_IV="RjBEMTRHRVhsV1NMSGNkZg=="; SPC_T_ID="mn7iar8utyPUNZOcSWw5TslNil6MpLeeziQ1IPTzttZzsb096n4/Az8xF7DJg20MQNRzhYG0LZ3QKOZhZ2RR6uZb2eX7NTNGHAgPt4fqQ5Mg9sscWD3M3rvgDNCVNTbDqd6m2uAnRt0nnNq/c70YvnfWfhjbvRn8my0E3TheM0k="; SPC_SI=i71sYwAAAABlb2hzaklJV7YVSAAAAAAAV1dIdEtRUkI=; SPC_R_T_ID=mn7iar8utyPUNZOcSWw5TslNil6MpLeeziQ1IPTzttZzsb096n4/Az8xF7DJg20MQNRzhYG0LZ3QKOZhZ2RR6uZb2eX7NTNGHAgPt4fqQ5Mg9sscWD3M3rvgDNCVNTbDqd6m2uAnRt0nnNq/c70YvnfWfhjbvRn8my0E3TheM0k=; SPC_R_T_IV=RjBEMTRHRVhsV1NMSGNkZg==; __LOCALE__null=VN; csrftoken=DcsoKsMdM2UVMWWvkJUDnXQCeIdea7Oa; _QPWSDCXHZQA=1ac0bb3a-77e8-4469-c507-2a5c2172b3e9; _hjSession_868286=eyJpZCI6IjdlZGY1MmVjLTU2NDktNDRmMi1iMDExLWIzY2QwY2FlMjZmOSIsImNyZWF0ZWQiOjE2Njg1MjAzNTYyNzAsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; AMP_TOKEN=%24NOT_FOUND; SPC_IA=1; _ga=GA1.1.827245286.1662339256; shopee_webUnique_ccd=oFN%2BOdIeZu0W0kygM66NZw%3D%3D%7C0yR8SupU0w9v1B7uZFPnm0kkBhIsT2VcVFhzgLavTcViB4RZNbU2hnq6ZnFf%2BbqN3OpjiGjls5aTG03Z8Sm8Z2YAV4HXNz%2BHkQmh%7CS0P0qhH1xLYqMFpb%7C06%7C3; ds=9821e617ad7e3f1ce5fa1669c4c92e2a; _hjIncludedInSessionSample=0; cto_bundle=Rz1uFV9QbGclMkJsMWRNN0Y0YjFMMFl5WFJhTzQyMGRYR3lBM1BPclB3SmY2NE9LU2RqR0VlNjIyTVkyNGVRTUpFcDR4eUVLUkx4WWVTSk9GMXRGem1TNnYxalZqNHFFV21kR3o5cTM2Z3B5M3dPcUhIZDBxclVFYWtlcGVQN3FmVzVCN2NKeVNPT3g3bWdwb2QzQjNhUjJ2MSUyQkN3JTNEJTNE; _dc_gtm_UA-61914164-6=1; _ga_M32T05RVZT=GS1.1.1668520356.66.1.1668521495.53.0.0; SPC_EC=R1FFR3haWlo4RFdZMUg4dvLMfcuc0bvUQ4XG28mGBVZVuEMtXFuXhoTRdJfB2J/m1BZoBZGVBXZPqTqmkFe/injYQRYdAwjmKiojx+PJBxF0aL6wpKuJHXVUeEMO3jGsXEGI89VqKDeVYn50elrhLp8oS/lE4mHKVbHy63t3UoEyGiFhXFj59SQhTmFLM+J+';

var shopeeReference =
  "https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsK9wo4jNwx%2BwpXDgRTCqcKcXcKPw79tw6AQIMOPwpAuOAjCskR7wpTDlUjCs8O6cWwcXMKlwrgywrg6SHE4XBEgAS5VwoB1wpFiwoN7D8K%2FSSjDjWg8w7bDrS3DoMO1wojDpFDDpMOHwo%2FCpMOfw6TChG1cwr7DusKxWCzChkXDsXrCkDtRwoF1wrTCqsOzVTHCmy3CpsKjYsKyHA9yW8OqWhsOw4bCosOxwpt4w4xXw43Ct8Ogw7lqPMKeTcKKw5F4chzDpMOCQcOVGMKFwqfCoCzClsKjw6l8OcKew4%2FCp8KzQV5pDjJKw6fCk8OlcDQeFsOzw5lowpA%2FesKqwpxwB8KUD3LDijnDkcKKcMKgwpIEw5MhesK1wqTClVrCvybDgXPCvsOaUGnCocK5wpBswo3DtnU0Vl5KFCrDqw1VDMOaUMOSwpHDlEZzw49cNMONwovDmXTCuFjCjMOmwpPDhXDCvFwuF8OLUcKRD3JFK0DDpcO3w6fCpw86K8OFw7nDtEvClcO9UMKeT8K%2FwovDjMKhwpMtwppwwrDDjMKIw5oJwq06w4vDncO5w7Q2wrPDuMKowrLCujw%2Fw71RZcO%2Fwr3Du8O8w6l8w7rDgMKydcOfw5UDwrrDuhVdwoXDo1vCl8Khw6l7wpFxwo3Cr8Kew77DjsOYw7nDtC7CmH90wpnDmsOiwpXCg8OMwonDs8OTwr91wrZ%2FfmLDocKKw59Ew4bDisKowpfDqEZtwrNSwp%2FCn8O%2BYVnDucO5U1Y2Emc0w75%2Fw7TDj8Ovw7HDscO5T1UGw5d%2FZcO8fMO6wqjCtncYfcOCwoDCg8KjQsKSwppuwoF4IzHCk8OSwrnDmsKuw67DrzvCvMOuQsKFAcOudsOqwr59w6tbw7x2w4BCw6pBwrQREsK%2Bw5sYXcK9wqpqw4JKYA%2FDmsK7by4owr96GcOjw5ogNzwWccK6XA7Dg18nImvDmGgDwoQLw4vCtFfCrm9yKcOjFV8sSAwIeEvCiSPDksKYwpVUKcKQBMO2THordkDChMOaw6hIWcOtDTpoecOlw7QDwoQSw6bDiFzDq2vDpMK4wrNkYwDCiAHDp8KNwrI9wp%2FCthR1LcOUNsK%2BW0RJezFCeMKoQDnCksKuw6XDlMORcMOZDhsmcgTCo8K8wrEJTsKmw4vCmMKWwo5EaiPDjBEdB3vClwI%2BHmPDgSodbcKSY2%2FCgTAtwrrDuAZ5DMK6C3HCpz0Ww4N0WX9Fw5vCgMOwwrLCkmHCpzbDoWApw6haYsKaBsKoDcOZND3Ctg55XMKuwqjDrMK2McKXQMKNIlUoYivDgxQMPHphw5DDhxo6wpQEwrfDiVfCp8K2dcKVw7TCrTLDpC%2FCqUNSVCnCtsOQw5TCr8KbwqF0I8KKDCR9BUHDjMOTJGjCocKiw55pQsOrWh7CrixTwqkREMK7I01tU11aw7ccdsKCXcK4wpTCjsK8w4XCqTluEEUwwrURwoHCvMKxwpzDmMKPw5wrwrLClsKUPcKsw7XCvsKRwq7DvQHCo0vCrMOoVcK7UXR8LSkCwokBb8KMAMOFw63DpXJhEcKXA8KqwrZbCV1ywqBCwq1uwqVUSsO9c8OwEsOdXTJ9OMKww5ZhU8KHw5TDgQQqHA1tw60YNcKOwrhDDcKRLUzCihgww6%2FCn2DDl0siTMOrw5vCksOFwqJuwrsewo0TPcOAfC3DhsOLHMOdd37DojNPw63CmQjDmsOfQwfDhcOywpUzHhJswrglDFjDmzVKe8KOLVtMwqfDuMKZTwZJekkqw5zDlArDk3XCqcK3wqXDngrDqwTCu2rDnMOhwrDCuB0Iwr0lwokJcMOYw4fDnTPCvBoTBjZgAsONw4MSw4TDocKAw5XDg31LwqzDlMKuwrfCvMOQwqxbLxdMKxzDk8KpJcOCw7BpbsOyNWbDmjHDssOYwqsgEhDDicKYcMKow4DChMO4wpE0EFbCqMOTwo7DisKwwprCm8ORGsOHUMKXTsOSfznCisKLw5HDokvDs8Kkw67DuX3DicObw7XDmwFww6R%2Bw6BqVwDChMKsandqYMKWwrdOVyQowq4cw4dhGMKGU2xhAR1sDMKBFThfwqkJSMK3EzMpwps9w5bDjEzCnGMcwqDCusK8w5nDvHpAAsO1Uh0GRinCjsKtFH7Ch8OYwp4mFSnDgEvDuU8YZsOow6BuKkYawrrCvSIbwoDDlk3CkFgww410aMKlwpdddsKVw51FfAPDvsOXw4xew5bDr8Oowo3CoClowofDuMKoKFItwo7Dh8O%2FAcOPHcKkMAYKAAA%3D"

var shopID = 33641234;
var promotionID = 492985969541120;
var voucherCode = "360B15S6";

var orderItems = [
  {
    "itemid": 19257937756,
    "modelid": 174902301762,
    "quantity": 1,
    "add_on_deal_id": 0,
    "is_add_on_sub_item": false,
    "item_group_id": null,
    "insurances": [
      {
        "insurance_product_id": "1650882748039998921",
        "name": "Bảo hiểm Thời trang",
        "description": "Bảo vệ sản phẩm được bảo hiểm khỏi thiệt hại do sự cố bất ngờ, tiếp xúc với chất lỏng hoặc hư hỏng trong quá trình sử dụng.",
        "product_detail_page_url": "https://insurance.shopee.vn/product-protection/profile?from=mp_checkout&product_id=1650882748039998921",
        "premium": 59900000,
        "premium_before_discount": 59900000,
        "insurance_quantity": 1,
        "selected": false
      }
    ],
    "channel_exclusive_info": {
      "source_id": 0,
      "token": ""
    },
    "supports_free_returns": false
  }
];
function applyVourcher() {
  var options = {
    method: "POST",
    url: "https://shopee.vn/api/v4/checkout/get",
    headers: {
      Origin: "https://shopee.vn",
      Referer: shopeeReference,
      Cookie: shopeeCookie,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _cft: [188011],
      timestamp: timestamp,
      shoporders: [
        {
          shop: {
            shopid: shopID,
          },
          items: orderItems,
          shipping_id: 1,
        },
      ],
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
      shipping_orders: [
        {
          sync: true,
          buyer_address_data: {
            addressid: 115511574,
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
        },
      ],
      order_update_info: {},
    }),
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    const data = JSON.parse(response.body);
    if (data["promotion_data"]["invalid_message"] != "") {
      console.log(data["promotion_data"]["invalid_message"]);
    } else {
      console.log("success");
      placeorder(
        data["timestamp"],
        data["checkout_price_data"],
        data["promotion_data"]
      );
    }
    // console.log(data);
  });
}

function placeorder(timestamp, checkout_price_data, promotion_data) {
  var options = {
    method: "POST",
    url: "https://shopee.vn/api/v4/checkout/place_order",
    headers: {
      Referer: shopeeReference,

      Cookie: shopeeCookie,
      Origin: "https://shopee.vn",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _cft: [188011],
      timestamp: timestamp,
      shoporders: [
        {
          shop: {
            shopid: shopID,
          },
          items: orderItems,
          shipping_id: 1,
        },
      ],
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
      shipping_orders: [
        {
          sync: true,
          buyer_address_data: {
            addressid: 115511574,
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
        },
      ],
      order_update_info: {},
      checkout_price_data: checkout_price_data,
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const data = JSON.parse(response.body);
    console.log(data);
  });
}
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// applyVourcher();

var cron = require("node-cron");
var job = new CronJob(
  "59 59 21 * * *",
  function () {
    sleep(850).then(() => {
      applyVourcher();
    });
    job.stop();
  },
  null,
  false,
  "Asia/Ho_Chi_Minh"
);
job.start();
