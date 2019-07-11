//新建main.js文件，编写一个函数，实现以下功能：判断一个字符串是否是回文串。（回文，一个字符串从前面读和从后面读都一样，例如：abcba就是回文串。）
function palindrome(message){
var judge = "";
  if(message.length % 2 == 0){
	  for(var i = 0;i<message.length/2;i++){
		  for(var j = message.length-1;j>i;j--){
			  if(message.substr(i,1)==message.substr(j,1))
				  judge = "true";
			  else{
				  jugde = "false";
				  break;
			  }
			  if(jugde = "false")
				  break;	
				  
		  }
	  }
  }else{
	  for(var i = 0;i<message.length/2;i++){
		 j = message.length-i-1;
			  if(message.substr(i,1)==message.substr(j,1))
				  judge = "true";
			  else{
				  judge = "false";
				  break;
			  }
				  
		  
	  }
	  
  }
  console.log(judge);
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
