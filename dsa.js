1.

function getPairsCount(arre, n, sum) {
	let count = 0;

	for (let i = 0; i < n; i++)
		for (let j = i + 1; j < n; j++)
			if (arre[i] + arre[j] == sum)

				count++;

	return count;
}


let arre = [1, 5, 7, -1, 5];
let n = arre.length;
let sum = 6;
document.write("Count of pairs is "
	+ getPairsCount(arre, n, sum));

2.

class Stack {
  constructor(){
    this.items = []
    this.size = 0
    this.Push = function(item){
      this.items.push(item)
      this.size += 1
    }
    this.Pop = function(){
      this.size -= 1
      return this.items.pop()
    }
    this.Peek = function(){
      console.log(this.items[this.size-1])
    }
  }
}

var stack = new Stack();

var arr = [13, 11, 8, 4, 19, 22]
var res = []

for(var i=0;i<arr.length;i++){
  stack.Push(arr[i])
}

console.log(stack.items)

for(var i=0;i<arr.length; i++){
  res.push(stack.Pop())
}

console.log(res) 

3.



function checkString(s1, s2, indexFound, Size){
	for(let i = 0; i < Size; i++)
	{
	
		if(s1[i] != s2[(indexFound + i) % Size])return false;

	return true;
}

// driver code
// let s1 = "abcd";
// let s2 = "cdab";

if(s1.length != s2.length)
{
	document.write("s2 is not a rotation on s1");
}
else
{
	
	let indexes = []; 
	let Size = s1.length;
	let firstChar = s1[0];
	for(let i = 0; i < Size; i++)
	{
		if(s2[i] == firstChar)
		{
			indexes.push(i);
		}
	}

	let isRotation = false;

	for(let idx of indexes)
	{
		isRotation = checkString(s1, s2, idx, Size);

		if(isRotation)
			break;
	}

	if(isRotation)document.write("s2 is rotation of s1")
	else document.write("s2 is not a rotation of s1")
}
}

// This code is contributed by shinjanpatra

4.
const string = "geeksforgeeks";
let index = -1;
let fnc = ' ';
for (let i of string) {
	if (string.split(i).length - 1 === 1) {
		fnc = i;
		break;
	} else {
		index += 1;
	}
}
if (index === 1) {
	console.log("Either all characters are repeating or string is empty");
} else {
	console.log(`First non-repeating character is ${fnc}`);
}

5.


function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
		if (n == 0)
		{
			return;
		}
		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
		document.write("Move disk " + n + " from rod " + from_rod +
		" to rod " + to_rod+"<br/>");
		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
	}

	var N = 3;
	
	towerOfHanoi(N, 'A', 'C', 'B');

6.
	
	function isOperator(x) {

		switch (x) {
			case '+':
			case '-':
			case '/':
			case '*':
				return true;
		}
		return false;
	}

function postToPre(post_exp) {
	let s = [];

	let length = post_exp.length;

	for (let i = 0; i < length; i++) {

		if (isOperator(post_exp[i])) {

			let op1 = s[s.length - 1];
			s.pop();
			let op2 = s[s.length - 1];
			s.pop();

			let temp = post_exp[i] + op2 + op1;

			s.push(temp);
		}

		else {

			s.push(post_exp[i] + "");
		}
	}

	let ans = "";
	while (s.length > 0)
		ans += s.pop();
	return ans;
}

let post_exp = "ABC/-AK/L-*";

document.write("Prefix : " + postToPre(post_exp));

	7.
function result_expression(expression, variables) {

	let opernads = ['+', '-', '*', '/'];
let arr = [...expression.split(" ")];

	var len = arr.length;

	while (len > 0) {


		let d1 = arr[len - 1]
		let d2 = arr[len - 2]
		let d3 = arr[len - 3]


		if (opernads.includes(d3)) {

			if (isNaN(d2)) {

				let tmp = variables[d2]
				d2 = tmp;
			}
			if (isNaN(d1)) {

				let tmp1 = variables[d1]
				d1 = tmp1;
			}


			let a = d2.toString().concat(d3).concat(d1)

			delete arr[len - 1]
			delete arr[len - 2]
			delete arr[len - 3]

			let na = [];

			arr[len - 3] = eval(a)

			arr.forEach(e => {

				if (!(typeof e === 'undefined')) {

					na.push(e)
				}
			})

			arr = [...na]

			console.log('arr', arr)

			len = arr.length;

		} else {len--}
		if (len == 1) {
			return arr[0]
		}
	}
}


let expression = "+ * 6 5 3 2 2";





let variables = { a: 20, b: 1 }
let k = result_expression(expression, variables);

console.log('finalresult', k)
8.

	

	function areBracketsBalanced(expr) {

		let stack = [];

		for (let i = 0; i < expr.length; i++) {
			let x = expr[i];

			if (x == '(' || x == '[' || x == '{') {

				stack.push(x);
				continue;
			}

			if (stack.length == 0)
				return false;

			let check;
			switch (x) {
				case ')':
					check = stack.pop();
					if (check == '{' || check == '[')
						return false;
					break;

				case '}':
					check = stack.pop();
					if (check == '(' || check == '[')
						return false;
					break;

				case ']':
					check = stack.pop();
					if (check == '(' || check == '{')
						return false;
					break;
			}
		}

		return (stack.length == 0);
	}

let expr = "([{}])";

if (areBracketsBalanced(expr))
	document.write("Balanced ");
else
	document.write("Not Balanced ");

9.


let st = [1,2,3,4,5];
function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
			let a = st.pop();
			insert_at_bottom(x);
			st.push(a);
	}
	
	
}
function reverse()
{
	if(st.length > 0)
		{
			
			let x = st.pop();
			reverse();
			
			insert_at_bottom(x);
		}
}

st.push('1');
st.push('2');
st.push('3');
st.push('4');

document.write("Original Stack<br>");

document.write(st.join(" ")+"<br>");

reverse();

document.write("Reversed Stack<br>");
document.write(st.join(" "));

10.

numbers = [10, 22, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 0; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }

  console.log(smallest);
}
