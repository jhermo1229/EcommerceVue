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

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wheels: [
      {
        id: 1,
        name: "ROTA GForce 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: gforce,
        desc: "This design is specifically for the Subaru, with a multi-spoke design, and flat face, it has good brake clearances and mild widths/offsets for all Subaru enthusiast.",
        models: [gforce1, gforce2, gforce3],
        comment: [
          "Got this on my subie and it really looks great!",
          "Satisfied buyer here",
        ],
      },
      {
        id: 2,
        name: "ROTA GR6 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: gr6,
        desc: "The Rota GR6 features a clean and classic six-spoke design with a concave profile and curved spokes for better brake calliper clearance. The GR6 is packing tons of character and street cred into any vehicle it is fitted to. The GR6 comes in 18 wheel diameters with a popular PCD of 5x114.",
        models: [gr61, gr62, gr63],
        comment: ["Fits perfectly on my Honda", "Good buy guys"],
      },
      {
        id: 3,
        name: "ROTA Grid Classic 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: gridClassic,
        desc: "Bring back the old school in you, these wheels have stepped dish, clean 6-spoke design that will suit most popular cars with sizes that will fill guards nicely. This wheel will give your vehicle stance.",
        models: [grid1, grid2, grid3],
        comment: ["Old school baby! very nice!", "Rota the best"],
      },
      {
        id: 4,
        name: "ROTA Kensei 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: kensei,
        desc: "shiny",
        comment: ["good", "great"],
      },
      {
        id: 5,
        name: "ROTA PWR 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: pwr,
        desc: "shiny",
        comment: ["good", "great"],
      },
      {
        id: 6,
        name: "ROTA KBF 16 17 18 19 inch Available Lightweight Alloy",
        price: 100,
        url: kbf,
        desc: "shiny",
        comment: ["good", "great"],
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
