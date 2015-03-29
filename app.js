$(function()  {

    var currentText = '';
	var pretemp=0;
	var temp=0;
	var result ;
	var operator;
	
	function render()    {
     $('#message').text(currentText);
};

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

$('#btndot').on('click',function() {
  currentText = currentText + '.';
  		render();
});


$('#btnClear').on('click',function()
	{ currentText = ' ' 
	  render()	
		});


$('#btnAdd').on('click',function()
	{
		operator = '+';
		temp =  currentText;
		currentText = temp +' + ';
		render();
		currentText = ''
	});

    $('#btnMinus').on('click',function()
	{
		operator = '-' ;
		temp = currentText;
     	currentText = temp + ' - ';		
     	render();
     	currentText = ''
		
		
	});
	$('#btnMultiply').on('click',function()
	{
		operator = '*' ;

		temp =  currentText ;
	    currentText = temp + ' * ';	
		render();
	    currentText = ''
		
			});
	
	$('#btnDivide').on('click',function()
	{
		operator = '/' ;
		
		
		temp =  currentText;
	    currentText = temp + ' / ';	
		render();
		currentText = ''		
	});

	$('#btnEqual').on('click',function()
	{
		
		switch(operator)
		{
			case '+':
			
				result = parseFloat(temp) + parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				operator=0;
				temp=0;
				result=0;
				break;
			
			case '-':
			
				result = parseFloat(temp) - parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				operator=0;
				temp=0;
				result=0;
				break;
			
			case '*':
			
				result = parseFloat(temp) * parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				
				operator =0;
				temp=0;
				result=0;
				break;
			
			case '/':
			
				result = parseFloat(temp) / parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				
			    operator=0;
				temp=0;
				result=0;
				break;
			
			case 0:
			$('#message').text('')		
		}
		
		
	});


});
