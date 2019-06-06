<template>
	<view class="Modify">
        <view class="form">
            <view><text>旧密码</text><input type="text" placeholder="请填写旧密码" v-model="password"></view>
            <view><text>新密码</text><input type="text" placeholder="请输入新的密码" v-model="newpassword"></view>
            <view><text>确认密码</text><input type="text" placeholder="请再次输入新的密码" v-model="true_new"></view>
        </view>
        <text class="forget" @click="forget">忘记旧密码？</text>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				itemData: {
					"name": "StarSky",
					"job": "店长",
					"phone": "17710595507"										
				}
			}
		},
		onLoad() {
			
		},
		methods: {
			forget() {
				uni.navigateTo({
					url: "/pages/forgot/forgot"
				})
			}
		}
	}
</script>

<style lang="less">
	view {
		box-sizing: border-box;
	}
	.Modify {
		.form {
			background-color: #fff;
			view {
				padding: 30upx 0;
                background: #fff;
                border-bottom: 1upx solid #f2f2f2;
				display: flex;
				text {
					margin-left: 20upx;
				}
                input {
                    margin-left: 40upx;
                }
                input::-webkit-input-placeholder {
                    color: #cbcbcd;
                }
                &:last-child input {
                    margin-left: 25upx;
                }				
			}
		}
		.forget {
            margin-top: 30upx;
            margin-left: 15upx;
            color: #676c8c;			
		}
	}
</style>
