<template>
  <div>
    <div class="pager">
      <header>
        <h1>短信登录</h1>
        <a href="javascript:history.back(-1)" class="back"></a>
      </header>
      <div class="con" style="height: 575px;">
        <div class="logo"></div>
        <form
          action="https://passport.migu.cn/authn/dynamicpassword"
          method="post"
          class="former J_ValidForm"
          autocomplete="off"
        >
          <div class="form-item">
            <input
              type="tel"
              name="msisdn"
              class="txt"
              placeholder="手机号"
              id="J_Phone"
              autocomplete="off"
              maxlength="11"
              cmcc-clearxid="J_ClearX_651F3E3EE907487B8F4460B4F83E9E7F"
              data-type="phone"
              nullmsg="手机号码不能为空"
              errormsg="手机号码输入错误"
              cmcc-btn="J_GetSmsCode"
            />
            <i
              class="clearX"
              id="J_ClearX_651F3E3EE907487B8F4460B4F83E9E7F"
              style="top: 13px; left: 309px;"
            ></i>
          </div>
          <div
            class="form-item"
            style="display: none;"
            id="J_ImgCodeWrap"
            cmcc-codename="captcha"
            cmcc-typename="imgcodeType"
          >
            <input
              type="hidden"
              class="J_ImgUrl"
              name="imgUrl"
              cmccnum-ajax="https://passport.migu.cn/captcha/graph/risk?imgcodeType=1&amp;showType=0&amp;sourceid=203004"
              cmccch-ajax="https://passport.migu.cn/captcha/graph/risk?imgcodeType=1&amp;showType=1&amp;sourceid=203004"
            />
            <input type="hidden" class="J_TypesHidden" name="imgcodeType" value="1" />
            <input type="hidden" class="J_SlideCodeHidden" name="captcha" />
          </div>
          <div class="form-item">
            <input
              type="tel"
              name="dynamicPassword"
              class="txt txt2"
              placeholder="短信验证码"
              id="J_SmsCode"
              autocomplete="off"
              maxlength="6"
              data-type="msgcode"
              nullmsg="短信验证码不能为空"
              errormsg="短信验证码错误或已失效"
            />
            <input
              type="button"
              class="btn1 disabled"
              id="J_GetSmsCode"
              value="获取验证码"
              cmcc-ajax="https://passport.migu.cn/login/dynamicpassword"
            />
          </div>
          <div class="form-btn">
            <input type="submit" value="登录" class="submit" />
          </div>
          <input type="hidden" name="sourceID" value="203004" />
          <input type="hidden" name="appType" value="2" />
          <input type="hidden" name="relayState" value="login" />
          <input type="hidden" class="J_FingerPrint" name="fingerPrint" value />
          <input type="hidden" class="J_FingerPrintDetail" name="fingerPrintDetail" value />
        </form>
        <div class="link-wrap accountP">
          <a
            href="https://passport.migu.cn/login?sourceid=203004&amp;apptype=2&amp;forceAuthn=true&amp;isPassive=false&amp;authType=MiguPassport&amp;passwordControl=0&amp;display=web&amp;referer=null&amp;logintype=4&amp;qq=null&amp;weibo=null&amp;alipay=null&amp;weixin=null&amp;andPass=null&amp;phoneNumber=&amp;callbackURL=http%3A%2F%2Fmovie.miguvideo.com%2Flovev%2FmiguMovie%2FpersonCenter%2Fmine%2Fmine.jsp%23&amp;relayState=login"
          >帐密登录</a>
        </div>
      </div>
      <footer style="position: static; left: auto; bottom: auto;">
        <div class="thirty-party">
          <a
            href="https://passport.migu.cn/andPassLogin?sourceid=203004&amp;appType=2&amp;relayState=login&amp;callbackURL=http%3A%2F%2Fmovie.miguvideo.com%2Flovev%2FmiguMovie%2FpersonCenter%2Fmine%2Fmine.jsp%23"
            class="hpass"
          ></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  border-bottom: 1px solid #eef1f3;
  background-color: #fff;
  z-index: 200;
  h1 {
    font-size: 1.125rem;
    font-weight: normal;
    text-align: center;
  }
}
header .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.125rem;
  height: 2.75rem;
  cursor: pointer;
}
</style>
