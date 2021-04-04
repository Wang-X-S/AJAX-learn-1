var n = 1;
getPAGE.onclick = () => {
    const request =new XMLHttpRequest();
    request.open('GET', `/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n += 1;
        }
    };
    
    request.send()
  
}
getJSON.onclick = () => {

    const request = new XMLHttpRequest();
    request.open('GET', './5.json')
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            console.log(JSON.parse(request.response))
            const object = JSON.parse(request.response)
            console.log(object.name)
            myName.textContent=object.name
        }
        
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', './4.xml')
    request.onload = () => {
        console.log(request.responseXML)
        const dom = request.responseXML;
        const content = dom.getElementsByTagName('warning')[0].textContent.trim()
        const div = document.createElement('div')
        div.innerHTML = content
        document.body.appendChild(div)
        console.log(content)
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', './3.html')
    request.onload = () => { 
        console.log(request.response)
        //创建div标签
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response
        //插入到身体里
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}
getCSS.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET', './style.css');
    request.onreadystatechange = () => {

          if (request.status >= 200 && request.status < 300) {
                //创建 style 标签
                const style = document.createElement('style');
                //填写 style 内容
                style.innerHTML = request.response;
                //插到头里面
                document.head.appendChild(style);

                console.log('123')
            } else {
              alert('加载 CSS失败')
          }
       
        
    }

    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
        
    }
    request.onerror = () => {
        console.log('失败')
    }
    request.send()
}