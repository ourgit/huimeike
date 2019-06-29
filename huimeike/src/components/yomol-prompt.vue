<!-- 修改内容模态框组件 -->
<template>
	<view v-if="visible" class="prompt" catchtouchmove="true">
		<view class="prompt-view">
			<view class="prompt-title">{{title}}</view>
			<input v-if="inputType == 'number'" class="prompt-input" auto-height focus type="number" :maxlength="maxlength"
			 placeholder="请输入" v-model="value" :cursor="cursor" @input="onInput" />
			<input v-else-if="inputType == 'digit'" class="prompt-input" auto-height focus type="digit" :maxlength="maxlength"
			 placeholder="请输入" v-model="value" :cursor="cursor" @input="onInput" />
			<input v-else-if="inputType == 'idcard'" class="prompt-input" auto-height focus type="idcard" :maxlength="maxlength"
			 placeholder="请输入" v-model="value" :cursor="cursor" @input="onInput" />
			<textarea v-else class="prompt-input" auto-height focus type="text" :maxlength="maxlength" placeholder="请输入" v-model="value"
			 :cursor="cursor" @input="onInput" />
			<view class="prompt-btns">
				<view class="prompt-cancel" hover-class="hover" hover-start-time="20" @click="onCancel()">{{cancelText}}</view>
				<view class="prompt-sure" :style="{'background-color':themeColor,'border-top': '1px solid ' + themeColor}" @click="onSure()">{{sureText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				visible: false,
				value: '',
				cursor: 0
			}
		},
		props:{
			title: {
				type: String,
				default: '提示'
			},
			defaultValue: {
				type: String,
				default: ''
			},
			maxlength: {
				type: Number,
				default: 18
			},
			inputType: {
				type: String,
				default: 'text'
			},
			func: {
				type: String,
				default: ''
			},
			themeColor: {
				type: String,
				default: '#C40000'
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			sureText: {
				type: String,
				default: '确定'
			}
		},
		watch: {
			defaultValue() {
				this.init()
			}
		},
		methods:{
			init(){
				this.value = this.defaultValue
				this.cursor = this.value == ''? 0:this.value.length
				uni.$on('yomol-prompt',(data)=>{
					setTimeout(()=>{
						this.value = data
					},0)
				})
			},
			show() {
				setTimeout(() => {
					this.init()
					this.visible = true
				}, 100);
			},
			hide(){
				setTimeout(() => {
					this.value = ''
					this.visible = false
					uni.$off('yomol-prompt')
				}, 100);
			},
			onInput(e){
				this.value = e.detail.value
				if(this.value.length == this.maxlength){
					uni.hideKeyboard()
				}
				if(this.func != "" || this.func != null){
					var data = {
						value: this.value,
						callback: 'yomol-prompt',
					}
					uni.$emit(this.func,data)
				}
			},
			onCancel(){
				this.hide()
			},
			onSure(){
				this.$emit('onConfirm', this.value);
				this.hide()
			}
		}
	}
</script>

<style>
	.prompt {
		position: fixed;
		z-index: 6000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
	}
	
	@keyframes mask{
		from{
			background: rgba(0, 0, 0, 0);
		}
		to{
			background: rgba(0, 0, 0, 0.4);
		}
	}
	
	.prompt-view {
		position: absolute;
		top: 20vw;
		width: 80vw;
		margin-left: 10vw;
		background-color: white;
		border: 1px solid #D5D5D5;
		box-shadow: 2px 2px 2px #D5D5D5;
		border-radius: 15upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		animation: view 0.3s;
	}
	
	@keyframes view{
		from{
			opacity: 0;
			transform: scale(0.8);
		}
		to{
			opacity: 1;
			transform: scale(1);
		}
	}

	.prompt-title {
		font-size: 35upx;
		font-weight: 500;
		text-align: center;
		margin-top: 30upx;
	}

	.prompt-input {
		width: 80%;
		margin-top: 20upx;
		font-size: 30upx;
		line-height: 20px;
		padding: 15upx 0 15upx 20upx;
		border-radius: 5upx;
		border: 1px solid #D5D5D5;
	}

	.prompt-btns {
		align-self: flex-end;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
		margin-top: 50upx;
	}

	.prompt-cancel {
		width: 50%;
		padding: 15upx;
		color: #666;
		border-top: 1px solid #E5E5E5;
		border-bottom-left-radius: 15upx;
	}

	.prompt-sure {
		width: 50%;
		padding: 15upx;
		background-color: #C40000;
		color: white;
		border-top: 1px solid #C40000;
		border-bottom-right-radius: 15upx;
	}
	
	.hover{
		background-color: #E4E4E4
	}
</style>
