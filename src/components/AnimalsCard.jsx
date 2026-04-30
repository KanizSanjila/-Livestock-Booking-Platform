import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AnimalsCard = ({animal}) => {
     const {name,price,image} = animal
    return (
        <Card className=''>
           <div>
            <Image src={image} height={200} width={300} alt={name}></Image>
            </div> 
        </Card>
    );
};

export default AnimalsCard;