import router from '@system.router';
var picker1value=null;
var picker2value=null;
var picker1seconds=null;
var picker2seconds=null;
var timer1= null;
var timer2= null;
var timer3= null;
var counter= 0;
export default {
    data: {
        seconds:0,
        isShow:true,
        breath:"吸气",
        percent:"0",
        duration:"",
        count:""
    },
    clickAction(){
        //关闭定时器
        clearInterval(timer1);
        timer1=null;
        clearInterval(timer2);
        timer2=null;
        clearInterval(timer3);
        timer3=null;
        router.replace({
            uri: 'pages/index/index'
        })
    },
    run1(){
        this.seconds--;
        if(this.seconds==0){
            //关闭定时器
            clearInterval(timer1);
            timer1=null;

            this.isShow=false;
        }
    },
    run2(){
         counter++;
         //picker1seconds/picker2seconds   总时长/呼吸频率=总共需要呼吸多少次
        if(counter==picker1seconds/picker2seconds){
             clearInterval(timer2);
             timer2=null;
             this.breath="已完成";
        }else{
            if(this.breath=="吸气"){
                this.breath="呼气";
            }else if(this.breath=="呼气"){
                this.breath="吸气";
            }
        }
    },
    run3(){
           this.percent=(parseInt(this.percent)+1).toString();
           if(parseInt(this.percent)<10){
               this.percent="0"+this.percent;
           }
           if(parseInt(this.percent)==100){
               this.percent="0";
           }
           if(timer2==null){
                clearInterval(timer3);
                timer3=null;
                this.percent="100";
        }
    },
    onInit() {
        console.log("训练页面的onInit()正在被调用");
        console.log("接收到的左边选择器的值："+this.key1);
        console.log("接收到的右边选择器的值："+this.key2);
        picker1value=this.key1;
        picker2value=this.key2;
        if(picker1value=="1"){
           picker1seconds=12;
        }else if(picker1value=="2"){
            picker1seconds=24;
        }else if(picker1value=="3"){
            picker1seconds=36;
        }

        if(picker2value=="较慢"){
            picker2seconds = 6;
        }else if(picker2value=="舒缓"){
            picker2seconds = 4;
        }else if(picker2value=="较快"){
            picker2seconds = 2;
        }

        this.seconds=picker1seconds;

        this.duration=picker2seconds+"s";
        this.count=(picker1seconds/picker2seconds).toString();
    },
    onReady(){
        console.log("训练页面的onReady()正在被调用")
    },
    onShow(){
        console.log("训练页面的onShow()正在被调用")
        //开启定时器
        timer1=setInterval(this.run1,1000);

        //定时器，假设picker2seconds*1000=4000，就是4秒之后执行一次
        timer2=setInterval(this.run2,picker2seconds*1000);
        timer3=setInterval(this.run3,picker2seconds/100*1000);
    },
    onDestroy(){
        console.log("训练页面的onDestroy()正在被调用")
    },
    //声明一个向右滑跳到报告页面的函数
    toReport1Page(e){
        if(e.direction=="right"){
            router.replace({
                uri:"pages/report1/report1"
            })
        }
    }
}
