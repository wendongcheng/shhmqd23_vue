<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="javascript:;">支付中心</a>
            </div>
        </div>

        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <div class="nav-tit pay">
                        <a href="javascript:;" class="selected">支付中心</a>
                    </div>
                    <div class="form-box payment">
                        <div class="el-row">
                            <div class="el-col el-col-18">
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>订 单 号：</dt>
                                            <dd>{{orderInfo.order_no}}</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>收货人姓名：</dt>
                                            <dd>{{orderInfo.accept_name}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>送货地址：</dt>
                                            <dd>{{orderInfo.area}}{{orderInfo.address}}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>手机号码：</dt>
                                            <dd>{{orderInfo.mobile}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付金额：</dt>
                                            <dd>{{orderInfo.order_amount}}元</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付方式：</dt>
                                            <dd>在线支付</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</dt>
                                            <dd>{{orderInfo.message}}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="el-col el-col-6">
                                <img id="imgLogo" src="../../statics/site/images/alipay.png" hidden>
                                <!-- <dzh-qrcode :img_url="img_url"></dzh-qrcode> -->
                                <div id="container2">
                                    <canvas width="400" height="400"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../statics/site/jquery_plugins/qrcode/js/qrcode.js'

export default {
  data() {
    return {
      orderInfo: {},
      timeInterval: -1
    }
  },

  created() {
    clearInterval(this.timeInterval)

    this.getOrderInfoData()
    this.task()
  },

  updated() {
    $('#container2').erweima({
      mode: 4,
      mSize: 26,
      image: $('#imgLogo')[0],
      text: `http://47.106.148.205:8899/site/validate/pay/alipay/${this.$route.query.orderid}`
    })
  },

  methods: {
    task() {
      this.timeInterval = setInterval(() => {
        this.getOrderInfoData()
      }, 3000)
    },

    getOrderInfoData() {
      this.$axios
        .get(`site/validate/order/getorder/${this.$route.query.orderid}`)
        .then(response => {
          if (response.data.message[0].status === 2) {
            this.$router.push({ path: '/paySuccess' })
            return
          }
          this.orderInfo = response.data.message[0]
        })
    }
  },

  beforeDestroy() {
    clearInterval(this.timeInterval)
  }
}
</script>