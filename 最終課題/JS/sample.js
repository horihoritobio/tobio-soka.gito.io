function janken(myHand){

    // じゃんけんの手を格納する変数
    var handArray = ["グー", "チョキ", "パー"]
    
    // コンピューターの手をランダムに決める
    console.log("プレイヤーの手は"　+ handArray[myHand])

    // プレイヤーとコンピューターの勝ち負けを判定する
    // Math.randomは，0 以上 1 未満の疑似乱数を生成する
    var random = Math.random() *　100;
    console.log(random)

    // Math.floorは、与えられた引数以下の最大の整数を返す。
    var randomInt = Math.floor(random)
    console.log(randomInt)

    // 生成したランダムな値を3で割った余りをコンピューターの手とする
     var computerHand = randomInt % 3;
     console.log("コンピューターの手は" + handArray[computerHand]);

    //  勝敗結果を保持する変数 (0:アイコ，1：負け，2;勝ち)
    var victory = 0;
    // プレイヤーとコンピューターの勝ち負けを判定する
    // プレイヤーがグーの時
    if(myHand  == 0){
        if(computerHand == 0) {
            victory = 0;
        } else if(computerHand == 1) {
            victory = 1;
        } else if(computerHand == 2) {
            victory = 2
        }
    // プレイヤーがチョキの時
    } else if (myHand == 1) {
        if(computerHand == 0) {
            victory = 1;
        } else if(computerHand == 1) {
            victory = 0
        } else if(computerHand == 2) {
            victory = 2
        }
    // プレイヤーがパーの時
    } else if (myHand == 2) {
        if(computerHand == 0) {
            victory = 2;
        } else if(computerHand == 1) {
            victory = 1;
        } else if(computerHand == 2) {
            victory = 0;
        }
    }



    // 結果を表示する
    var messageArray = ["アイコです" ,"あなたの負けです","あなたの勝ちです"];
    alert("あなたの手は" + handArray[myHand] + ",コンピューターの手は" + handArray[computerHand] + ",なので" + messageArray[victory]);

}