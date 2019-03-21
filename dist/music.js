const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
	        name: '云烟成雨',
	        artist: '房东的猫',
	        url: 'http://m10.music.126.net/20190321233507/dc973e1e2058a92c4fb8710eab4fa961/ymusic/0ca4/1dd7/df4b/86e8bf58a5a367aad23e84bef976bba3.mp3',
	        cover: 'http://p2.music.126.net/DSTg1dR7yKsyGq4IK3NL8A==/109951163046050093.jpg',
	        lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8-%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB.lrc',
	        theme: '#ebd0c2',
    	},
    	{
            name: '往后余生',
            artist: '马良',
            url: 'http://m10.music.126.net/20190321234033/6cd21ea9ff4996f0c23e1c6a846b12a5/ymusic/5847/20c3/6894/8443e9f00b796c046e122520976835ad.mp3',
            cover: 'http://p2.music.126.net/hTiVEeQTUSsc-YGF3o6ItQ==/109951163337847600.jpg',
            lrc: 'https://ogd99kckh.qnssl.com/%E9%87%8E%E5%AD%90.txt',
            theme: '#46718b',
        },
        { 
            name: "可能否", 
            artist: '木小雅', 
            url: 'http://m10.music.126.net/20190321234330/e073e6a9976508a04374dac77c3d05ed/ymusic/0315/6567/aec4/571c53753324f59988788fe518798f66.mp3', 
            cover: 'http://p2.music.126.net/SJYnDay7wgewU3O7tPfmOQ==/109951163322541581.jpg', 
        }, 
        { 
            name: '山外小楼夜听雨', 
            artist: '任然', 
            url: 'http://m10.music.126.net/20190321234451/c91cb6435fd25ba99c369db17fb3f88a/ymusic/8835/a89d/7149/da6278a722c8c9d37355cc2625759a88.mp3', 
            cover: 'http://p1.music.126.net/L8SZ53Nf5le4JDvG6qVB6g==/1424967072083597.jpg', 
        }, 
        { 
            name: '说散就散',
            artist: '袁娅维',
            url: 'http://m10.music.126.net/20190321234626/9a3f23ecb014ad86c14d4cf7f4125cfd/ymusic/f92c/217d/0b04/dcd03bbe6fa0d90d9c6558b16a95f234.mp3',
            cover: 'http://p1.music.126.net/LSBrAS5oxxQHouvqLDR4lA==/19095218439644352.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '纸短情长',
            artist: '烟把儿',
            url: 'http://m10.music.126.net/20190321234745/d3c1a6a65855b144ee38f4d6246f06af/ymusic/ed1b/ded5/ba47/8f6bec7e55a47fb37c343fa551592ab2.mp3',
            cover: 'http://p1.music.126.net/tbZaE-DjL_BkemynFlL1cQ==/109951163052534918.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '广东十年爱情故事',
            artist: '广东雨神',
            url: 'http://m10.music.126.net/20190321234855/55e97fd35e1208463897b8ee7ac7b1ce/ymusic/3deb/4dbe/76c6/2a25aaff4b6c84b859b4d77f944de57a.mp3',
            cover: 'http://p1.music.126.net/SWDOrvO3f6L8Q1xGPTbb6w==/109951163102543599.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '借我',
            artist: '谢春花',
            url: 'http://m10.music.126.net/20190321235044/7007adf43d6cee3501265a3943ecd3cf/ymusic/6f52/5c4e/f802/afac355d40a1834ca87638eeef6579ce.mp3',
            cover: 'http://p1.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '我曾',
            artist: '隔壁老樊',
            url: 'http://m10.music.126.net/20190321235201/7e28ec44a8f461167ae7c8936101dd09/ymusic/525d/540b/510f/e7403c0f89ca574eea7dfea2ac7601f5.mp3',
            cover: 'http://p2.music.126.net/KK3YNRE9flpcZCYkDS8Z3g==/109951163826159510.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '侧脸',
            artist: '于果',
            url: 'http://m10.music.126.net/20190321235351/6921e9e59e85dbca8eea5c5172feca83/ymusic/40f6/674f/125c/83af64a31bd4b1d82a500771b87ddf3f.mp3',
            cover: 'http://p2.music.126.net/FWR6RWtqhljoKR0QyRhQzQ==/109951163127272432.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        }

    ]
});
