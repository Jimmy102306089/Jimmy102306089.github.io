$(function()  {

    var currentText = '';
	var pretemp=0,temp=0,result ,x;
	function render()

{
     $('#message').text(currentText);
//按下去變數字 同理 用在計算機裡
}
$('#btn1').on('click',function() {
  currentText = currentText + '1';
  		render();
});

$('#btn2').on('click',function() {
  currentText = currentText + '2';
  		render();
});

$('#btn3').on('click',function() {
  currentText = currentText + '3';
  		render();
});

$('#btn4').on('click',function() {
  currentText = currentText + '4';
  		render();
});

$('#btn5').on('click',function() {
  currentText = currentText + '5';
  		render();
});

$('#btn6').on('click',function() {
  currentText = currentText + '6';
  		render();
});

$('#btn7').on('click',function() {
  currentText = currentText + '7';
  		render();
});

$('#btn8').on('click',function() {
  currentText = currentText + '8';
  		render();
});

$('#btn9').on('click',function() {
  currentText = currentText + '9';
  		render();
});

$('#btn0').on('click',function() {
  currentText = currentText + '0';
  		render();
});

$('#btnd').on('click',function() {
  currentText = currentText + '.';
  		render();
});

$('#btnPlus').on('click',function()
	{
		x=1;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
	    currentText = '';
		render();
		}
		else
		{
		temp = pretemp +  parseFloat(currentText);
		currentText = '';
		pretemp=0;
		render();
		}		
	});
$('#btnminus').on('click',function()
	{
		x=2;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
		currentText = '';
		render();
		}
		else
		{
		temp = pretemp -  parseFloat(currentText);
		currentText = '';
		pretemp=0;
		render();
		}		
	});
	$('#btncross').on('click',function()
	{
		x=3;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
	    currentText = '';
		render();
		}
		else
		{
		temp = pretemp *  parseFloat(currentText);
	    currentText = '';
		pretemp=0;
		render();
		}		
	});
	$('#btndivide').on('click',function()
	{
		x=4;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
	    currentText = '';
		render();
		}
		else
		{
		temp = pretemp /  parseFloat(currentText);
		currentText = '';
		pretemp=0;
		render();
		}		
	});
	$('#btnequal').on('click',function()
	{
		
		switch(x)
		{
			case 1:
			if (temp==0) 
			{
				result = pretemp + parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp + parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 2:
			if (temp==0) 
			{
				result = pretemp - parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp - parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 3:
			if (temp==0) 
			{
				result = pretemp * parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp * parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 4:
			if (temp==0) 
			{
				result = pretemp / parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp / parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 0:
			$('#message').text('請輸入數字~')		
		}
		
		
	});
	$('#btnClear').on('click',function()
	{
		if (currentText!='') 
		{
			currentText = '';
			temp = 0;
			x='';
			$('#message').text('0');
		}
		else if(currentText=='')
		{
			$('#message').text('0');
		}
		});


});
