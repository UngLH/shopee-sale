import { CronJob } from "cron";
import axios from "axios";
import data from "./sale-data.js";

// time to start
const timestamp = 1716952812;

const shopeeCookie =
  "_fbp=fb.1.1706806107542.1420437076; SPC_F=HO3I0GGtP6UCIwHG00KQsKNGHf00kneo; REC_T_ID=b92073de-c121-11ee-a24f-6adc700079fc; SPC_CLIENTID=SE8zSTBHR3RQNlVDotloqchliwmsuaik; _hjSessionUser_868286=eyJpZCI6ImY2NWQ5NmVmLWNkZGItNWQ5NS05NWU4LWJhYzhjMWRmNzc5NSIsImNyZWF0ZWQiOjE3MDY4MDYxMDk5NzksImV4aXN0aW5nIjp0cnVlfQ==; SC_DFP=GEbGonTElIgLqdyhtzJTZwIGPnjLYrQv; __stripe_mid=dea83178-68ac-4396-9769-a53084ed7b90efa63c; _ga_3XVGTY3603=GS1.1.1708357643.2.0.1708357646.57.0.0; language=vi; _ga_FV78QC1144=GS1.1.1709483719.1.0.1709483722.57.0.0; _gcl_au=1.1.1298838005.1715163313; _med=cpc; _gcl_aw=GCL.1715413989.CjwKCAjwrvyxBhAbEiwAEg_KgsuenaSdn4AheKJANL72Ic8VcxjJlg4SynqH2AyYAj4-EsLpqddyABoCuqsQAvD_BwE; _gac_UA-61914164-6=1.1715413991.CjwKCAjwrvyxBhAbEiwAEg_KgsuenaSdn4AheKJANL72Ic8VcxjJlg4SynqH2AyYAj4-EsLpqddyABoCuqsQAvD_BwE; __LOCALE__null=VN; csrftoken=bFe5av7HT1keZmGY8NovRr5PXoQ2h1A8; _sapid=7249f58329824ee65d90d988836a5535acd4bd04db452bbb096875d3; _QPWSDCXHZQA=45f517c3-de80-4f7e-fb57-759bf5cf60b5; REC7iLP4Q=41fd02ba-e485-4bdb-ac17-a966e2f30ffd; SPC_SI=QL04ZgAAAABPcm5vMWsxdfhTNwMAAAAAa1pWNFlVUVg=; SPC_SEC_SI=v1-NWFTb1Y2ZmJXQnVoVzNobSTn6ojGR9fcvREI2aCGaNLxdxTrDrzjrZPf1S99CwtNJBd2BRCRaethpwq78D/ZxK3m2EetkGzkx7XGEyHm2Jw=; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.2.592763063.1716948551; SPC_EC=.Um9LWHdGaWlYM1FvZU1mMqugf3X9Bdox7GI9waE1/0T+S7hQ5KGL4E+NJmiRfMlGLmr+qFyK+l/D/jmLfmYjyl3gZWOv/d0bQx3YndcoLOlGh0PwOTxVJSGPEVNSaJ/gT60hHkw8ZAwO+vzJwbq8i+qrFt1kVm6FXmOR0JUV/3HG798XVX97WcJAXE91FTh+wjUTGKAIHt7UChf5dNfLSg==; SPC_ST=.Um9LWHdGaWlYM1FvZU1mMqugf3X9Bdox7GI9waE1/0T+S7hQ5KGL4E+NJmiRfMlGLmr+qFyK+l/D/jmLfmYjyl3gZWOv/d0bQx3YndcoLOlGh0PwOTxVJSGPEVNSaJ/gT60hHkw8ZAwO+vzJwbq8i+qrFt1kVm6FXmOR0JUV/3HG798XVX97WcJAXE91FTh+wjUTGKAIHt7UChf5dNfLSg==; SPC_U=773477074; SPC_R_T_ID=TqOLwQfuA/tBMYdh5vzohYWHWzc38xfKRHOghCL00ZN9qgeVRZFCcycypKu5cfZ+YatVLQPuRMykVh622OKXKjrf19ZhQkV8HQMC/Zc5yodl/necmVG5I7LNcZiH2EsAXhWpFBcEjcioI06Kg8vqiJa0wSXejmjRnFkW/NTqueQ=; SPC_R_T_IV=Q05uSlZqMTQ3Wmt6UThhZQ==; SPC_T_ID=TqOLwQfuA/tBMYdh5vzohYWHWzc38xfKRHOghCL00ZN9qgeVRZFCcycypKu5cfZ+YatVLQPuRMykVh622OKXKjrf19ZhQkV8HQMC/Zc5yodl/necmVG5I7LNcZiH2EsAXhWpFBcEjcioI06Kg8vqiJa0wSXejmjRnFkW/NTqueQ=; SPC_T_IV=Q05uSlZqMTQ3Wmt6UThhZQ==; _ga=GA1.1.1517927456.1706806110; SPC_CDS_CHAT=fdac21ca-6ab2-4727-9d03-bcb264d38729; _ga_4GPP1ZXG63=GS1.1.1716948550.51.1.1716948659.60.0.0; shopee_webUnique_ccd=9OQWO9te9OKxGl8GJiPfow%3D%3D%7C1qfKD2zxzKYSH0qKlPQxR7tfBlbednjan0LDxjIySd5FdRYsy5L4TzEynjQ2hmWydqVatateLDx8J%2BgVkZk%3D%7Cej7qftMH1XLaXNDj%7C08%7C3; ds=ac5b7cb5e6c8788f43192c63aae3df65";

const shopeeReference =
  "https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAPDrVdNb8OcNhDDvS86w6%2FCgcOUwrd8w401aMKQS1HCtDAIwq40WsKrwqZEwoXCpMOWw54Gw77Drx3CksKiw4TDnTgpAsOkwpDDgMO1w4XDiyE5wpx5w7PDuMKGw7rCnMKwwrY3w4nDnV%2FCtMKmwrQsw6vCosKuDmlZV8O3wofDhAwjaMODw4c5wrnCoxUtwpvCvMOJw4vDvMKQw6gHOUvDlcKBw5LCuMOrwrMbJnfDvsO%2Fw5Ald2leUULCs8O8w6XCkAwGRsK%2Fw4jDvsKywpNFwpNnaUHCi8K0OiTCo8OsQFhjRcKywoo0WUEJWj8tfDLCg8K5w6DCmcKHwoR3HcKTE8OrwoALZlfDksKmSTNSUcKawpd1wprDl3jCgmbDqxrCvRzCmT0lwrnDq8K5w5DDoA9nJyXCl8OZbU1uw7Ymwrhiw5LCi8OiUws2RsOMwrd9w6DDkwTCgsOBcysWPcKcwoENUy9dbnJRLTg%2FBHHCkcKPMMKhw4cEU8OUw4vCjGAYw416BcOAFMKYRU3DqMOOwqgFQ8KIbAxTPQ1HAVt8wq0cI8Kjw53DsHLDmMKBwqpIwo5wN01GI8KgMsKSN2VOScKewpXDvwPCtQLClWZlXsOUWV0VecKEFC3CkWl1woVYZcONwo%2FCgMOKwofDucKLI1VURVnClyVtwq7CkcKqwpFPwphBwprDksK3TcKqeyttw4M8D8OTw4nCp2vDgcO7LnXCozXCqUlZZcKYbMKMMGpewpE2NcKqasO6HwjCk8Ovw4F0WsKEw7gJYcKMGUfCqsKCw5A6wq%2FCsyzDgsKjwq4zUsOmacKDOMK%2BMThyewXDsiLDjcOiw67Dl8OUeDNSw5I0JH8DcMOcXsKyw5RZQEBrwqBjM8K%2FwowwGRbDgsOswrjDoTbCuDM%2BNgbCiQHDoQXCksKzw4HCn2vDnEnCssOnw6TDnhfChMKkDSHCkcORwqJywrXDpXMCw48Gw5TChMKgXi1yV8KVZlVOwrLCtMOCwrQNLgtbcMKowqTCtn7DkMKywqbCh8K2WcOJUTrDlyHDkEUDa8OlYMOxWTFwAG0pwp%2FDpcOSPsKAw5pCw7nDisKsL8OCw6vCky0Sw4cnw54NwpojwrIdw6LDj8K1RcOHw5fDvMOGwrxuQH9HwpvDrX7DtsKoT8Oewo8Awo7DlRvCpQLCtsOabMK%2Bw7BpGRR6OcOCwo5TwrfDkmjCm8OUw7MYZsOdwpQFRXDDk0s1wobCgMOXLVZAY8OTwpfCkhrDocOpw64FwpYyw4XCvk7DqiZHWT0kNwDCvMO7w7DDoX1Kw4jDuzR5ccOEwobDtsKRw4XChzAkUsKgw75aC8K%2BGMOJw7g8wosLwrvCjcOywrU1wrHCt8K9w6jCvT4zT8OYw4DCqTXDgw7DjkPCu1%2FCqDDDrMOWYsO5YcKPwqUENcKrYTLDnm7DpHTDqsKWwokdBW8fwo%2FDssOZW8KPw4sFMwjDlyHCsMOwJUzChDMeL8Otw7rDm8KXw57CoSAXw4Ngw6TCg8Owwq7DtCwYw4dgw4%2FDnAXCjA96wrNow4cHTMO1QcKqw6EfYMKYMsKSAMOVYFbDkMKDAkQNV8OgcS1XwobCmcOLw6wJw5TCisOBwoXDk8OFIzhHIVrCgcK6woXDlhHDpATDncKuVCglCMOiwq1ZAcOqBcOmwrvDiwBGw6PCkcOeQ8OYF20XY1vCtcOXw4jDsMOnLSLDt8K7C1oWNsOFHzDCl8KpDXLDpsOhRcKJRcKfesK7w5XDq8OYwrc0wqQlfsKuVMKHYMOdY8KzJ8Ktw4ZwXBA2IU%2FCgzZDGy7Di8KqVcO0w7bDiRF9XWECHTw7w6EmVxrDqUpkL8KfbSDCqMKMF2Y%2Fw5TCmBbDkkTDisO%2Fwq3DtU%2FDqFo%2BeV3Cs8OowrVqwrhWw4hhw6Qne8KydWUpwr%2FCiH4QIsOmw6LClcKtFxxlw4N%2BG8OGVsOfURDCicOffyPDpMKPwo%2FDrz7DvsKJbBzDucKEwq5RVcOweh3Dt8Kbw6kzwo53e1RRw6%2FCn8K4woIHacKFNQAew6pQwqXDlH4eWTrCoXAwacK7BEpewqDCgXvCvsO9PMK1TV%2FCry3DvcOVa8O7I8KrSlHDr8KzwqzCqMK%2FUcOUw7vDoHbCmcKxwoQQdcOoTcO8UF1RaUPCgUdQwrYww5gVw4E%2BwprCjDRcw5hOwp%2FDpmTDvcKLChUWYMOXw6ttP8OEXcKtXMKsVsKXecO2w6XDsjAdOX7DjcObw7VuSyVUOMOuHkXDqxjDiTDCujLDuVfDnmgfXMOMcW7DtMOHW2s7w6rCq8Kxw6zDo8OhfsKqNsKbfW0Lwos2wojCpcO1dxXCqMOrwrfCtsKdwrrChjfDgEbCsBYpNcOgM8KMK8OLwrHCtSlvw6xDFsODw7rDjMOBN0YHMMOuO8KPw4vDlAlwb1YdwqHDpyd9YXjDtzfDhmPDqcKwb8KyN8OTPE%2FCrMKHw7XCqcOiLBrClG%2FCmsKrdXvDjV7Cp8KxwptvwqrDtsK1ZcKvw49jwoPCvMKBJ8K0IcOBwrfDpD07wrbDslFqwr9mw7zDn8KLf8KxYy91XTPDqsKIaMKGbWJjw7LCv3nDvHYAehMAAA%3D%3D";
const _cft = data._cft;
const shopID = 24710134;
const promotionID = 876320808943616;
const voucherCode = "COOLMTE30";
const shopOrder = data.shoporders;
const shippingOrder = [
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
const headers = {
  accept: "application/json",
  "accept-language": "en-US,en;q=0.9,vi;q=0.8",
  "af-ac-enc-dat": "cbe5a285dee4e0af",
  "content-type": "application/json",
  cookie: shopeeCookie,
  origin: "https://shopee.vn",
  referer: shopeeReference,
  "sec-ch-ua":
    '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
};
const applyVoucherBody = JSON.stringify({
  _cft: _cft,
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
});
function applyVoucher() {
  const options = {
    method: "POST",
    url: "https://shopee.vn/api/v4/checkout/get",
    headers: headers,

    data: applyVoucherBody,
  };

  axios(options)
    .then((response) => {
      const data = response.data;
      console.log(data);
      if (data.promotion_data.invalid_message !== "") {
        console.log(data.promotion_data.invalid_message);
      } else {
        placeOrder(
          data.timestamp,
          data.checkout_price_data,
          data.promotion_data,
          data.shipping_orders
        );
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
}
function placeOrder(
  timestamp,
  checkout_price_data,
  promotion_data,
  shipping_orders
) {
  const options = {
    method: "POST",
    url: "https://shopee.vn/api/v4/checkout/place_order",
    headers: headers,
    data: JSON.stringify({
      client_id: 0,
      cart_type: 0,
      timestamp: timestamp,
      checkout_price_data: checkout_price_data,
      order_update_info: {},
      dropshipping_info: null,
      promotion_data: promotion_data,
      selected_payment_channel_data: {
        version: 1,
        payment_channelid: 59000,
        option_info: "",
        text_info: {},
        ros_opt_in: false,
      },
      shoporders: shopOrder,
      shipping_orders: shipping_orders,
      fsv_selection_infos: [],
      buyer_info: {
        kyc_info: null,
        checkout_email: "",
        spl_activation_status: 0,
        authorize_to_leave_preference: 0,
      },
      disabled_checkout_info: {
        description: "",
        auto_popup: false,
        error_infos: [],
      },
      can_checkout: true,
      _cft: _cft,
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

const job = new CronJob(
  "59 59 23 * * *",
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
