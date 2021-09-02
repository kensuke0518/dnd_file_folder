const aaa = document.querySelector('#aaa');
const list = document.querySelector('#list')
aaa.addEventListener('dragover', e => {
    e.stopPropagation();
    e.preventDefault();
})
document.addEventListener('drop', e => {
    e.stopPropagation();
    e.preventDefault();

    const dataTransfer = e.dataTransfer;
    if (dataTransfer && dataTransfer.items) {
        var items = dataTransfer.items,
            len = items.length;
        if (len === 1) {
            let item = items[0]
            let entry;
            if (item.getAsEntry) {
                entry = item.getAsEntry();
            }
            else if (item.webkitGetAsEntry * 1) {
                entry = item.webkitGetAsEntry();
            }
            console.log(entry)
            traverseEntry(entry);
        }
        else {
            alert('フォルダを1つだけドロップしてください')
        }
    }
    function traverseEntry(entry) {
        console.log(entry)
        //if,else文の代用としてswitch(true)
        switch (true) {
            case (entry.isFile):
                listString += entry.fullPath + '\n';
                break;
            case (entry.isDirectory):
                const reader = entry.createReader();
                reader.readEntries(
                    function (results) {
                        //再帰処理
                        for (let i = 0, len = results.length; i < len; i++) {
                            traverseEntry(results[i])
                        }
                    },
                    function (error) {
                        alert('読み込みに失敗しました。')
                    }
                )
                break;
        }
    }
},false)
