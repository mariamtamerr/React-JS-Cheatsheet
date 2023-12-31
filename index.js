### virtual DOM :

a copy of the actual DOM but this is another one, compares between values of old virtual DOM & Real DOM to see if they’re different. If yes, then rerender the changed element. If no, then make no changes. 

(بيقارن بين الحقيقية ة الخيالية زز بيشوف لو في اختلاف بيعدل بس في الحتة الصغيرة المختلفة من غير ما يريلوود باقي الصفحة ( 

---

**When you push to GitHUb →** you don’t push using the Node Modules packages.. you delete them and push your projects.

**When running/downloading/cloning a project from Github or else where —>  npm install** or **npm i** 

( downloads the node modules packages )

---

### Steps to create & run a react app

1) create a new react app  ——> **npx create-react-app app-name**    

**ex : npx create-react-app day-one**

2) **cd your_created_folder**

ex : **cd ./day-one** 

3) **npm start**

**note :** if you’re using **ubuntu** , you **MAY NEED** first before anything to do : ****

- **nano ~/.bashrc** ..

then write : 

- **export PATH=/home/mariamtamerr/Downloads/node-v18.18.0-linux-x64/bin:$PATH**

and of course change the /home/mariamtamerr/DOwnloads to the path of your installed node js folder

- **source ~/.bashrc** to run the file

then do the npx steps 

---

---

### another way using vite

1) **npm create vite@latest**

2) **project name**

3) choose **react** then **js or ts**

4) **cd project-name**

5) **npm install** or **npm i**  

6) open VSC —> terminal —> 

7) **npm run dev** —> to start/ run browser 

---

---

I can’t delete these 2 files : index.html & index.js

we create a folder called **components (**all component files are here)

inside **component folder**, we create another 2 olders : **Header & Footer**

**Header folder** has 2 files : **Header.js** & **Header.css**

**Footer folder** has 2 files : **Footer.js** &**Footer.css**

soo : 

### **src**

**components**

**Header**

Header.js

Header.css

**Footer**

Footer.js

Footer.css

---

---

RUle : Components are **Capitalized** : **H**eader not header

---

return statement can only return 1 element, so if you wanna write more than 1 element, you wrap them in smth called : Fragment 

Here's an example of how to use `Fragment` in React:

```jsx
import React, { Fragment } from 'react';

function MyComponent() {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </Fragment>
  );
}

```

In this example, the `Fragment` component is used to wrap multiple elements (heading and paragraphs) and return them as a single entity.

or using : <> …… </> as a shorthand for fragment : 

```jsx
import React, { Fragment } from 'react';

function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </>
  );
}

```

In this example, the `Fragment` component is used to wrap multiple elements (heading and paragraphs) and return them as a single entity. Alternatively, you can use the shorthand syntax `<> ... </>` as a fragment.

---

---

### CSS styles :

- **to Install Bootstrap :**

### **npm i bootstrap@5.3.2**

- **to work with css styles :**

in **Header.js :** 

```
function Header() {
    return (
      <>
        <h1 style={{ color: 'red' }}>Hiiii</h1>
      </>
    );
  }
  
  export default Header;
```

we write css in 2 **currly braces left & right** —> **{{ }}** 

**first** curly braces are for writing **dynamic values like jsx**

**second** are for object ( bc we write **css** as an **object — >  key : value** )

---

in **Header.css :** 

you can take a className and apply it there in Header.js with the import statement : 

for example my Header.css : 

```css
.header {
    color : green;
}

my Header.js :
import './Header.css'

function Header() {
    return (
      <>
        <h1 className='header'>Hiiii</h1>
        <p>This is a paragpraph</p>
      </>
    );
  }
  
  export default Header;
```

---

---

### **Handling Events**

```jsx
function Header() {

    const handleInputChange = (event) => {
        console.log(event.target.value)
    }

    return (
      <>
        <h1 style={{ color: 'red' }}>Hiiii</h1>
        <p>This is a paragpraph</p>
        <input onChange={(e)=> handleInputChange(e)}
        style={{
          border: '1px solid #ccc',
          padding: '5px',
          width: '200px', // Adjust the width as needed
        }}/>
      </>
    );
  }
```

OR 

```jsx
function Header() {

    const handleInputChange = (event) => {
        console.log(event.target.value)
    }

    return (
      <>
        <h1 style={{ color: 'red' }}>Hiiii</h1>
        <p>This is a paragpraph</p>
        <input onChange={handleInputChange}/>
      </>
    );
  }
```

### to install font awesome icons on react js

`npm i --save @fortawesome/fontawesome-svg-core`

`npm i --save @fortawesome/free-solid-svg-icons`

`npm i --save @fortawesome/react-fontawesome`

then after choosing your icon on the Font Awesome site, search for the option “individual import”

then in your component.js write : 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

and under , right :

<FontAwesomeIcon icon={faFacebookF} />