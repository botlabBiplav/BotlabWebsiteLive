import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "../../../../components/ui/card";
import Autoplay from "embla-carousel-autoplay";
// import clientImg from "../../../Images/Image/client.svg";
import clientImg from "../../../../Images/Image/client.svg"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../components/ui/carousel"

const Client = () => {
    let list = [clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg, clientImg]
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true })
    )
    return (
        <div>
            <div className=' py-40  '>
                <div className=' text-center' >
                    <h1 className='lg:text-6xl text-2xl text-white'> OUR CLIENTS</h1>
                </div>
                <div className='flex justify-center mt-40'>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full md:w-11/12"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.play}
                    >

                        <CarouselContent type={"ClientUI"}>
                            {list.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 ">
                                    <div className="p-1">
                                        <Card className="border-none">
                                            <CardContent className="flex items-center justify-center p-6 bg-black">
                                                <Image
                                                    src={item}
                                                    alt="Description of your image"
                                                    width={400}
                                                    height={200}
                                                    className=' w-[200px]'
                                                />
                                            </CardContent>
                                        </Card>

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>

                </div>
            </div>

        </div>
    )
}

export default Client