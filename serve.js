/**
 * 計算機サーバ
 *
 * 
 */

const express = require("express");
const app  = express();
const port = 3000;


//-------------------------------------
// ルーティングの設定
//-------------------------------------
// 足し算 その1
app.get("/add", (req, res) =>{
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    formula: `${a}+${b}`,
    result: Number(a) + Number(b)
  });

  console.log("/add へアクセスがありました");
});


// 足し算 その2 (Validation付き)
app.get("/add2", (req, res) =>{
  const a = req.query.a;
  const b = req.query.b;
  let result;

  if( (!isNumberStr(a)) || (!isNumberStr(b)) ){
    result = {
      status: false
    };
  }
  else{
    result = {
      status: true,
      formula: `${a}+${b}`,
      result: Number(a) + Number(b)
    };
  }

  res.json(result);

  console.log("/add2 へアクセスがありました");
});



// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});



/**
 * 数字の文字列か判定する
 *
 * @param  {number}  a
 * @return {boolean}
 */
function isNumberStr(a){
  return( (a !== undefined) && a.match(/^([0-9]{1,})$/) );
}
