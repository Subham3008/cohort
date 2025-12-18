// let h1 = React.createElement('h1', null, 'Hello from React h1')
// let h2 = React.createElement('h1', null, 'Hello from React h2')
// let div = React.createElement('div', null, [h1, h2])

import parent from './parent.js'


let container = document.querySelector('.container')
let root = ReactDOM.createRoot(container)
root.render(parent())
