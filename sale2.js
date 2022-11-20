var request = require("request");
var CronJob = require("cron").CronJob;

var request = require("request");
// time to start
var timestamp =  1668488441;

var shopeeCookie =
  'SPC_F=ZVw61ijuMMM9zFBub6etPCCqbQuE6coS; REC_T_ID=3af89e98-3e55-11ec-aa40-069c6f77e402; _fbp=fb.1.1636129632871.768783454; G_ENABLED_IDPS=google; SPC_CLIENTID=WlZ3NjFpanVNTU05nhlsbgiicseqwkzb; _hjSessionUser_868286=eyJpZCI6ImQwNzVhNDUzLTM5NGEtNTZjNS1hZDhjLTMyNjA2YzUwZjBkZiIsImNyZWF0ZWQiOjE2MzcxNTk5OTE0NzcsImV4aXN0aW5nIjp0cnVlfQ==; kk_leadtag=true; _ga_KK6LLGGZNQ=GS1.1.1660497275.11.0.1660497275.0; _fbc=fb.1.1661230073685.IwAR3dKl329jV4Uzq7dNXAaI7wK4Ko_K25wuUAtEzNdKKN_-z3--_oanR4-iQ; _gcl_aw=GCL.1662710060.Cj0KCQjwyOuYBhCGARIsAIdGQRM4zi-cMfNyEDSJYTSJ6VrvU-oPNjXZOEsZ2n2QhXvJWtUhzVx6KI4aAu8uEALw_wcB; _gac_UA-61914164-6=1.1662710064.Cj0KCQjwyOuYBhCGARIsAIdGQRM4zi-cMfNyEDSJYTSJ6VrvU-oPNjXZOEsZ2n2QhXvJWtUhzVx6KI4aAu8uEALw_wcB; SPC_T_ID="bPdP/a8KsN3MEpTbD13/CdrH9aUPjW6wKp8kIFv+C7JLx957HbQVr+TLXAQ/A4fxWvW4kyrZFGSj0LY344ff5TSL7d+ncIQn+Tu41NrlgHs="; SPC_T_IV="DrtSoK2pB6GWF0fa1p8TYA=="; _gcl_au=1.1.895190233.1668110173; __LOCALE__null=VN; csrftoken=90sUGxM5VYxhIF5yZtaHc8CCrUY1RSYk; SPC_SI=e71sYwAAAAAyQXdvYm5oTr1XTwAAAAAAaTNJWGtkYjY=; _QPWSDCXHZQA=7a8156e1-38fd-4e95-ad6e-720979b43770; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.2.1743213704.1668445282; SPC_ST=.NHdZWU5VMm01d2hNZ2U2MmRpE7poA1RrDzCw0HTlzuqgD05o3muVUqhKT3/V9TKuakc7IZG4qzlSjuqskEMuBTN1rJdXtgepWErhhOGFrTNVuhQ+q6xEtaIseGafCpHF8SvfEK+Kv6r+vO8vkp7ck2BndVZgi9CD8vDX6/VrsZbvL7XmBfeqk5R912CNFyGv6D+egpTlMhWkkGOg1SUwMw==; _ga_CGXK257VSB=GS1.1.1668445298.1.0.1668445298.60.0.0; SPC_U=773477074; SPC_R_T_ID=7PB7vXpAozNHEyFeAh1qjYFm8LXLUgbKB6jQ05ARMylK03HdPTFgbBhIfzUcucEX/UtJ2OtQVzm+CXcSD/hpnusUf0LF/Q8ifvQtPJEM10ERubS8zKkCyvISlrZ0Y/CfeIwYfFmbWHubvy71c6SFU3PAu/mpIZtA7808T7/ZoKs=; SPC_R_T_IV=RmxmUlAyTE4xaDBQODF3TA==; SPC_T_ID=7PB7vXpAozNHEyFeAh1qjYFm8LXLUgbKB6jQ05ARMylK03HdPTFgbBhIfzUcucEX/UtJ2OtQVzm+CXcSD/hpnusUf0LF/Q8ifvQtPJEM10ERubS8zKkCyvISlrZ0Y/CfeIwYfFmbWHubvy71c6SFU3PAu/mpIZtA7808T7/ZoKs=; SPC_T_IV=RmxmUlAyTE4xaDBQODF3TA==; SPC_IA=1; _hjid=e4ef9127-61b5-442b-92a2-e83dc6723e04; _hjIncludedInSessionSample=0; _hjSession_868286=eyJpZCI6ImNmZDRkNjI4LWQ0YjYtNDhlZi05ZWY5LTdmZjZmYTljNzNjNSIsImNyZWF0ZWQiOjE2Njg0NDUzMzg5NzcsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; _ga=GA1.1.1343833568.1636129634; shopee_webUnique_ccd=YBRgBNh7kLDfdt%2Ff3UEr%2Fg%3D%3D%7CIZxL%2BIsVU8y%2FiwP9bcmgLUXHJHaVC3h0C0h1FAs7ql4Wg0gP1eE07lbJLwxty8AcWwMJIVv5%2Bn1WP6Tre8VKWFo4emFAqvIzaQ40qg%3D%3D%7CZJqYn%2F6A6ENlcu0z%7C06%7C3; ds=74a281066a0894b2e94615cc4eb8947d; cto_bundle=kJEQOF9SWHFud0xpS2MyTiUyRnZDa2p1ZnBlSnJDNEpvNyUyRndTZFpCVWtwSHlLdmRTdGdhcE5Ya1RGJTJGbVV1Sk5TVE1Qb2J2WExmMjc0V1g3MTJRdE8xeUZzaEJ1dXplV3U3b3dkRlBjVXhqZVhFMWMlMkZVMXNwWUExcTdoSlVkeXVmTUI0UmFyTGRGdXBwYlNwZTF3ajNLNkZmckNpUSUzRCUzRA; _dc_gtm_UA-61914164-6=1; _ga_M32T05RVZT=GS1.1.1668445281.537.1.1668445544.42.0.0; SPC_EC=TjFiUkhENFB2Q2dnSTZ6c6Qp41rTfOfiB+PBECE8t9W9hKeZarYBSPoOEjRKgJc4Svl85g/GmFFdfWMTg2+GPdBFjKda5qjKv5USF7nLMIE2F9ky+J77KMNkEE/ksZmHBKSh1L2O2tDgHOTkQR8w5ixtorrlnZn7fV0x9aBdE10=';


var shopeeReference = "https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAPDrVbCvcKOw6M2EH4VwoFFKmdPP8KWVzZwCMKQZ0gXLAjCmhpbw4xKwqTClsKkHBsLVynCrgzCrg5SHA5XBEjCgEsVYF3CpMOYw6DDnsODb8KSwqEkSsOyw54eDgFSwp4Lw5vCnBkOOcOffDPDg3tCw7nDhsKSw5XDt1HClsKFUXQzI1ZUYCzCq2rCssKKFsKLbD5Pw5NkMSPCplDCtcOSOWjCg8OGw7fDrcKSwqzCul%2FCkcKTw5V1wpJGw7E8C8KPMyIsVMKdwpHDu8OnwpRRwpguF1HClsOEUTojwpXDisKhdMOSOENhGsKlcTzCn8KRwrvChkkrw6wBwo1nwoTDpTlVwpLDpsOASsOqLEN0amgvNcONwpo6w4dkwrVhwqXCgcOuPMK6w5XCqsKpW2PDmcKUJQrCpWk0wpMcw7rCm8O4JcKtwrXDihtuW1MSLcOSMMOLw6Jrwrx4wrJcLsKzZRzCkRnCkcKsAlR%2Be354wqvCgkLCnE8%2FVcOBd8OFw7nDtMKrCCw6w5nCokkOwoZrUVvCocOkYMK5O8KfXgUGw7%2FDisKgLsOOD8K%2FVcOBP8KvP8K8P8Kfw57DsmA9dXXCi8KufkZXbsO5w4oGaMO6RgTCucOCwq3Cpz8Dfj7CvXbDpsOvbCDCt3jDpCzCsMOiw7zDsHcdw6wfH8K4O8OiFxHDsMKiw5XCl8OoRm7Cg0LCnR%2FDvsOiQcOxw6F9UHQSwqsVfsOfNcKPb8Oww6%2FDo8OvwrJwwq7DvwjDssOzw6nCncOcXsOhw609BjlYJkpawrMtw5BGwpcYSWFtbVYvXgx4XcK5BANcw63DpMKLfsOXw5fDuGvCgcK7w5DCnWgjSsO4ZsKjVcO1wrLCqikvwoDDn8Kqw4Z%2BNcKiw7zDsnnCjGvCjcOUaDDCicOpchnCusOPIMKia8OYKA00F8KGwqtGw5rCqcOJwpjDhgvCvhgow7FCwpDDt8KUOCLCi3nDgcKkwoTCksOCwp7Cl8KNETvCoEJuVMOLWMOVaHTDkMOzw4rCqltwKSRIXMOTw5RIcWvDqEYDUA3CtsORw5J4wp%2FCswnCncKzJMKJYsO8wp5fT8OoHMONw5MkwovCknAxTz%2FDh8OnOAzDpwliwrLDuC%2FCvCbDgy7DssKFw55fw6jDvT%2FDk8O7w4Z1eFHDl0Juw5vCvVErw6kPRggPFUhLw73CsTnCs8OMHcK2w4Nxw5ByJMKeEcOVw5LCpcK%2FByHDox3CncK7NAzDo8KlC3EQOnJfbMK5J8KwwrfCoCXDlsOIwoVRN0DClnFyHcKmKcKGYcORw4xvOR7Dm2xXwqrDtcOjb8OVGMKgXMKJIcK4GWkjHsOiw5vCqQYzwqnCh3M%2FwqHDrRB8XsOJwrHDqsK7KDHCj2xdIkYawphxUHTDs2fDrSIYwo%2FCqMOMwrYzL8KBaUkrw4fCgF7ChiFowrhrwoRGH2sYY8OPwo3DtzXCqE1deX3Cr3TDscKXw4wiwqMqfzfDlxFuwrp5w71Ew5TDksKXThUUwpPDqsObSA8Va8KswqLCrMKuw4vDg8KFw6XDkAbDicOGw6xoRwzCn8K7w559DjvDgUciw7plw57Do8OULTfCiCLDqFoLw4d8J8K3WMOMeSPDqcK6ZMO8dsKtw7bCnXTDnRzDsHbCnnbCk2x3worCgcOsBUMgw7HDghstQMOmZjxcGMOEw6XCgMKqw63CtsKEITjCkC5XT8Klwqwsw5XCj8OOS8OrbsKMw7TDtsOAe8KHXR58w7lTwqjCsMKvw7TCucOjTFtqDzXCtGzDocKlaC%2FCnE9XwrDCmwTDoTrDvsOTwpTCtUnDnQ4Fw55OBQfDs8Klw5hxwp%2FDrQc%2Fw63Dv8Ocw5fCtifDqMO0wol2wpDCnMKswqxuw4DDg8KGwpNGwoMxQ8Khw7TDq8K2w4LCosO5Eh96w5nDtcOMS8OHwqDDnEnCvcOQH8OnG0PCqcK2w4JYw4E9LcO7WsKPwp52wpPDicO7EQPDiGHDnw7CrsOwwqLDh2jDmMKAdjR3AxU7C2YPwp%2FCokPCk8OoIMO9wqzCuSnClcKdwrwDw5FsGGVjCiocCcK%2BwoJcwqPDqy7DlsOUCMOMQMOgw6Mkw6HDiFfDpMKuwofCrQLDrcOCRcKOwoHCm8OaVlnChmxIw6J5w5h%2FJsORe8O9w4dtP8KKwrPCj8ONwr16w6LDtzlvwpfCu11%2BwrBUHMK1wod8IcOCVT%2FCvx0RG2NVRcKdw6LDgnHDmztdL2srXsOAABtHYAXDtnvCph3Dkn3Cg8O1w4puZnYtFsObXg5Qwo07wrsHC8OybRJqw6gIKHPCrDzDtwQyE8KNT8KSwoPCl8OlP8OgNV3DgQ9NwrRlwq3DnUvCugHDqMOdOMKJAcOdNcKTXjrDjsONwovDqEbDsRPDsD9lw7bCvH7Dh8KeCMK6woQOwognw4nDgsOnw6J4w7wXwqXDpcKwwoZQDQAA";


var shopID =  59596762;
var promotionID = 492956340977664;
var voucherCode = "THOI20011";

var orderItems =[
  {
    "itemid": 11435440046,
    "modelid": 111810584124,
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
        version: 2,
        option_info: "",
        channel_id: 5002900,
        channel_item_option_info: {
          external_channel_item_id: 109237055,
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
      shipping_orders: [
        {
          sync: true,
          buyer_address_data: {
            addressid: 114955387,
            address_type: 0,
            tax_address: "",
          },
          selected_logistic_channelid: 5001,
          shipping_id: 1,
          shoporder_indexes: [0],
          selected_preferred_delivery_time_option_id: 0,
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
    if(data['promotion_data']['invalid_message'] != ''){
      console.log(data['promotion_data']['invalid_message']);
    }else{
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
        channel_id: 5002900,
        channel_item_option_info: {
          external_channel_item_id: 109237055,
        },
        version: 2,
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
            addressid: 114955387,
            address_type: 0,
            tax_address: "",
          },
          selected_logistic_channelid: 5001,
          shipping_id: 1,
          shoporder_indexes: [0],
          selected_preferred_delivery_time_option_id: 0,
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
// applyVourcher();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// applyVourcher();

var cron = require("node-cron");
var job = new CronJob(
  "40 0 12 * * *",
  function () {
    sleep(800).then(() => {
      applyVourcher();
    });
    job.stop();
  },
  null,
  false,
  "Asia/Ho_Chi_Minh"
);
job.start();
