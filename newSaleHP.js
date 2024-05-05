var request = require("request");
var CronJob = require("cron").CronJob;

var request = require("request");
// time to start
var timestamp = 1691503200;

var shopeeCookie = "_gcl_au=1.1.1110053402.1691137332; SPC_F=5Zku7YgBU3Jhe2wHMXN780TyE4jGeyT6; REC_T_ID=03d02963-32a0-11ee-a84e-2cea7f9ac9fd; _fbp=fb.1.1691137332978.1707210026; csrftoken=yRvc8HRW6fOLkbNpvFeIpwZS3jv77KGU; _med=cpc; SPC_SI=Bb7IZAAAAABudFRVcXZCaYmqUwAAAAAAWXJoemUyNkE=; _QPWSDCXHZQA=d62d7751-d5a1-466b-b10d-6d41e5b48b5c; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.2.585741965.1691425212; _hjFirstSeen=1; _hjIncludedInSessionSample_868286=0; _hjSession_868286=eyJpZCI6IjYxMzFhNjc3LWRiZjgtNDUyOS1hZDA4LTMzNGUwMTY4ZmRkZCIsImNyZWF0ZWQiOjE2OTE0MjUyMTIzNjcsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; SPC_CLIENTID=NVprdTdZZ0JVM0poytatsmkxerwsglnx; SPC_ST=.M2dXa3BFdDBVV2VZRnhJRhMpySLgU4CJgZi0t3HMacAGRfLsUXlr49T+uhp2HCOyBktgDjr0iHeLw1JPEyauCk2vIe0S5//wmQavi6d9omkN2UN3Hgnv+ApONB1oyBhWOvRwO2ezWNFIbb0yVm54WiHCJQss8k411WcjUYWK12HtZ69I2UEA8M+m41KXpmAardVfKej7sNzqCvc2sjOCuw==; _gcl_aw=GCL.1691425229.Cj0KCQjwrMKmBhCJARIsAHuEAPRjqcB7sxFuWHxkjjSuYt-ys44k8oo4lg_db0tRMBVgHak0nuIntBwaAp05EALw_wcB; SPC_U=36092318; SPC_IA=1; SPC_R_T_ID=PkgPoyyxKDN8VEY+FyETBH8GAp0tPE9h7M8dfWnD5npGLN6ARnVtqkSSBT0fXy4aLNPOzmAcZw7+L+ESuOUuw6xqZJZB7/eCXqP2bPL0FFSNnpCn4k9HvMeHwcpdp+xiG+AR2ZKBx79Jux7GiTWz89I7FaGF/Wm0qfR8no3tFOg=; SPC_R_T_IV=N293T2ZuTHI5NXBtVE5uZA==; SPC_T_ID=PkgPoyyxKDN8VEY+FyETBH8GAp0tPE9h7M8dfWnD5npGLN6ARnVtqkSSBT0fXy4aLNPOzmAcZw7+L+ESuOUuw6xqZJZB7/eCXqP2bPL0FFSNnpCn4k9HvMeHwcpdp+xiG+AR2ZKBx79Jux7GiTWz89I7FaGF/Wm0qfR8no3tFOg=; SPC_T_IV=N293T2ZuTHI5NXBtVE5uZA==; _gac_UA-61914164-6=1.1691425230.Cj0KCQjwrMKmBhCJARIsAHuEAPRjqcB7sxFuWHxkjjSuYt-ys44k8oo4lg_db0tRMBVgHak0nuIntBwaAp05EALw_wcB; _hjSessionUser_868286=eyJpZCI6ImNmZmM5YzNkLTE3OWQtNTZiZi1iNjM3LWQ5YmVhYWFjMjhiOCIsImNyZWF0ZWQiOjE2OTE0MjUyMTIzNTAsImV4aXN0aW5nIjp0cnVlfQ==; shopee_webUnique_ccd=eB8RDnEwYYqddrcW4CRwsw%3D%3D%7Cv7aMOVVrAArnd1sLkm2%2BQGqNqYh08aRgXYet5xclREWF1q8OtX2jWOufHGeefoJwtXuS6exW6ks%3D%7CZ339tqdNBEKJ1r9g%7C08%7C3; ds=2aa565d617a5528dd9e7ac9845208dd8; SPC_EC=UXJQNHcxaUtoZjRta0M3dFtbZU4NeRogikBfJMy6omTdwMfM+c5nmEYUBvcHpolmUq9IiCEEtshZG5/EHqmp2Hs5ZlvitDHe/elHMaCd5kndPuM992Hp1fng+NlqlJNMK5wdBcODCyiXwQYClXF+XjGfbIUTykYeZ16O7m76zz8=; _dc_gtm_UA-61914164-6=1; _ga_M32T05RVZT=GS1.1.1691425211.1.1.1691425373.58.0.0; _ga=GA1.1.1843175792.1691425212";

var shopeeReference =
  "https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAPCtVbDjcKOw6NEEH4Vw4sHTmHDlk7DhsKJM8OSCsKJC2fDjmjDlcOqwrTDi0kzdsK3wrd%2Fw4JEwqMcEMKHPSLCngAtKw4gwpDCuMKyOQbDsR55E8KqwrvDncK2Mzt7QMKIKMKawrHDq8KvwrvCqsK%2Bw7oqwo8pYcK1ScOvwr5aFcOzMsK7XcK8wprCpcKGwrfCoA1twrvDtC5fwpbDpXI5w49Xw4tZwqp3wrLCk8KqAsKlw5HDusORwr%2FCpnfDoT%2FCr8OSwrvDuWpew4xXwot1ecKcwqXDnEAbwqzDnMKTw5PDpsOlbcK%2BKMOzw4XCssKcw4%2FDklZWw5A4acK5WmfCqwLDhQVKX1sqDDcHNMKewqXCtMKqwogUwqQCw5oQHz3Dj8OKLMOLM8K0w6PCmsO0Wm03w4QdwpDDnhllIRxLwrZKw5rDjsO7wqTCg1PCijrCocKtwqLCgsKBwrsXJsOJdlQIaAg8wrDDhmrCvgfDgkUtfULDkioGPkLChsOFwpDDtyAwVsKKaWnDm2EFwowmwrUCIArCjFUCw4PDlcK0w5FwwpxNwpJdL8OxWy7CinUxSTZfLsKKAsO%2FLMOKw6XDrX%2FDi8OWH8O4L8OSfRxfScKnZGXCmQkew7nCssOIw4pywr7DjMKKfHXCu1rCrsKwEcOoK2gLwqjDvMO8w7LDvsKdTHbDvHLDusKuTcK%2BwrTCh8OLw6lbwpE0wpfDkzvCnhh%2Bw77DlSbDlcO5T8KxRcO7CjRTwrwzXMK6Qn3DgcOPw6%2FCu2TDo8Kdw7fCl8OTG8O3w7hWJMO3wrvDi8Ope8KewrDDs1vClsKIwq09w7TCgWfCiXEPb0zCskMzwp5sw48%2FHRJFw5HDqcO0I080RhFJwofCql%2FDmsOkwq8fw77DvgNPZ33DrMO%2BYkZJwrFNXsObw7NbfDzDvyZ2w6h0w7o9wqkuwqfCn8OFw7YGbxcTwq7DgFDDnsKQwo5uwoFYw5XDoE13w4Z0w7rDrsOFwovCoTg3DsOLADd7w7ECGH4%2Fw63CqsOuZmfDmsOmwrNaw4nDtmXDmxHCtgN2L8Ktw7lkLMOjw4vDp8KLw5gpw4TCgsOFZi3Dl8OrdcOmPsKDwoxswqDClgpIw4U1wpNWwpgrwpvCsVNXCMORw5AAM1BFwrTDvR8IfsOlZsKcdx0XW8Ovwpt7SX8wFsOuw5DCgjAkHltRQ8OdYXskBMOfeQTCq8O0IMOow6%2FCkcKmw6MdXcK4IsOLw6ZrwpfDoiB0w7jCvXJ5TMOhw4HCgBI4BldGw742w7l8wpVnw4XCvMOANAzCmkXCl8Ojw5HDt8K4wpU%2BTsK8wpXDlUDCmMOkQ3LCs8OUZzzDpMK3wpcWe8KpwoZzP8KiDRV8XsOJcMKwQ8KWw5hIwrppwrBGCsKodsKlEMK2aT4Qw7cOGG%2FDo1Ibw49uw7U2w4RpwoAqQVrCh8KNXsKGwrkpeG3CucOCKBsYwotSw7UsNih1w5dGwq1XwrnCojTDlCDDjsOaeMOhw57DhWHDvMKJw4jCo8KaTBUEOx3DqcKjwq8fwrVGEsOadcONw6HDinLCoMK%2FwrTDlnsSw5ASG8OawofCr2DDj8OZwojDjsO4WsO1w4ULwq81wpYWVMKnwrjCmwcnNzjDl8KVFWTDk1B2wr%2FCkQ9BwrrCsQfCvF3DhMOiBAJBEcOPwrg%2FwrDDvjnCtCLDji3CgRZJwqDCryzCo8OKEHPDqEJTWMODfcOIasO6BsO7w4kxwo7Ci8KfFsOVF307w4zCpcOna1fCiGvCscKDLH0Yw6LDuMOnKsKOZMOEw5V0wrceBMKLSy0kwoY7QMKBw5YDwr7Du3fCvyzCkDcWw5nCuljDjMKidEzDisKdw5QLw6NxccKeG8K5w6XDmnAWYcOTwo9ow77ClAQmwosfE8Kow6DDgcKvwpTDrMKKGhTDlMKgHAzDncKqQ0I4EMO3G8KCw6hGwobCgsKGJsKgw5nCsCjDhsKawrZIw4g6wpg4EMOZwqbDpk0zw63DrsKVwqxuKA7ChlvCoFNpIMK8woDCkMKWCsKMwojDo8KCOMOdwozDsA0JTMKdQsKRwpDCtcK%2BwqEKdsOSMUbCrF8PAsOXS2QWIh3Dh8OhDMOHbjpeDMOxbMKHDRnCoH3CnAANwpHCjMKowo7DrWpBwrkyIyPCgMObw6NGGsKKKFzCrcKLwqzDv0zCqh7DtR%2FCrgnDvFHDscKheVRPw6I%2BF8Otw5rDm8OhAsKHw4jDkcOTwoATw6xsw5svccKXwrvCrAltw4PCuW4ewqw2WAlnd3XCjmdeR2zCnho4DMONZggHwo7Dm8KCKsKHwo%2FCnsKewqMyw6zDmUDDkMOIwo4VQDt6woZfNAjDu0nDpsKONMKtwqgaw7DCv8KRw7REE8Khw6XCqk3Cq8Kvw7HCmsKuwrlRHsKGw4c8CFJDw4%2FCvV7CokEFw5bDqcKlw6PDlsK9w4puFD%2FDqcOFw4fDjMKew5fDr8OpE0HDqMOvw5DCgDLCv8KNwq05HsO%2FAVLDlDoTwpELAAA%3D";

var shopID = 99553806;
var promotionID = 677792027754512;
var voucherCode = "SVC-677792027754512";
var shopOrder =[
  {
    "shop": {
      "shopid": 99553806
    },
    "items": [
      {
        "itemid": 7211259664,
        "modelid": 62120628855,
        "quantity": 1,
        "add_on_deal_id": 0,
        "is_add_on_sub_item": false,
        "item_group_id": null,
        "insurances": [
          {
            "insurance_product_id": "1650882605174767135",
            "name": "Bảo hiểm Quyền lợi tiêu dùng",
            "description": "Giúp bảo vệ bạn khỏi các nguy hiểm, thiệt hại gây ra bởi sản phẩm được bảo hiểm trong quá trình sử dụng.",
            "product_detail_page_url": "https://insurance.shopee.vn/ec/ec-pdp.html?from=mp_checkout&product_id=1650882605174767135",
            "premium": 199900000,
            "premium_before_discount": 199900000,
            "insurance_quantity": 1,
            "selected": false
          }
        ],
        "channel_exclusive_info": {
          "source_id": 0,
          "token": ""
        },
        "supports_free_returns": false
      },
      {
        "itemid": 20406090518,
        "modelid": 210345804736,
        "quantity": 1,
        "add_on_deal_id": 211949834,
        "is_add_on_sub_item": false,
        "item_group_id": "8449211028864138365",
        "insurances": [
          {
            "insurance_product_id": "1650882605174767135",
            "name": "Bảo hiểm Quyền lợi tiêu dùng",
            "description": "Giúp bảo vệ bạn khỏi các nguy hiểm, thiệt hại gây ra bởi sản phẩm được bảo hiểm trong quá trình sử dụng.",
            "product_detail_page_url": "https://insurance.shopee.vn/ec/ec-pdp.html?from=mp_checkout&product_id=1650882605174767135",
            "premium": 499900000,
            "premium_before_discount": 499900000,
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
    ],
    "shipping_id": 1
  }
];
var shippingOrder = [
  {
    sync: true,
    buyer_address_data: {
      addressid: 200030953,
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
      _cft: [33283691, 7528043],
      timestamp: timestamp,
      shoporders: shopOrder,
      selected_payment_channel_data: {
        version: 2,
        option_info: "",
        channel_id: 5002900,
        channel_item_option_info: {
          external_channel_item_id: 112710525,
        },
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

  request(options, function (error, response) {
    if (error) throw new Error(error);
    const data = JSON.parse(response.body);
    // console.log(data);
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
      _cft: [33283691, 7528043],
      timestamp: timestamp,
      shoporders: shopOrder,
      selected_payment_channel_data: {
        version: 2,
        option_info: "",
        channel_id: 5002900,
        channel_item_option_info: {
          external_channel_item_id: 112710525,
        },
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
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const data = JSON.parse(response.body);
    console.log(data);
  });
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

applyVourcher();

var job = new CronJob(
  "59 59 20 * * *",
  function () {
    sleep(628).then(() => {
      applyVourcher();
    });
    job.stop();
  },
  null,
  false,
  "Asia/Ho_Chi_Minh"
);
job.start();
