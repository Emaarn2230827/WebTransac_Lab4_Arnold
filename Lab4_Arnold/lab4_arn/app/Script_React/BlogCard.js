"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
function BlogCard({ id, titre, contenu }) {
 
    return (
        <div className="col-12 col-lg-4" key={id}>
            <div className="card" style={{ width: '18rem' }}>
            <Link href={`BlogPost/${id}`} className="blog">
                    <Image src="/images/crypto.jpg" className="card-img-top" alt="crypto" width={450} height={200}/>
                    <div className="card-body">
                        <div className="card bg-info text-white">
                            <div className="card-title">{titre}</div>
                        </div>
                        <p className="card-text">{contenu}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default BlogCard;