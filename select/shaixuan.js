var person = [
{name:'张三',src: "./image/touxiang1.jpg" , sex:"male" , des:"帅气的男孩"},
{name:'李四',src: "./image/touxiang2.jpg" , sex:"female" , des:"漂亮的女孩"},
{name:'王五',src: "./image/touxiang3.jpg" , sex:"male" , des:"打球的男孩"},
{name:'小杨',src: "./image/touxiang4.jpg" , sex:"female" , des:"看书的女孩"},
{name:'罗哥',src: "./image/touxiang5.jpg" , sex:"male" , des:"最牛逼的男孩"},
{name:'徐某',src: "./image/touxiang6.jpg" , sex:"female" , des:"淳哥迷妹1号"},
{name:'马某',src: "./image/touxiang7.jpg" , sex:"female" , des:"淳哥迷妹2号"},
{name:'蔡奇',src: "./image/touxiang8.jpg" , sex:"female" , des:"有钱的女孩"},
{name:'周刚',src: "./image/touxiang9.jpg" , sex:"male" , des:"受欺负的男孩"}

]

var oUl = document.getElementById('insert');
var oInp = document.getElementsByTagName('input')[0];
var oBtn = document.getElementById('sex');
render(person)

function render(list){
	var str = '';
	list.forEach(function(ele,index){

		str += '<li>\
 			<img src=' + ele.src + ' alt="">\
 			<span class="name">'+ ele.name +'</span>\
 			<span class="des">'+ ele.des +'</span>\
 		</li>';

	})
	oUl.innerHTML = str;
}
oInp.oninput = function(){
	state.text = this.value;
	render(addFn(obj,person));
}
function fileterText(val,arr){
	var fArr = arr.filter(function(ele,index){
		if(ele.name.indexOf(val) !== -1){
			return true;
		}
	})
	return fArr;
}

oBtn.addEventListener('click',function(e){
	// console.log(e.target.tagName)
	if(e.target.tagName == 'LI'){
		state.sex = e.target.getAttribute('sex');
		document.getElementsByClassName('active')[0].className = '';
		e.target.className = 'active';
		render(addFn(obj,person));
	}
})

function filterSex(sex,arr){
	if(sex == 'all'){
		return arr;
	}else{
		var fArr = arr.filter(function(ele,index){
		if(ele.sex == sex){
			return true;
		}
	})
	return fArr;
	}
}

var obj = {
	text:fileterText,
	sex:filterSex
}
var state = {
	text :'',
	sex : 'all'
}

function addFn(obj,arr){
	var lastArr = arr;
	for(var prop in obj){
		lastArr = obj[prop](state[prop],lastArr)
	}
	return lastArr;
}