const recommend = {
    state: {
        recommendDetailInfo: ''// 推荐页详情信息
    },
    mutations: {
        SET_RECOMMEND_INFO: (state, item) => {
            state.recommendDetailInfo = item;
        }
    },
    actions: {
        setRecommendInfo({commit}, item){
            commit('SET_RECOMMEND_INFO', item);
        }
    }
};

export default recommend;