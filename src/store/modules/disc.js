import Cookie from 'js-cookie';

const disc = {
    state: {
        discInfo: Cookie.get('discItem') || '' // 推荐页详情信息
    },
    mutations: {
        SET_DISC_INFO: (state, item) => {
            state.discInfo = item;
        }
    },
    actions: {
        setDisc({ commit }, item) {
            Cookie.set('discItem', item);
            commit('SET_DISC_INFO', item);
        }
    }
};

export default disc;
