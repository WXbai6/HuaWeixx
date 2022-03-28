import router from '@system.router';
var counter = 3;
var timer = null;

var pv1=null;
var pv2=null;
export default {
    data: {
        imgsrc: "",
        seconds: ""
    },
    run(){
        counter = counter-1;
        if(counter!=0){
          this.imgsrc="/common/"+counter.toString()+".png";
          this.seconds=counter.toString();
       }else{
            this.imgsrc="";
            this.seconds="";
            clearInterval(timer);
            timer=null;
            //页面跳转，传递数据
            router.replace({
                uri:"pages/training/training",
                params:{"key1":pv1,"key2":pv2}
            })
        }
    },
    onInit(){
        pv1=this.data1;
        pv2=this.data2;
        this.imgsrc="/common/"+counter.toString()+".png";
        this.seconds=counter.toString();
    },
    onShow(){
        timer=setInterval(this.run,1000);
    }
}
