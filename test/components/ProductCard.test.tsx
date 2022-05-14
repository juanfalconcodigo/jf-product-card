import React from "react";
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/data';
const {act}=renderer;
describe('[ProductCard]', () => {
    test('devería retornar el componente', () => {
        const wrapper = renderer.create(<ProductCard product={product1}>
            {
                () => (
                    <h1>Product Card</h1>
                )
            }
        </ProductCard>);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test('devería retornar del count deveria aumentar', () => {
        const wrapper = renderer.create(<ProductCard product={product1}>
            {
                ({ count, changeCount }) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={() => changeCount(1)}></button>
                    </>
                )
            }
        </ProductCard>);
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
        act(()=>{
            (tree as any).children[2].props.onClick();
        });
        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe("1");
    })
})