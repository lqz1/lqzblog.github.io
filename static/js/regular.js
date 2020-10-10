// 取数字
function  takeArray(worth){
  let outcome = worth.replace(/[^0-9]/ig,"");
  return outcome
}


export {takeArray}

