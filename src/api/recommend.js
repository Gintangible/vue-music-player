import axios from 'axios';
import { commonParams, options } from './config';

export function getRecommend() {
    const url =
        'api/getRecommend';

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    });

    return axios.get(url, {
        params: data
    }).then(res => {
        return Promise.resolve(res.data);
    })
}

export function getDisc() {
    const url = 'api/getDiss';
    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    });

    return axios
        .get(url, {
            params: data
        })
        .then(res => {
            return Promise.resolve(res.data);
        });
}

export function getDiscSongList(disstid) {
    const url = '/api/getDiscSongList'
  
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      type: 1,
      json: 1,
      onlysong: 0,
      hostUin: 0,
      loginUin: 0,
      notice: 0,
      needNewCode: 0,
      format: 'json',
      g_tk: 999222372,
      disstid
    })
  
    return axios.get(url, {
      params: data
    }).then(res => {
      return Promise.resolve(res.data)
    })
  }
  