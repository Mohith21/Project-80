name_of_the_guest_array=[];
function submit(){
    var display_guest_array = [];
    for(var j=1; j<=4; j++)
    {
        var name_of_the_guest = document.getElementById("name_of_the_guest_"+j).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
        console.log(display_guest_array);
    }
    console.log(name_of_the_guest_array);

    document.getElementById("submit_button").style.display ="none";
    document.getElementById("sort_button").style.display ="inline_block";
}
    function sorting(){
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);
    }