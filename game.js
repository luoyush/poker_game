function game(){
    var arr = [3,5,7];
    var player = 1;
    while(true){
        var row = parseInt(prompt("请输入" + player + "号玩家拿火柴行数（1-3）\n第1行剩余：" + arr[0] + "；\n第2行剩余：" + arr[1] + "；\n第3行剩余：" + arr[2] +";",""), 10);
        if(isNaN(row) ||row < 1 || row > 3){
            alert("行数错误，请重新输入！");
            continue;
        }
        var count = parseInt(prompt("请输入" + player + "号玩家在第" + row +"行拿火柴数目" + "\n第1行剩余：" + arr[0] + "；\n第2行剩余：" + arr[1] + "；\n第3行剩余：" + arr[2] +";" ,""), 10);
        if(isNaN(row) || isNaN(count) ||row < 1 || row > 3 || count <= 0 || arr[row - 1] < count){
            alert("火柴数目错误，请重新输入！");
            continue;
        }
        arr[row - 1]  = arr[row - 1] - count;
        alert("剩余火柴数目：" + arr);
        if(arr[0] + arr[1] + arr[2] === 1){
            player = player === 1?2:1;
            break;
        }else if(arr[0] + arr[1] + arr[2]){
            player = player === 1?2:1;
        }else{
            break;
        }
    }
    alert(player + "号玩家输了");
}