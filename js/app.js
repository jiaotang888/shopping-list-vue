new Vue({
	el:'#container',
	data:{
		items:[
		{text:'TEST-A',style:{}},
		{text:'TEST-B',style:{}}
		]
	},
	methods:{
		resetList:function(){
			this.items=[]
		},
		addList:function(){
			var text = this.newList.trim();
			if(text){
				this.items.push({text:text});
				this.newList=''
			}
		},
		del:function(index){
			this.items.splice(index,1)
		},
		done:function(index){
			var style = {
				color:'#909090',
				textDecoration:'line-through'
			};
			this.items[index].style = style
		}
	}
});