/**
 * Created by f2eryy on 2015/3/16.
 */
!function(w,d){
    var fs={
            supportsFullScreen:false,
            isFullScreen:false,
            requestFullScreen:'',
            exitFullScreen:'',
            fullscreenchange:'',
            prefix:''
        },
        aP=['webkit','moz','ms'],	//opera 15 支持全屏是webkit内核
        len=aP.length,
        i=0;
    if(d.exitFullscreen){
        fs.supportsFullScreen=true
    }else{
        for(; i<len; i++){
            if(d[aP[i]+'ExitFullscreen'] || d[aP[i]+'CancelFullScreen']){
                fs.supportsFullScreen=true;
                fs.prefix=aP[i];
                break
            }
        }
    }
    if(fs.supportsFullScreen){
        var p=fs.prefix;
        fs.fullscreenchange=function(fn){
            d.addEventListener(p=='ms' ? 'MSFullscreenChange' : p+'fullscreenchange',function(){
                fn && fn()
            },false)
        };
        fs.fullscreenchange(function(){
            fs.isFullScreen=(function(p){
                switch (p) {
                    case '':
                        return d.fullscreen;
                    case 'webkit':
                        return d.webkitIsFullScreen;
                    case 'moz':
                        return d.mozFullScreen;
                    case 'ms':
                        return d.msFullscreenElement ? true : false
                }
            })(p)
        });
        fs.requestFullScreen=function(elem){
            var elem=elem || d.documentElement;
            try{
                p ? elem[p+'RequestFullScreen']() : elem.requestFullScreen()	//chrome，ff，标准
            }catch(e){
                elem[p+'RequestFullscreen']()	//elem.msRequestFullscreen
            }
        };
        fs.exitFullScreen=function(){
            try{
                p ? d[p+'ExitFullscreen']() : d.exitFullscreen()	//ie，新版chrome或标准
            }catch(e){
                d[p+'CancelFullScreen']()	//老版chrome 火狐
            }
        }
    }
    w.fs=fs
}(window,document);
