/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function() {

eval("var dropbox = document.querySelector('#p-dropbox');\nvar downloadButton = document.querySelector('#p-dlBtn');\ndropbox.addEventListener('dragover', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n});\ndropbox.addEventListener('dragenter', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n});\ndropbox.addEventListener('drop', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n  var item = e.dataTransfer.items[0]; //ここが大事。items[0]に行かなきゃいけない。\n\n  var entry = item.webkitGetAsEntry(); //getAsEntry()ではできなかった。\n\n  console.log(entry);\n  traverseEntry(entry);\n});\nvar fileArr = [];\n\nvar traverseEntry = function traverseEntry(entry) {\n  switch (true) {\n    //ファイルの場合\n    case entry.isFile:\n      //isFileがtrue\n      fileArr.push(entry.fullPath + '\\n'); //console.log(fileArr)\n\n      break;\n    //フォルダの場合\n\n    case entry.isDirectory:\n      //isDirectoryがtrue\n      var reader = entry.createReader(); //このメソッドはprototypeで継承されているもの //readEntries()メソッドなんてこんなのわからんやん・・・\n\n      reader.readEntries(function (results) {\n        //console.log(results)\n        results.forEach(function (result) {\n          traverseEntry(result);\n        });\n        /*\n        再帰処理。\n        ファイルの場合は上のisFileがtrueになって処理を抜ける。\n        フォルダの場合はさらにフォルダの中に入ってファイルがないか探すような感じになる。\n        めちゃくちゃ良くできてて感心するなこれ\n        */\n      });\n  }\n\n  var blob = new Blob(fileArr, {\n    type: 'text/plain'\n  }); //第一引数は配列でないといけないようだ。\n\n  console.log(blob);\n  downloadButton.href = URL.createObjectURL(blob); //URLクラスってのがあるのを初めて知った\n\n  downloadButton.download = 'filelist.txt';\n}; //File APIの大半が日本語に翻訳されていないから、この点でもかなり海外の人の方が有利なんだろうなというのを感じる\n\n//# sourceURL=webpack://portfolioModules/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;