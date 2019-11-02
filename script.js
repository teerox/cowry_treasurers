
      function createNode(element) {
        return document.createElement(element);
    }
  
    function append(parent, el) {
      return parent.appendChild(el);
    }
  
    const ul = document.getElementById('root');
    const url = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=a95f0fdbadc84a61ae0221944ba23cce';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let authors = data.articles;
      return authors.map(function(author) {

        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
            
        img.src = author.urlToImage;
        span.innerHTML = `${author.title} ${author.description}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function(error) {
      console.log(error);
    });   