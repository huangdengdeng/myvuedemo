<template>
  <div>
    <h1>page12</h1>
    <el-row :gutter="24">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-button @click="addTag">添加</el-button>
        </div>
      </el-col>
      <el-col :span="22">
        <div class="grid-content bg-purple">
          <div ref="tagsContext"></div>
        </div>
      </el-col>
    </el-row>
    <div class="grid-content bg-purple">
      <el-button @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
const Util = {
  newTag(tagText) {
    // 创建组件逻辑
    let TagClass = Vue.extend({
      // 向界面渲染的dom方法。
      render(createElement) {
        return createElement(
          "div",
          {
            style: {
              display: "inline-block",
              margin: "3px",
              backgroundColor: "#d9d9d9"
            }
          },
          [
            this.text,
            createElement(
              "input",
              {
                attrs: {
                type: "text"
              },
              // 组件 prop
              props: {
                age: "22"
              }
              }
            ),
            createElement(
              "button",
              {
                on: {
                  click: this.onCloseClick
                }
              },
              "×"
            )
          ]
        );
      },
      methods: {
        onCloseClick() {
          // 移除dom
          this.$el.remove();
          // 然后将删除标签事件暴露除去
          const $data = this.$data;
          console.log($data);
          console.log(this.$props);
          // this.$emit("delete", this.text);
          this.$emit("delete", $data);
        }
      },
      data() {
        return {
          text: tagText // 为这个tag标签使用的文字是传入的标签文字内容
        };
      }
    });
    return new TagClass();
  },
  // 模拟从网络获取tag数据。
  getTagsFromNet() {
    return new Promise(resolve => {
      setTimeout(() => {
        let tags = [];
        for (let i = 0; i < 6; i++) {
          tags.push("标签" + i);
        }
        resolve({
          code: 200,
          data: tags,
          msg: "success"
        });
      }, 2000);
    });
  }
};

export default {
  name: "index",
  data() {
    return {
      tags: [] // 初始化是没有 tag数据的，在页面打开后，通过网络请求获取标签。
    };
  },
  mounted() {},
  created() {
    // 从网络加载tag数据.
    // Util.getTagsFromNet()
    //   .then(result => {
    //     console.log(result);
    //     if (result.code !== 200) {
    //       return Promise.reject(new Error(result.message));
    //     }
    //     // 数据加载成功，将数据赋值给 tags 即可。
    //     this.tags = result.data;
    //     // 拿到了数据，进行渲染：
    //     for (let i = 0; i < this.tags.length; i++) {
    //       this.initTagComponentAndShowTag(this.tags[i]);
    //     }
    //   })
    //   .catch(error => {
    //     window.alert(error.message);
    //   });
  },
  methods: {
    // 添加tag
    addTag() {
      // let tagText = "标签" + this.tags.length;
      // this.tags.push(tagText);
      // this.initTagComponentAndShowTag(tagText);
      let tagText = "标签";
      let tag = Util.newTag(tagText);
      // 添加删除监听
      tag.$on("delete", this.onTagDelete);
      // 挂载组件，即创建虚拟dom。
      tag.$mount();
      this.tags.push(tag.$data);
      // 将组件添加到显示tag的div里面
      this.$refs.tagsContext.appendChild(tag.$el);
    },
    // 有tag被删除
    onTagDelete(tag) {
      // 从数组中移除。
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    // 初始化一个tag组件并且显示到界面上。
    initTagComponentAndShowTag(tagText) {
      let tag = Util.newTag(tagText);
      // 添加删除监听
      tag.$on("delete", this.onTagDelete);
      // 挂载组件，即创建虚拟dom。
      tag.$mount();
      // 将组件添加到显示tag的div里面
      this.$refs.tagsContext.appendChild(tag.$el);
    },
    save() {
      console.log(this.tags);
    }
  }
};
</script>

<style scoped>
</style>
