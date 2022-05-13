# Product Card

Este es un paquete de pruebas de npm

#### Juan Diego Falcón Córdova

## Example

```
import {ProductCard} from 'jf-product-card';
```

```
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
```