export default {
	state: {
        loading: false,
        error: null
    },
	mutations: {
        setLoading (state, playload) {
            state.loading = playload
        },
        setError (state, playload) {
            state.error = playload
        },
        clearError (state) {
            state.error = null
        }
    },
	actions: {
        setLoading ({commit}, payload) {
            commit('setLoading', payload)
        },
        setError ({commit}, payload) {
            commit('setError', payload)
        },
        clearError ({commit}) {
            commit('clearError')
        }
    },    
	getters: {
        loading (state) {
             return state.loading
        },
        error (state) {
            return state.error
        }
    }
    
}
