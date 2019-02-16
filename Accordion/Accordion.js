
//---ACCORDION---ACCORDION---ACCORDION---ACCORDION---ACCORDION---ACCORDION---// 

class Article {
    constructor(domElement) {
      this.domElement=domElement;
      this.expandButton=domElement.querySelector('.expandButton');
      this.btnOpn=domElement.querySelector('.btn-opn');
      this.btnCls=domElement.querySelector('.btn-cls');
      this.btnOpn.textContent="expand";
      this.btnOpn.addEventListener('click', () => this.expandArticle());
      this.btnCls.addEventListener('click', () => this.collapseArticle());
    } 
    expandArticle(){ 
      TweenMax.to(this.domElement, 1, {
        height: 400,
        ease: Bounce.easeOut
      });
      this.btnOpn.classList.toggle('hidden-btn');
      this.btnCls.classList.toggle('hidden-btn');
    }
    collapseArticle(){
      TweenMax.to(this.domElement, 1, {
        height: 50,
        ease: Bounce.easeOut
      });
      this.btnOpn.classList.toggle('hidden-btn');
      this.btnCls.classList.toggle('hidden-btn');
    }
  }
  
  
  let articles=document.querySelectorAll('.article');
  articles.forEach(domElement => new Article(domElement));


//---ACCORDION---ACCORDION---ACCORDION---ACCORDION---ACCORDION---ACCORDION---// 

class Article {
    constructor(domElement) {
      // assign this.domElement to the passed in domElement
      this.domElement=domElement;
      // create a reference to the ".expandButton" class. 
      this.expandButton=domElement.querySelector('.expandButton');
      this.btnOpn=domElement.querySelector('.btn-opn');
      this.btnCls=domElement.querySelector('.btn-cls');
      // Using your expandButton reference, update the text on your expandButton to say "expand"
      this.btnOpn.textContent="expand";
      // Set a click handler on the expandButton reference, calling the expandArticle method.
      this.btnOpn.addEventListener('click', () => this.expandArticle());
      this.btnCls.addEventListener('click', () => this.collapseArticle());
    } 
    expandArticle(){
      TweenMax.to(this.domElement, 1, {
        height: 400,
        ease: Bounce.easeOut
      });
      this.btnOpn.classList.toggle('hidden-btn');
      this.btnCls.classList.toggle('hidden-btn');
    }

// expandArticle(){
//   this.domElement.classList.toggle('article-open');
//   this.btnOpn.classList.toggle('hidden-btn')
//   this.btnCls.classList.toggle('hidden-btn');

//    Alternate ^^^ 

    collapseArticle(){
      TweenMax.to(this.domElement, 1, {
        height: 50,
        ease: Bounce.easeOut
      });
      this.btnOpn.classList.toggle('hidden-btn');
      this.btnCls.classList.toggle('hidden-btn');
    }
  }
  
  
  let articles=document.querySelectorAll('.article');
  articles.forEach(domElement => new Article(domElement));
  
  /* START HERE: 
  
  - Select all classes named ".article" and assign that value to the articles variable.  
  
  - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.
  
  */
  

  //---ACCORDION---ACCORDION---ACCORDION---ACCORDION---ACCORDION---ACCORDION---// 