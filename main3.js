//新建main.js文件，编写一个函数，实现以下功能：按字母表顺序输出传入的参数字符串。
function alphabetSort(message){
  // wirte your code here
  var  b = new Array(message.length); 
  for(var i = 0;i<message.length;i++){
	  b[i] = message.substr(i,1);
  }
  b.sort();
  var k = "";
  for(var i = 0;i<message.length;i++){
	  k+=b[i];
  }
  console.log(k);
  
}
alphabetSort('hello'); // should return 'ehllo'
