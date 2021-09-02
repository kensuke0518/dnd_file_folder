const dropbox = document.querySelector('#p-dropbox');
const downloadButton = document.querySelector('#p-dlBtn');

dropbox.addEventListener('dragover', e => {
    e.stopPropagation()
    e.preventDefault()
})
dropbox.addEventListener('dragenter', e => {
    e.stopPropagation()
    e.preventDefault()
})
dropbox.addEventListener('drop', e => {
    e.stopPropagation()
    e.preventDefault()
    const item = e.dataTransfer.items[0] //ここが大事。items[0]に行かなきゃいけない。
    const entry = item.webkitGetAsEntry() //getAsEntry()ではできなかった。
    console.log(entry)

    traverseEntry(entry)
})

let fileArr = []
const traverseEntry = entry => {
    switch (true) {
        //ファイルの場合
        case (entry.isFile): //isFileがtrue
            fileArr.push(entry.fullPath + '\n')
            //console.log(fileArr)
            break;
        //フォルダの場合
        case (entry.isDirectory): //isDirectoryがtrue
            const reader = entry.createReader() //このメソッドはprototypeで継承されているもの //readEntries()メソッドなんてこんなのわからんやん・・・
            reader.readEntries(results => {
                //console.log(results)
                results.forEach(result => {
                    traverseEntry(result)
                })
                /*
                再帰処理。
                ファイルの場合は上のisFileがtrueになって処理を抜ける。
                フォルダの場合はさらにフォルダの中に入ってファイルがないか探すような感じになる。
                めちゃくちゃ良くできてて感心するなこれ
                */
            })
    }
    const blob = new Blob(fileArr, { type: 'text/plain' }) //第一引数は配列でないといけないようだ。
    console.log(blob)
    downloadButton.href = URL.createObjectURL(blob) //URLクラスってのがあるのを初めて知った
    downloadButton.download = 'filelist.txt'
}


//File APIの大半が日本語に翻訳されていないから、この点でもかなり海外の人の方が有利なんだろうなというのを感じる