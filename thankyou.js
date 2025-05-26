'use strict'; /* 厳格にエラーをチェック */
// クラスの付け外しのみ
const text = document.querySelector('.text');

text.classList.add('is-active');

setTimeout(() => {
  text.classList.toggle('is-active');
}, 3000);








