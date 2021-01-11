<!--
 * @Author: wangxy
 * @Date: 2021-01-06 00:03:38
 * @LastEditTime: 2021-01-06 21:54:26
 * @LastEditors: Please set LastEditors
 * @Description: 登录弹窗
 * @FilePath: \novel\src\components\login.vue
-->
<template>
  <div>
    <el-dialog
      v-if="dialogVisibleRole"
      :visible.sync="dialogVisibleRole"
      append-to-body
      :close-on-click-modal="false"
      width="400px"
    >
      <div class="loginDialog" style="text-align: center">
        <ul class="wayToLogin">
          <li class="selected"><a href="javascript:void(0);">账号登录</a></li>
          <li><a href="javascript:void(0);">QQ登录</a></li>
          <li><a href="javascript:void(0);">微信登录</a></li>
        </ul>
        <el-form v-if="logini[0]">
          <el-form-item>
            <el-input
              placeholder="手机/邮箱/用户名"
              prefix-icon="el-icon-user-solid"
              v-model="input2"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="密码"
              prefix-icon="el-icon-lock"
              v-model="input3"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="advanced">
            <div>
              <el-checkbox label="自动登录" name="autologin"></el-checkbox>
            </div>
            <p><a href="javascript;">忘记密码</a></p>
          </el-form-item>
          <el-form-item class="other">
            <el-button type="primary" @click="" class="loginbtn"
              >登 录</el-button
            >
          </el-form-item>
          <p>
            <a href="javascript:">手机验证码登录</a>|<a href="javascript:"
              >免费注册</a
            >
          </p>
          <div>
            <span class="accept"
              >登录即代表同意<a href="javascript;">《用户服务协议》</a> 和<a
                href="javascript;"
                >《隐私政策》</a
              ></span
            >
          </div>
        </el-form>
        <el-form v-if="logini[1]">
          <span class="qqicon"></span>
          <p style="margin: 30px 0 10px 0">您将转跳至指定页面进行登录操作。</p>
          <el-form-item class="other">
            <el-button type="primary" @click="" class="loginbtn"
              >前去登录QQ</el-button
            >
          </el-form-item>
          <div>
            <span class="accept"
              >登录即代表同意<a href="javascript;">《用户服务协议》</a> 和<a
                href="javascript;"
                >《隐私政策》</a
              ></span
            >
          </div>
        </el-form>
        <el-form v-if="logini[2]">
          <div id="div_weixinlogin" style="height: 280px">
            <iframe
              name="ui_weixinwraplogin"
              id="ui_weixinwraplogin"
              allowtransparency="true"
              scrolling="no"
              frameborder="0"
              width="100%"
              height="90%"
              style="top: 0px; left: 0px; border-radius: 5px; display: inline"
              src="https://ptlogin.yuewen.com/login/weixinlogin?appId=10&amp;areaId=1&amp;source=&amp;returnurl=https%3A%2F%2Fwww.qidian.com%2FloginSuccess%3Fsurl%3Dhttps%253A%252F%252Fwww.qidian.com%252F&amp;version=&amp;imei=&amp;qimei=&amp;target=iframe&amp;ticket=1&amp;autotime=30&amp;jumpdm=yuewen&amp;ajaxdm=yuewen&amp;auto=1&amp;sdkversion=&amp;popup=1&amp;&amp;domain=passport.yuewen.com&amp;target=iframe&amp;popup=1"
            ></iframe>
          </div>
          <div>
            <span class="accept"
              >登录即代表同意<a href="javascript;">《用户服务协议》</a> 和<a
                href="javascript;"
                >《隐私政策》</a
              ></span
            >
          </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "login",
  data() {
    return {
      logini: [true, false, false],
      dialogVisibleRole: true,
      input2: "",
      input3: "",
    };
  },
  methods: {},
  mounted() {
    let that = this;
    $(function () {
      $(".wayToLogin>li").click(function () {
        $(this).addClass("selected");
        $(this).siblings("li").removeClass("selected");
        let index = $(this).index();
        that.logini = [false, false, false];
        that.logini[index] = true;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.qqicon {
  display: block;
  width: 107px;
  height: 128px;
  margin: 10px auto;
  background-image: url("https://sta.gtimg.com/qd6/images/qq_2x.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.wechatCode {
  display: block;
  width: 107px;
  height: 128px;
  margin: 10px auto;
  background-image: url("https://open.weixin.qq.com/connect/qrconnect?appid=wx3b20af53872b38eb&scope=snsapi_login&response_type=code&redirect_uri=https%3A%2F%2Fptlogin.yuewen.com%2Flogin%2Fweixincallback%3Freturnurl%3Dhttps%253A%252F%252Fwww.qidian.com%252FloginSuccess%253Fsurl%253Dhttps%25253A%25252F%25252Fwww.qidian.com%25252F%26appid%3D10%26areaid%3D1%26jumpdm%3Dyuewen%26popup%3D1%26ajaxdm%3Dyuewen%26target%3Diframe%26ticket%3D1%26ish5%3D0%26auto%3D1%26autotime%3D30&state=STATE&self_redirect=true&popup=1&href=https%3A%2F%2Fsta.gtimg.com%2Fqd6%2Fcss%2Fweixin.css");
  background-size: 100%;
  background-repeat: no-repeat;
}
ul {
  z-index: 10;
  position: absolute;
  top: -35px;
  left: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  li {
    padding: 10px 20px;
    border-bottom: 2px rgb(209, 209, 209) solid;
  }
  li:hover {
    border-bottom: 2px rgb(134, 134, 134) solid;
  }
  li.selected {
    a {
      color: rgb(102, 153, 153);
      font-weight: bolder;
    }
    border-bottom: 2px rgb(102, 153, 153) solid;
  }
}
.loginDialog {
  position: relative;
  padding: 30px 15px 0px 15px;
  .accept {
    display: inline-block;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .loginbtn {
    width: 100%;
  }
  .advanced {
    font-size: 12px;
    margin-top: -17px;
    div {
      float: left;
    }
    p {
      float: right;
    }
  }
  .other {
    margin-bottom: 10px;
  }
  .el-button--primary {
    color: #fff;
    background-color: rgb(102, 153, 153);
    border-color: rgb(102, 153, 153);
  }
}
</style>