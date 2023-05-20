 var nameOfTheFriendArray = [];
	
	function submit()
	{
        var displayFriendArray=[];
        for (var i=1;1<=5;i++){
            var nameOfTheFriend = document.getElementById("nameOfTheFriend"+i).value;
            console.log(nameOfTheFriend)

            nameOfTheFriendArray.push(nameOfTheFriend);
        }
        


		console.log(nameOfTheFriendArray);

        var lengthOfTheFriendArray=nameOfTheFriendArray.length;



          console.log(lengthOfTheFriendArray);

        for (var j=0; j<lengthOfTheFriendArray; j=j+1){
            displayFriendArray.push("<h4>NAME -"+ nameOfTheFriendArray [j]);
            console.log(displayFriendArray);
        }

        console.log(displayFriendArray)
        document.getElementById("displayNameWithCommas").innerHTML= displayFriendArray
        var removeCommas = displayFriendArray.join("");
        console.log()
		
        document.getElementById("displayNameWithCommas").innerHTML = removeCommas;

        document.getElementById("submitButton").style.display = "none";
        document.getElementById("sortButton").style.display = "inline-block";

	}

function sorting()
{
	nameOfTheFriendArray.sort();
    console.log(nameOfTheFriendArray);
    var displayFriendArraySorting=[];
var lengthOfTheFriendArray= nameOfTheFriendArray.length;
console.log(lengthOfTheFriendArray)
for (var j=0; j<lengthOfTheFriendArray; j=j+1){
    displayFriendArraySorting.push("<h4>NAME -"+ nameOfTheFriendArray [j]);
    console.log(displayFriendArraySorting);
}



var removeCommas = displayFriendArraySorting.join("");
        console.log(removeCommas);
        document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas



	
}