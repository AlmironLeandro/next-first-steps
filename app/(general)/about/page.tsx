'use client';

import type {Metadata} from 'next'

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 
};
const varName = 'DB_HOST'
const env = process.env[varName];
console.log("hola", process.env[varName]);

export default function AboutPage(){
    return (
        <>
        <span>About Page</span>
        </>
    )
}