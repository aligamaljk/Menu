import React from 'react'

const Menu = ({items}) => {
  console.log(items);
  return (
    <section className='section-center'>
      {items.map((item)=>{
        const {category,desc,id,img,price,title } = item
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='img' />
            <div className="item-info">
              <header>
                <h5 className='item-header-title'>{title}</h5>
                <span className="item-price">${price}</span>
              </header>
              <hr />
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Menu