import { Select } from "element-ui";
import { valueEquals } from 'element-ui/src/utils/util';
const myElSelect = {
    extends: Select,
    methods: {
        deleteTag(event, tag) {
            console.log('i am myElSelect')
            let index = this.selected.indexOf(tag);
            if (index > -1 && !this.selectDisabled) {
                const value = this.value.slice();
                value.splice(index, 1);
                this.$emit('input', value);
                this.emitChange(value);
                this.$emit('remove-tag', tag.value);
            }
            event.stopPropagation();
        },
        emitChange(val) {
            console.log(val);
            if (!valueEquals(this.value, val)) {
              this.$emit('change', val);
            }
          },
    },
    // render: function (createElement) {
    //     return createElement(
    //         'div',   // tag name 标签名称
    //         // this.$slots.default // 子组件中的阵列
    //         "例子"
    //     )
    // }
}
export default myElSelect;