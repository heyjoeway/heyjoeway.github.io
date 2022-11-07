
$(() => {
    // Dice roll!
    let htmlDiceEntities = ["&#x2680;","&#x2681;","&#x2682;","&#x2683;","&#x2684;","&#x2685;"];
    
    function randomElement(arr) {
        return arr[Math.round(Math.random()*arr.length)];
    }
    
    $("#bg-bottom-right").html(randomElement(htmlDiceEntities));
});