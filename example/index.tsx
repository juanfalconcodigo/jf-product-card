import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';
let product = {
  id: '1',
  title: 'Product 1',
/*   img: './coffee-mug.png' */
}
const App = () => {
  return (
    <div>
      <ProductCard product={product} initialValues={{ count: 0, maxCount: 12 }}>
        {
          ({ reset, count, changeCount, maxCount }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
