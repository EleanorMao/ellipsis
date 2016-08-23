function ellipsis(selector, innerSelector){
    var doms = Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    doms.map(function(item){
      let outerHeight = item.offsetHeight;
      let innerText = item.querySelector('innerSelector');
      if(!innerText) return;
      while(innerText.offsetHeight > outerHeight){
        let text = innerText.innerText;
         innerText.innerText = text.replace(/([\S\s])\.\.\.$|[\S\s]$/, '...');
      }
    })
}
