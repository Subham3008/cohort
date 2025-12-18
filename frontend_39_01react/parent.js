import box from './box.js'
import circle from './circle.js'
const parent = () => {
  return React.createElement('div', { id: 'parent' }, [box(), circle()])
}

export default parent