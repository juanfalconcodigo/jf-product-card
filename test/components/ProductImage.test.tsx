import React from 'react'
import renderer from 'react-test-renderer';
import { ProductImg, ProductCard } from '../../src/components';
import { product2 } from '../data/data';

describe('[PRODUCT IMAGE]', () => {
    it('devería devolver el producto con la imagen por default', () => {
        const wrapper = renderer.create(<ProductImg img="https://hola.jpg" />)
        expect(wrapper.toJSON()).toMatchSnapshot();

    });
    it('devería devolver el producto con la imagen asignada', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImg />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})