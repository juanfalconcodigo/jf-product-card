import React from 'react';
import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
    className?: string;
    style?: React.CSSProperties;
    title?: string;
}
export const ProductTitle = ({ className, style, title }: Props) => {
    const { product } = useContext(ProductContext);
    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{title ? title : product.title}</span>
    )
}