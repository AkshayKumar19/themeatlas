import React from 'react'
import Home from './Components/Home'
import { Switch ,Route} from 'react-router-dom'
import Wordpresstheme from './Components/Wordpresstheme'

import "./style.css"
import Subcat from './Components/Subcat'
import Blog from './Components/Blog'
const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="themeatlas/" component={Home} />
      <Route exact path="/themeatlas/blog" component={Blog} />
      <Route exact path="/themeatlas/category/wordpresstheme" component={()=>
        <Wordpresstheme cat={"wordpress"}/>}/>
      <Route exact path="/themeatlas/category/php" component={()=>
        <Wordpresstheme cat={"php"}/>}/>
      <Route exact path="/themeatlas/category/ecommerce" component={()=>
        <Wordpresstheme cat={"ecommerce"}/>}/>
      <Route exact path="/themeatlas/category/wordpressplugins" component={()=>
        <Wordpresstheme cat={"wordpressplugins"}/>}/>
      <Route exact path="/themeatlas/subcategory/blog" component={Subcat}/>
      <Route exact path="/themeatlas/subcategory/buddypress" component={()=><Subcat cat={"buddypress"}/>}/>
      <Route exact path="/themeatlas/subcategory/corporate" component={()=><Subcat cat={"corporate"}/> } />
    </Switch>
    </>
  )
}

export default App
