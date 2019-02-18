const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
	        name: '纸短情长',
	        artist: '朴树',
	        url: 'http://www.ytmp3.cn/down/57805.mp3',
	        cover: 'http://img.ytmp3.cn/image/65.jpg',
	        lrc: 'http://og9ocpmwk.bkt.clouddn.com/%E5%B9%B3%E5%87%A1%E4%B9%8B%E8%B7%AF.txt',
	        theme: '#ebd0c2',
    	},
    	{
            name: '野子',
            artist: '苏运莹',
            url: 'http://www.ytmp3.cn/down/47883.mp3',
            cover: 'http://img.ytmp3.cn/image/70.jpg',
            lrc: 'https://ogd99kckh.qnssl.com/%E9%87%8E%E5%AD%90.txt',
            theme: '#46718b',
        },
        { 
            name: "soulmate", 
            artist: 'zico&iu', 
            url: 'http://www.ytmp3.cn/down/52155.mp3', 
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg', 
        }, 
        { 
            name: '红昭愿', 
            artist: '音阙诗听', 
            url: 'http://www.ytmp3.cn/down/57803.mp3', 
            cover: 'http://img.ytmp3.cn/image/11.jpg', 
        }, 
        { 
            name: '风筝误', 
            artist: '刘珂矣', 
            url: 'http://up.mcyt.net/?down/46644.mp3', 
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg', 
        }

    ]
});
