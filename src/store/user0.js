import { post, get } from "@/api/api.js";
import router from "@/router/router.js";
export default {
  state: {
    sid: "",
    name: "",
    permission: ""
  },
  mutations: {
    SET_SID(state, payload) {
      state.sid = payload;
    },
    SET_NAME(state, payload) {
      state.name = payload;
    },
    SET_PERMISSION(state, payload) {
      state.permission = payload;
    }
  },
  actions: {
    login: async function({ commit }, payload) {
      let res = await post("/login", {
        sid: payload.username,
        password: payload.password
      });
      // console.log(res);
      commit("SET_SID", res.sid);
      commit("SET_NAME", res.name);
      commit("SET_PERMISSION", res.permission);
      router.push(payload.to);
    },
    deleteCookie: function({ commit }) {
      post("/delete-cookie", {});
      // console.log(res);
      router.push("/login");
    }
  }
};
