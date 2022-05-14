import React from 'react'
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/data';

describe('[PRODUCT TITLE]', () => {
    test('Componente con la clase personalizada', () => {
        const wrapper = renderer.create(
            <ProductTitle title='test' className="class-dummy" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test('devería de mostrar el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

})