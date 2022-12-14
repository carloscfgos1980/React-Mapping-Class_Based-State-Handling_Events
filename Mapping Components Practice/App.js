/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts" // the name productsData doesnt match with vschoolProduct but it doesnt matter.

// with the map method we create a new array that are going to use (call) it later to show the items. It is important to include the key of the items (key={item.id})
function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App