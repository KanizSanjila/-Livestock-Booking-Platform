import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaWeight } from 'react-icons/fa';

const AnimalsCard = ({animal}) => {
     const {id,name,price,image,weight,location,category} = animal
    return (
        <Card>
           <div className='relative w-full aspect-square'>
            <Image  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={image} alt={name} className='rounded-xl object-cover'></Image>
            <Chip size='md' color="success" className='absolute right-2 top-2 font-bold'>{category}</Chip>
            </div> 
            <div>
                <h2 className='font-bold'>{name}</h2>
                <p>$ {price}</p>
        <div className="flex justify-between gap-4 mt-3 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-bold text-orange-600 flex justify-between items-center gap-1"><FaWeight /> {weight}kg</span>
          </div>
          <Separator orientation='vertical'></Separator>
          <div className="flex items-center gap-1">
            <span className="font-bold text-blue-600 flex justify-between items-center gap-1"><CiLocationOn /> {location}</span>
          </div>
        </div>
            </div>
            <Link href={`/all-animals/${id}`}><Button variant='outline' className={'w-full bg-[#631a37] text-white border-none'}>Details</Button></Link>
        </Card>
    );
};

export default AnimalsCard;