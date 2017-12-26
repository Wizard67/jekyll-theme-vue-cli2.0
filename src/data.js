import ajax from '@/configs/axios'

const state = {
    isFocus: false,
    author: {
        avatar: '/static/images/avatar.jpg',
        links: [
            {
                name: 'github',
                link: ''
            }
        ]
    },
    nav: [
        {
            "column": "Article",
            "categorys": [
                {
                    "category": "category",
                    "items": [
                        {
                            "title": "title",
                            "url": "/"
                        }
                    ]
                }
            ]
        }
    ]
}

const getters = {

}

const mutations = {
    toggleFocus(state) {
        state.isFocus = !state.isFocus
    },
    setNav(state, value) {
        state.nav = value
    }
}

const actions = {
    getNav({dispatch, commit, state}) {
        ajax.get('./api/nav.json')
            .then((res) => commit('setNav', res.data))
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
