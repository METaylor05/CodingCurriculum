function startList () 
{
    var userInput = document.getElementById('Names').value;
    var fullNameArray = userInput.split(',');
    var firstLastsArray = userInput.split(' ');
    var sortedArray = fullNameArray.sort(compare);
    console.log(firstLastsArray);
    var ol = document.createElement('ol');
    document.getElementById('namesList').appendChild(ol);
    
    
    if (userInput == "")
        {
                alert('Input name field cannot be blank');
        }
    else
    {
        sortedArray.forEach(function(name)
        {
			var li = document.createElement('li');
			ol.appendChild(li);
			li.innerHTML += name;
		});
    }
    
    
    function compare(a, b) 
    {
        var splitA = a.split(" ");
        var splitB = b.split(" ");
        var lastA = splitA[splitA.length - 1];
        var lastB = splitB[splitB.length - 1];

        if (lastA < lastB) return -1;
        if (lastA > lastB) return 1;
        return 0;
    }
    
    

}

    





