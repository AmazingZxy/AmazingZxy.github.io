const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
	        name: '平凡之路',
	        artist: '朴树',
	        url: 'http://og9ocpmwk.bkt.clouddn.com/%E5%B9%B3%E5%87%A1%E4%B9%8B%E8%B7%AF.mp3',
	        cover: 'https://ogd99kckh.qnssl.com/1.jpg',
	        lrc: 'http://og9ocpmwk.bkt.clouddn.com/%E5%B9%B3%E5%87%A1%E4%B9%8B%E8%B7%AF.txt',
	        theme: '#ebd0c2',
    	},
    	{
            name: '野子',
            artist: '苏运莹',
            url: 'http://og9ocpmwk.bkt.clouddn.com/01%20%E9%87%8E%E5%AD%90.m4a',
            cover: 'http://og9ocpmwk.bkt.clouddn.com/%E9%87%8E%E5%AD%90.jpg',
            lrc: 'https://ogd99kckh.qnssl.com/%E9%87%8E%E5%AD%90.txt',
            theme: '#46718b',
        },
        { 
            name: "PDD洪荒之力", 
            artist: '徐梦圆', 
            url: 'http://up.mcyt.net/?down/39868.mp3', 
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg', 
        }, 
        { 
            name: '9420', 
            artist: '麦小兜', 
            url: 'http://up.mcyt.net/?down/45967.mp3', 
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg', 
        }, 
        { 
            name: '风筝误', 
            artist: '刘珂矣', 
            url: 'http://up.mcyt.net/?down/46644.mp3', 
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg', 
        }

    ]
});
