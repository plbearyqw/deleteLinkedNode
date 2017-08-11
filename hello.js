function link(str,val){
    let arr = str.split("->");
    let result = [];
    arr.forEach(item => {
        if(parseInt(item) !== val) {
            result.push(item);
        }
    });
    let link = result.join("->");
    return link;

}

function main(){
          let str = '1->2->3->3->4->5->3';
          let a = link(str, 3);
          return "输入：" + str + "\n" + "输出：" + a;
}
