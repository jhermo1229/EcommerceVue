import Vue from "vue";
import Vuex from "vuex";

import gforce from "../assets/gforce.jpg";
import gr6 from "../assets/gr6.jpg";
import gridClassic from "../assets/gridClassic.jpg";
import kensei from "../assets/kensei.jpg";
import pwr from "../assets/pwr.jpg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wheels: [
      {
        id: 1,
        name: "GForce",
        price: 100,
        url: gforce,
        desc: "shiny",
        comment: ["good", "great"],
        addComment: [],
      },
      {
        id: 2,
        name: "GR6",
        price: 100,
        url: gr6,
        desc: "shiny",
        comment: ["good", "great"],
        addComment: [],
      },
      {
        id: 3,
        name: "Grid Classic",
        price: 100,
        url: gridClassic,
        desc: "shiny",
        comment: ["good", "great"],
        addComment: [],
      },
      {
        id: 4,
        name: "Kensei",
        price: 100,
        url: kensei,
        desc: "shiny",
        comment: ["good", "great"],
        addComment: [],
      },
      {
        id: 5,
        name: "PWR",
        price: 100,
        url: pwr,
        desc: "shiny",
        comment: ["good", "great"],
        addComment: [],
      },
    ],

    cartItemCount: 0,
    cartItems: [],
    addC: ["yes"],
  },
  mutations: {
    addToComment(state, payload) {
      let item = payload;
      // let itemIndex = state.wheels.findIndex((el) => el.id === item.id);
      // state.wheels[item.id - 1].addComment.push({ s });
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
