export default class Song {
    constructor({ id, mid, singer, name, album, duration, image, url }) {
        this.id = id;
        this.mid = mid;
        this.singer = singer;
        this.name = name;
        this.album = album;
        this.duration = duration;
        this.image = image;
        this.url = url;
    }
}

export function getSongInfo(item) {
    return new Song({
        id: item.songid,
        mid: item.songmid,
        singer: filterSinger(item.singer),
        name: item.songname,
        album: item.albumname,
        duration: item.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`,
        //url: `http://ws.stream.qqmusic.qq.com/${item.songid}.m4a?fromtag=46`
        url: `http://fs.w.kugou.com/201904121007/073c546b5fa8304ec5df3fc542f5afc7/G146/M07/02/14/cpQEAFwqEt2AMf4dACiMsITsnwk265.mp3`
    });
}

export function filterSinger(singer) {
    let ret = [];
    if (!singer) return '未知';

    singer.forEach(item => {
        ret.push(item.name);
    });

    return ret.join('/');
}
