import ajax from '@/configs/axios'

const state = {
    nav: ""
}

const getters = {

}

const mutations = {
    setNav(state, value) {
        state.nav = value
    }
}

const actions = {
    
    getNav({dispatch, commit, state}) {
        ajax.get(`./api/test.json`, { responseType: 'json' })
            .then((res) => {
                commit('setNav', res.data)
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}