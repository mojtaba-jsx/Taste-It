import React from 'react'
import './MenuRight.css'

import MenuRightItem from './MenuRightItem/MenuRightItem'
import MenuRightTitle from './MenuRightTitle/MenuRightTitle'
 function MenuRight() {
  return (
    <div className='MenuRight'>
        <div className="MenuRight__items-starters">
        <MenuRightTitle name={'Starters'}/>
        <MenuRightItem image={'./images/Drink.png'} name={'Raw Scallops from Erquy'} info={'Shuck the scallop to that used for oysters'} price={'$40'}/>
        <MenuRightItem image={'./images/spring-roll.png'} name={'Spring Roll'} info={'Add oil to a hot pan spring onion whites'} price={'$20'}/>
        <MenuRightItem image={'./images/soup.png'} name={'French Onion Soup'} info={'Wheat flour, apple cider vinegar, bread'} price={'$25'}/>
        <MenuRightItem image={'./images/tomato.png'} name={'Tomato Bruschetta'} info={'Bread, olive oil, garlic, black pepper'} price={'$30'}/>
        </div>

        <div className="MenuRight__items-mainDish">
        <MenuRightTitle name={'Main Dish'}/>
        <MenuRightItem image={'./images/salmon.png'} name={'Grilled Salmon with Dill Sauce'} info={'Brown sugar, salmon fillet, Dijon mustard'} price={'$40'}/>
        <MenuRightItem image={'./images/roast-beef.png'} name={'Roast Beef with Vegetable'} info={'Green beans, rib eye, olive oil, beef'} price={'$20'}/>
        <MenuRightItem image={'./images/marrkesh.png'} name={'Marrkesh Vegetetarian Curruy'} info={'Sweet potato, eggplant, garbanzo bean'} price={'$25'}/>
        <MenuRightItem image={'./images/vegan.png'} name={'Spicy Vegan Potato Curry'} info={'Coconut milk, beans, potatoes, curry powder'} price={'$35'}/>

        </div>

        <div className="MenuRight__items-dessert">
        <MenuRightTitle name={'Dessert'}/>
        <MenuRightItem image={'./images/apple.png'} name={'Apple Pie with Cream'} info={'Whipping cream, egg white, cinnamon'} price={'$15'}/>
        <MenuRightItem image={'./images/lemon.png'} name={'Lemon Meringue Pie'} info={'Frozen pie crust, meringue, lemon'} price={'$30'}/>
        </div>
    </div>
  )
}

export default MenuRight
