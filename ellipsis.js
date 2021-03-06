function ellipsis(selector, innerSelector){
    document.querySelectorAll(selector).forEach(function(item){
      let outerHeight = item.offsetHeight;
      let innerText = item.querySelector(innerSelector);
      if(!innerText) return;
      while(innerText.offsetHeight > outerHeight){
        let text = innerText.innerText;
         innerText.innerText = text.replace(/([\S\s])\.\.\.$|[\S\s]$/, '...');
      }
    })
}
