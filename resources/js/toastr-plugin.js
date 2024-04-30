import 'toastr/toastr.scss';
import toastr from 'toastr';

const ToastrPlugin = {};

ToastrPlugin.install = (Vue) => {
    Vue.mixin({
        beforeCreate() {
            this.$toastr = {
                success: (message) => {
                    toastr.success(message, '', { timeOut: 3000, positionClass: 'toast-top-center' });
                },
                error: (message) => {
                    toastr.error(message, '', { timeOut: 3000, positionClass: 'toast-top-center' });
                },
            };
        },
    });
};

export default ToastrPlugin;
