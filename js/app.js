new Vue({
	el:'#container',
	data:{
		items:[]
	},
	methods:{
		resetList:function(){
			this.items=[]
		},
		addList:function(){
			var text = this.newList.trim();
			if(text){
				this.items.push({ text:text,style:{} });
				this.newList=''
			}
		},
		del:function(index){
			this.items.splice(index,1)
		},
		done:function(index){			
			this.items[index].style = {
				color:'#909090',
				textDecoration:'line-through'
			};
		}
	}
});