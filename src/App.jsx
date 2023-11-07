
import './App.scss'
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./Data/Data"
import { useState } from 'react'
// console.log(items);
const allCategories = ["all", ...new Set(items.map((item)=> item.category ))]  ;
// console.log(allCategories);
function App() {
const [menuItems,setMenuItems] = useState(items)
const [categories,setCategories] = useState(allCategories)
// console.log(menuItems);
// console.log(categories);
const filterItems = (category) =>{
  const newItems = items.filter((item)=>item.category === category)
  if(category === "all"){
    setMenuItems(items)
    return;
  }else{
    setMenuItems(newItems)
    return;
  }
}

  return (
    <>
      <section className='menu section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
    </>
  )
}

export default App
