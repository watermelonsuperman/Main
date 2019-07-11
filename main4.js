//新建main.js文件，编写一个函数，实现以下功能：计算出一个字符串共有多少个单词组成。
function countWords(message){
  // wirte your code here
  var n = 1;
  for(var i = 0;i<message.length;i++){
	  if(message.substr(i,1)==" ")
		  n++;
  }
  console.log(n);
}
countWords('Good morning, I love JavaScript.'); // should return 5
