const state = {
    sidebarOpened: false,
    isShowDialog: false,
    fresh: 0,
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebarOpened = !state.sidebarOpened;
    },
    TOGGLE_DIALOG: state => {
        state.isShowDialog = !state.isShowDialog;
    },
    FRESH: state => {
        state.fresh++;
    },

}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}