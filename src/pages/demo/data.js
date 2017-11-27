import ajax from '@/configs/axios'

const state = {
    content: ""
}

const getters = {

}

const mutations = {
    setContent(state, value) {
        state.content = value
    }
}

const actions = {
    getContent({dispatch, commit, state}, route) {
        ajax.get(`./demos/${route.params.title}.html`)
            .then((res) => {
                commit('setContent', res.data)
            })
    }
}

export default {
    namespace: 'demo',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}