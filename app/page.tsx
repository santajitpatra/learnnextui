import { Button } from '@nextui-org/button'
import Image from 'next/image'
import ProductSize from './components/ProductSize'
import { Card, CardBody } from '@nextui-org/react'


import shoe from '@/public/shoe.webp'
export default function Home() {
  return (
    <section className='py-36'>
      <div className='container flex items-center justify-center'>
        <Card className='py-4 lg:w-3/4'>
          <CardBody className='overflow-visible py-2'>
            <div className='flex gap-6'>
              <Image alt='Shoe' className='flex-1 object-cover' priority src={shoe} />
              <div className='flex-1'>
                <h2 className='text-lg font-bold uppercase'>
                  Nike Adapt BB 2.0
                </h2>
                <p className='text-sm text-default-500'>
                  Consistent, customized fit, game-changing.
                </p>

                <div className='mb-6 mt-2 flex gap-3'>
                  <span className='font-bold'>$279.79</span>
                  <span className='text-default-600 line-through'>$350</span>
                  <span className='text-success'>20% off</span>
                </div>

                <ProductSize />

                <div className='mt-6 flex gap-6'>
                  <Button color='primary'>Buy now</Button>
                  <Button color='primary' variant='bordered' radius='full'>
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}
