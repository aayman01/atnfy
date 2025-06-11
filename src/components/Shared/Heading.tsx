import React from 'react';

interface HeadingProps {
    text: string;
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance my-10">
          {text}
        </h1>
    );
};

export default Heading;