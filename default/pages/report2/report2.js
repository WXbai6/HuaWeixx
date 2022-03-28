import router from '@system.router';
export default {
    data: {
        maxmin:[{
            iconName:'max',
            mValue:0
                },
            {
                iconName:'min',
                mValue:0
            }],
        average:0
            },
    toNextPage(e){
        switch(e.direction){
            case 'left':
                router.replace({
                    uri:'pages/index/index'
                });
                break;

            case 'bottom':
                router.replace({
                uri:'pages/report1/report1'
                })
        }
    }
}
