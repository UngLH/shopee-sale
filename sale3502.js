var request = require("request");
var CronJob = require("cron").CronJob;

var request = require("request");
// time to start

var shopeeCookie =
  "SPC_F=mGblapOtPDT2FTla4O33rWtuz6M0eVDM; REC_T_ID=c5412ed1-129f-11ee-8e76-2cea7f3d8699; _gcl_au=1.1.1809795767.1687618789; SPC_CLIENTID=bUdibGFwT3RQRFQyobhkemuarwvwrjje; _hjSessionUser_868286=eyJpZCI6IjRkYzQ3NzNkLTI2MDctNTNkNy04N2E4LWZiNTkxNjMxMDg2MCIsImNyZWF0ZWQiOjE2ODc2MjQxNjA1MTYsImV4aXN0aW5nIjp0cnVlfQ==; _med=affiliates; _fbp=fb.1.1688057983008.2093259965; SPC_SI=F62aZAAAAAB5ZmNyWEEzOUu7TAAAAAAAZFVMRUZhcXU=; _gid=GA1.2.326847312.1688621199; SPC_U=190293746; SPC_R_T_ID=rST6zqKHFlYsdo/PUrqVHvGG25+uSIIszfgWmBKeXwn/V8pnrpV2ihMfv10PAzZ654kQWCrNMuQOibkru8hk0B6yBJwOd+vLboVE7am8zEXOfDQc/IYXm87jqWsRDQbXNM+qZIMUzYGC9ZAkbzfdylOpN1ChFq6ZJiI2Y1A8Us8=; SPC_R_T_IV=S3FVVVdDTUdoZm5wcXVVZw==; SPC_T_ID=rST6zqKHFlYsdo/PUrqVHvGG25+uSIIszfgWmBKeXwn/V8pnrpV2ihMfv10PAzZ654kQWCrNMuQOibkru8hk0B6yBJwOd+vLboVE7am8zEXOfDQc/IYXm87jqWsRDQbXNM+qZIMUzYGC9ZAkbzfdylOpN1ChFq6ZJiI2Y1A8Us8=; SPC_T_IV=S3FVVVdDTUdoZm5wcXVVZw==; SPC_ST=.U3B1Y2NzMVROWk0xdkhYbHr2SJt6CnVsyDCwIU4QALYQ+hpvGhuSlOBBrK7Aqc00cacB1uC3CH1htsF76X3Dz+EuU+GGU3+i5m4YkXFiHtndYLPQcJFrKLuK+iJrRy85vFopOUZBWbOz2bK+s425PsbiWePAo3ZyBMfU7qRVtXPLRJybMczHBmuYC9dtY4cKLc//iInAMTlmSjdeuzVzRA==; __LOCALE__null=VN; csrftoken=4PRbgJWXise9Hh9cia5isKFPF3GBuUlQ; SPC_IA=1; _QPWSDCXHZQA=974adae8-17ef-46ec-c9bf-1fc2221b4774; shopee_webUnique_ccd=Dqy4H86TF6qpmpYU1H73Ig%3D%3D%7CrUeuZcI%2FMR3wU0kq3W1ZN6KYP2Xoz5sqZAeKyMYNMD2ebwe9xOqVJM6xLA811dJ7JzDyX%2BFI1O6LD1FjMPFGStHsqiucPpRhMQ%3D%3D%7CkHe8BA2AhemAL0%2Fr%7C06%7C3; ds=26368e410df7d814b9bfd40d7320de0d; _hjSession_868286=eyJpZCI6Ijg0M2JkNmE0LTRiZmYtNGI4Zi1hNGYzLWVhNWRjODRmNGQ2ZSIsImNyZWF0ZWQiOjE2ODg2NTkwODkyNDEsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.393470862.1687618792; _dc_gtm_UA-61914164-6=1; _ga_M32T05RVZT=GS1.1.1688659089.11.1.1688660375.52.0.0; SPC_EC=YWRKS3FGaTY1RFdjMnhhesx0+D5u5k9sOJ1VUP+/jxnQiv2Bc2af9V0tTUh/pNmuGaHGVnzqQdaWoI4kWwg+eyNRJUJwbcuGfha1fElo6S4jjyDSonsms/Ur8nATt3Eg99SCF369ni6Ba7mCcUN3FYoLfsnXCRS1wn0d/dNSJA3m07VtfJdZkbGx2JrJh80E";

var shopeeReference =
  "https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAPDrVZLwo%2FDo0QQw74rwpYPwpzDgsKMwp3Ch8OzwpBWSFw4c0bCq1bDh11OwprCscK7wr3DvQgTwq1yQBzDtsKIw7gFaFhxAMKBw4TClcONMcKIw7%2FCkX9CdcK3w5txwrLCs8OaK0JEI8KNXVVdwq%2FDr8KrasK%2FTklZwpl0w7XDlXw2XmTDk8OJw4tRangDw5rDkMKmTVd5wrFYFEU2KcOmwqNUb2UrFQPCpcORw7rCtX9NV8OhP2fDqWrCmsKNw4fDo8KiKMOmwodRw4oNNMOBw4o9OW0%2Bw44WwotsNsKbFMKLUcOaSAbCtcKXw47Cp8O5ZMKcw6PDkXw5Sl9ZKgw3e8KUwo9Sw4oYwpHCgjDCoDVxwqYZesOVwqTCk2rCuybDjnPCusKqaMKtIQQkGyVtw6vCjcKFwq1rFAptFRUldMKpw4RXw5Iqw4lsacK8acKaFzNMbVxkM8OMZl7DjMOzw4ksHcKlwoI2woDDisOPw4%2FDr8Oew4pkw4vDj8OHw6%2FCmsOkS8K7Px%2FCvxVJfT7CvsOlwonDocKnX23Dgk5%2FwooNw5ozw5DCpcOiwq3DoVLDoMKxL8O4w6ldwpvCrMO9w6HDncO5w7jDhj0%2BwonDpGF7Pn7Dj8KTw7LDtFQmYmPDt8Kdw6NRYsOcw4MbwpNsw5HCjCfCm8OTT8O7RFE8dMO8wpEnGsK9wojCpEXDlS9Nw7LDlw9%2Fw7%2FCgcORw4vDjnfCl8KYUVJswpJXw7bDtMKEwo%2FCp8Ofw4QWDx1%2FT8OYw7nDuMKzw5jDnGF2wrFgBsKGw7LCmsK0dAPDhMKqGjPDnRrDk8Oqw5XDvX3Dn8KcO8KHJ8OAw51Ow5xDwol%2Fwp%2FCtsKswr3Dm8KawqbDvsKsUsKyecORwrTCpMOcQsO5IMKtw7nDpMOSw4YXw483wrFVCMK%2BRcKUFsOLZcOmfsK9wojCrMKhwpIKCMOjwrrClFbCmMKhw4kFwqcrQmjCqMKhNMOAOsOMD0jDlHJLwoXCgMKaw4BjWVvDjXdAwrjCqMKkJ8KlwrQKHXTDhDHDsgEcLClSU8ObFllsNMKpFABRYMKsEjrDuhwNCMK7wpghMWfDi2LCml8RdlLDpMOZNMKfLsKnw7PDvwnDu8OfJcOsw7zDo8KEwp3DvxsIw7vDksKtZcOewrZcbMO8w5nDnEvCusOAw5jCtn0Dw4LCkBjCllFDXcKwHcOucMKPO2Z5Y8OjwpzDjMKWwr4sw6nDicORZcKYYncMPMKawpjDsMOhw6BBasKkwrfCicKOwq0GUkrDnsOnN0p9w5J9woo7aREMw5VXw70BbWjDgsOzw4oSRzHCpMKDUMOQdcKNZSrCoMOaVRPChsOoRsOcHUB%2Fa1fDoCV2wqM3w4FPDVQJw5I4dDsZw5bCpsOgwpXDpQrCvcKswqFvH2duLl8OwpTCum3CosOWwqtcU2pqwpApTUzCuDvDokh6I8OywrQkQwVBIMOiw7x3w73Co8OWSELDm8K2w55fWcO2CyvCrcO0wo4Ew4AjWMKdewY7Xl4IFl9Zw5fCvMOwWmFrQcK1woo7RnvCjHEwwpkVZF3Dk8OyYS0fwoN0bcO3wphdwqTDisKAAkERYzzDrMOLw645QBEHwo9AwoNTw5x1wrbCpMOKEMKzbwMoZcONwr1LNnzCg8OdIMKMw5vCosK3TcO1TcOfw7TCo8OlN8Kta8OEwrUYwoMZw7rDmMO7w7HDjyxOVcOkw5XDsMKLZi%2FDinRlwpTChVgYbm8FWsO3w7zDrsOew73CkGTDi8OpYjlZwozCosOwUsKTC8OUCWPCtDjCkcK1w5xwbXh5NW5ZwpbDn8KOw7HDoGsLw7Nnw7DDqMKvwoTDrGrCuBVUwqAcC8Odw53ChCPCvSfDrsODwo3DhMKxDR3DvcKowrnCrsKlGVxBaMOWw58LFwQaw5zCvzrCmDjDisOZwrrDonU9w6TDgsKVwqzCqinCjlExwr3CtgwbLsOwwqnCoQI9w6JwIcKrw5cXwrLCh3rCh8KHQk%2FDh8Kjw7QbwqpgK8OdfsKJw63CvsOcwrFuw48Tw6nClhpOfMOEw54tw4LDoMOPwrYIXz8IwocBLcKRw7c4AxHDnAbClEMFw7cHwrjDu8OaSEPCkcKzw6PDiTTDq34DwpDCosO%2Bw71rYcKcw6XDr8KbR8O1w4DDr3PDnsKuTzsaw6HDiMK5ZcOWw5MKwonDkHR3wrbCq11WwoQ2IcKuwpsewqsNdsOCw5ldw4XDsXvDmsKtQcK%2FSDjDtGDCl0gHwo7Cq8KfKsOHwo9uwplHZcK4VsODOsOHXcOKAMKaw4vDicOww6XCgkMywqjDnMKtWCtYDcO%2BG0gPNMKRWsKuw5vClH3CjWk6cMKjPMKMwpp5FMKkwoJuU3vCiQYVdlQnwr1cwrNXw5Vdw4Q3WHzDiMOsecO9wo7DnggCwr49AMOjw5k0QnM4w7wDwoQQRsOKNQ0AAA%3D%3D";

var shopID = 345248715;
var promotionID = 662509729693712;
var voucherCode = "FEEL0707M";

var timestamp = 1688694220;

var orderItems = [
  {
    "itemid": 12922249453,
    "modelid": 122622744322,
    "quantity": 1,
    "add_on_deal_id": 210994398,
    "is_add_on_sub_item": false,
    "item_group_id": "210994398",
    "insurances": [],
    "channel_exclusive_info": {
      "source_id": 0,
      "token": ""
    },
    "supports_free_returns": false
  },
  {
    "itemid": 18460926761,
    "modelid": 146209088229,
    "quantity": 1,
    "add_on_deal_id": 210994398,
    "is_add_on_sub_item": true,
    "item_group_id": "210994398",
    "insurances": [],
    "channel_exclusive_info": {
      "source_id": 0,
      "token": ""
    },
    "supports_free_returns": false
  },
  {
    "itemid": 23421426538,
    "modelid": 203797710303,
    "quantity": 1,
    "add_on_deal_id": 0,
    "is_add_on_sub_item": false,
    "item_group_id": null,
    "insurances": [],
    "channel_exclusive_info": {
      "source_id": 0,
      "token": ""
    },
    "supports_free_returns": false
  }
];

var shipping_orders = [
  {
    sync: true,
    buyer_address_data: {
      addressid: 50948938,
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
      shipping_orders: shipping_orders,
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
      _cft: [33283691, 7528043],
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
      shipping_orders: shipping_orders,
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
  "5 0 9 * * *",
  function () {
    sleep(630).then(() => {
      applyVourcher();
    });
    job.stop();
  },
  null,
  false,
  "Asia/Ho_Chi_Minh"
);
job.start();
