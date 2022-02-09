import Vue from "vue";
import Vuex from "vuex";

import gforce from "../assets/gforce.jpg";
import gr6 from "../assets/gr6.jpg";
import gridClassic from "../assets/gridClassic.jpg";
import kensei from "../assets/kensei.jpg";
import pwr from "../assets/pwr.jpg";
import kbf from "../assets/kbf.jpg";

import gforce1 from "../assets/gforceModels/gforce1.jpg";
import gforce2 from "../assets/gforceModels/gforce2.jpg";
import gforce3 from "../assets/gforceModels/gforce3.jpg";

import gr61 from "../assets/gr6Models/gr61.jpg";
import gr62 from "../assets/gr6Models/gr62.jpg";
import gr63 from "../assets/gr6Models/gr63.jpg";

import grid1 from "../assets/gridModels/grid1.jpg";
import grid2 from "../assets/gridModels/grid2.jpg";
import grid3 from "../assets/gridModels/grid3.jpg";

import kensei1 from "../assets/kenseiModels/kensei1.jpg";
import kensei2 from "../assets/kenseiModels/kensei2.jpg";
import kensei3 from "../assets/kenseiModels/kensei3.jpg";

import pwr1 from "../assets/pwrModels/pwr1.jpg";
import pwr2 from "../assets/pwrModels/pwr2.jpg";
import pwr3 from "../assets/pwrModels/pwr3.jpg";

import kbf1 from "../assets/kbfModels/kbf1.jpg";
import kbf2 from "../assets/kbfModels/kbf2.jpg";
import kbf3 from "../assets/kbfModels/kbf3.jpg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wheels: [
      {
        id: 1,
        name: "ROTA GForce 16 17 18 19 inch Available Lightweight Alloy",
        price: 1020,
        url: gforce,
        desc: "This design is specifically for the Subaru, with a multi-spoke design, and flat face, it has good brake clearances and mild widths/offsets for all Subaru enthusiast.",
        models: [gforce1, gforce2, gforce3],
        comment: [
          {
            author: "DianaMene",
            value: "Very light. Looks bad to use with snow",
          },
          {
            author: "SineadOConnor",
            value: "I like how it looks",
          },
        ],
      },
      {
        id: 2,
        name: "ROTA GR6 16 17 18 19 inch Available Lightweight Alloy",
        price: 1030,
        url: gr6,
        desc: "The Rota GR6 features a clean and classic six-spoke design with a concave profile and curved spokes for better brake calliper clearance. The GR6 is packing tons of character and street cred into any vehicle it is fitted to. The GR6 comes in 18 wheel diameters with a popular PCD of 5x114.",
        models: [gr61, gr62, gr63],
        comment: [
          { author: "LaurenChristy", value: "So far so good" },
          {
            author: "MaddieReyes",
            value: "Good for the price",
          },
        ],
      },
      {
        id: 3,
        name: "ROTA Grid Classic 16 17 18 19 inch Available Lightweight Alloy",
        price: 1040,
        url: gridClassic,
        desc: "Bring back the old school in you, these wheels have stepped dish, clean 6-spoke design that will suit most popular cars with sizes that will fill guards nicely. This wheel will give your vehicle stance.",
        models: [grid1, grid2, grid3],
        comment: [
          {
            author: "PhilCollins",
            value: "Using and loving it for a year now",
          },
          {
            author: "JohnSecada24",
            value: "I would buy another one for my next car",
          },
        ],
      },
      {
        id: 4,
        name: "ROTA Kensei 16 17 18 19 inch Available Lightweight Alloy",
        price: 1050,
        url: kensei,
        desc: "All Rota wheels are cast from high quality alloy in popular styles at an affordable price, designed for street performance driving and tracking racing use. Rota world-class alloy wheels are designed and made from cutting-edge technology, which works all the way from wheel designs, casting and finishing with final inspection to ensure the highest standard within Rota's quality guideline.",
        models: [kensei1, kensei2, kensei3],
        comment: [
          { author: "LisaLoeb99", value: "Dont sleep on this" },
          {
            author: "HughGrant33",
            value: "Good looking",
          },
        ],
      },
      {
        id: 5,
        name: "ROTA PWR 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: pwr,
        desc: "This bold-looking wheel has an extremely concave appearance. The massive 18x10 size is big and extremely wide, so it's great for cars with aftermarket fender flares. 5x100 bolt pattern bolts to all 2002-2014 WRX, plus 2004 WRX STi, and Forester XT, too.",
        models: [pwr1, pwr2, pwr3],
        comment: [
          {
            author: "LebronJames23",
            value: "Will I buy another one? Definitely",
          },
          {
            author: "NobitaNoro",
            value: "Bought one and not having a problem so far",
          },
        ],
      },
      {
        id: 6,
        name: "ROTA KBF 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: kbf,
        desc: "This wheel looks a bit similar to the OEM Subaru BBS wheel found on the 2015-2017 WRX STi. It's the same 18x8.5 size as that wheel, but the +44 offset puts it about 11mm closer to the fender than the OEM wheel. That extra offset has been put to use in making the center cup area slightly concave for some visual drama.",
        models: [kbf1, kbf2, kbf3],
        comment: [
          { author: "JordanMike", value: "Best looking wheels here" },
          {
            author: "GrantHill",
            value: "I would recomment this to my friends",
          },
        ],
      },
    ],

    cartItemCount: 0,
    cartItems: [],
    addC: [],
  },
  mutations: {
    addToComment(state, payload) {
      let item = payload;
      state.addC.push({ c: item.name, d: item.id });
    },
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemCount++;
    },
    removeToCart(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === payload.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex(
            (el) => el.id === payload.id
          );
          if (state.cartItems[itemIndex]["quantity"] !== 0) {
            state.cartItems[itemIndex]["quantity"] -= 1;
            state.cartItemCount--;
          }
          if (state.cartItems[itemIndex]["quantity"] === 0) {
            state.cartItems.splice(itemIndex, 1);
          }
        }
      }
    },
  },

  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeToCart: (context, payload) => {
      context.commit("removeToCart", payload);
    },
    addToComment: (context, payload) => {
      context.commit("addToComment", payload);
    },
  },
});
