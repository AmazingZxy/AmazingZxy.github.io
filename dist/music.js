const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
	        name: '云烟成雨',
	        artist: '房东的猫',
            // http://m10.music.126.net/20190323200748/ef8603f2466a0d942a6dc207dc0129cb/ymusic/0ca4/1dd7/df4b/86e8bf58a5a367aad23e84bef976bba3.mp3
	        url: 'http://www.ytmp3.cn/down/48951.mp3',
	        cover: 'http://p2.music.126.net/DSTg1dR7yKsyGq4IK3NL8A==/109951163046050093.jpg',
	        lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8-%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB.lrc',
	        theme: '#ebd0c2',
    	},
    	{
            name: '往后余生',
            artist: '马良',
            url: 'http://www.ytmp3.cn/down/49488.mp3',
            cover: 'http://p2.music.126.net/hTiVEeQTUSsc-YGF3o6ItQ==/109951163337847600.jpg',
            lrc: 'https://ogd99kckh.qnssl.com/%E9%87%8E%E5%AD%90.txt',
            theme: '#46718b',
        },
        { 
            name: "可能否", 
            artist: '木小雅', 
            url: 'https://link.hhtjim.com/163/569214126.mp3', 
            cover: 'http://p2.music.126.net/SJYnDay7wgewU3O7tPfmOQ==/109951163322541581.jpg', 
        }, 
        { 
            name: '山外小楼夜听雨', 
            artist: '任然', 
            url: 'http://www.ytmp3.cn/down/51529.mp3', 
            cover: 'http://p1.music.126.net/L8SZ53Nf5le4JDvG6qVB6g==/1424967072083597.jpg', 
        }, 
        { 
            name: '说散就散',
            artist: '袁娅维',
            url: 'http://www.ytmp3.cn/down/53153.mp3',
            cover: 'http://p1.music.126.net/LSBrAS5oxxQHouvqLDR4lA==/19095218439644352.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '纸短情长',
            artist: '烟把儿',
            url: 'https://link.hhtjim.com/163/516076896.mp3',
            cover: 'http://p1.music.126.net/tbZaE-DjL_BkemynFlL1cQ==/109951163052534918.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '广东十年爱情故事',
            artist: '广东雨神',
            url: 'http://www.ytmp3.cn/down/48255.mp3',
            cover: 'http://p1.music.126.net/SWDOrvO3f6L8Q1xGPTbb6w==/109951163102543599.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '借我',
            artist: '谢春花',
            url: 'http://www.ytmp3.cn/down/34511.mp3',
            cover: 'http://p1.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '我曾',
            artist: '隔壁老樊',
            url: 'http://www.ytmp3.cn/down/59121.mp3',
            cover: 'http://p2.music.126.net/KK3YNRE9flpcZCYkDS8Z3g==/109951163826159510.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        },
        { 
            name: '侧脸',
            artist: '于果',
            url: 'http://www.ytmp3.cn/down/47088.mp3',
            cover: 'http://p2.music.126.net/FWR6RWtqhljoKR0QyRhQzQ==/109951163127272432.jpg',
            lrc: 'http://pnlbqkckx.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF-%E5%88%98%E7%8F%82%E7%9F%A3.lrc',
        }

    ]
});
