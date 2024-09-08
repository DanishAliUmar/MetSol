import React, { useState } from 'react'
import Svgs from '@/Assets/svgs';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout'

const OurServices = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Photography', 'Research', 'Solution'];

    const servicesData = [
        {
            id: 1,
            title: 'Web Development Service',
            category: 'Web Development',
            highted: true,
            image: '/Images/assets/blog-detail-01.jpg',
            link: 'https://example.com/service1',
        },
        {
            id: 2,
            title: 'App Development Service',
            category: 'App Development',
            image: '/Images/assets/blog-detail-02.jpg',
            link: 'https://example.com/service2',
        },
        {
            id: 3,
            title: 'Social Media Marketing Service',
            highted: true,
            category: 'Social Media Marketing',
            image: '/Images/assets/blog-detail-03.jpg',
            link: 'https://example.com/service3',
        },
        {
            id: 4,
            title: 'Web Development Consultation',
            category: 'Web Development',
            image: '/Images/assets/blog-detail-04.jpg',
            link: 'https://example.com/service4',
        },
        {
            id: 5,
            highted: true,
            title: 'App Development Consultation',
            category: 'App Development',
            image: '/Images/assets/blog-detail-05.jpg',
            link: 'https://example.com/service5',
        },
        {
            id: 6,
            title: 'Social Media Management',
            category: 'Social Media Marketing',
            image: '/Images/assets/blog-detail-06.jpg',
            link: 'https://example.com/service6',
        },
        {
            id: 7,
            title: 'Web Development Support',
            category: 'Web Development',
            image: '/Images/assets/blog-detail-01.jpg',
            link: 'https://example.com/service7',
        },
        {
            id: 8,
            title: 'App Development Support',
            category: 'App Development',
            highted: true,
            image: '/Images/assets/blog-detail-01.jpg',
            link: 'https://example.com/service8',
        },
        {
            id: 9,
            title: 'Social Media Advertising',
            category: 'Social Media Marketing',
            image: '/Images/assets/blog-detail-02.jpg',
            link: 'https://example.com/service9',
        },
        {
            id: 10,
            title: 'Web Development Strategy',
            highted: true,
            category: 'Web Development',
            image: '/Images/assets/blog-detail-03.jpg',
            link: 'https://example.com/service10',
        },
        {
            id: 11,
            title: 'App Development Strategy',
            category: 'App Development',
            image: '/Images/assets/blog-detail-04.jpg',
            link: 'https://example.com/service11',
        },
        {
            id: 12,
            highted: true,
            title: 'Social Media Strategy',
            category: 'Social Media Marketing',
            image: '/Images/assets/blog-detail-05.jpg',
            link: 'https://example.com/service12',
        },
        {
            id: 13,
            title: 'Web Development Training',
            category: 'Web Development',
            image: '/Images/assets/blog-detail-06.jpg',
            link: 'https://example.com/service13',
        },
        {
            id: 14,
            title: 'App Development Training',
            category: 'App Development',
            image: '/Images/assets/blog-detail-01.jpg',
            link: 'https://example.com/service14',
        },
    ];
    
    const filteredPortfolio = servicesData.filter((item) => {
        if (activeFilter === 'All') {
            return true;
        } else {
            return item.category === activeFilter;
        }
    });

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };



    // Arrays for grid columns
    const column1 = [];
    const column2 = [];
    const column3 = [];



    // Distribute data across columns
    filteredPortfolio.forEach((item, index) => {
        if (index % 3 === 0) {
            column1.push(item); // Indexes 0, 3, 6, 9
        } else if (index % 3 === 1) {
            column2.push(item); // Indexes 1, 4, 7, 10
        } else {
            column3.push(item); // Indexes 2, 5, 8, 11
        }
    });

    return (
        <>
            <HeaderLayout heading={'Services'} page={'Services'} />
            <section className="px-5 py-20 space-y-10">
                <div className="text-center space-y-5">
                    <h2 className="text-4xl font-semibold">Latest Business Development & Promotions</h2>
                    <p className="">Vulputate odio ut enim blandit volutpat. A arcu cursus vitae congue mauris rhoncus aenean. Nisl  <br /> suscipit adipiscing bibendum est ultricies. Nulla malesuada pellentesque elit eget gravida.</p>
                </div>
                <hr className="h-[1px] border-b border-solid" />
                <div className="space-y-10">
                    <div className="flex md:gap-20 sm:gap-10 flex-wrap gap-4 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`uppercase font-bold ${activeFilter === filter ? 'text-[#F8955B]' : 'text-black'}`}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3">
                        <div className="">
                            {column1.map((item) => (
                                <div key={item.id} className="space-y-5 cursor-pointer">

                                    <div className={`relative h-64`}>
                                        <img src={item.image} alt={item.title} className="w-full h-full absolute object-cover rounded-xl" />
                                        <div className="absolute right-0 bottom-0 z-20 bg-[#F8955B] p-1 border-white border-l-8  rounded-tl-2xl border-t-8 border-solid">
                                            <div className="flex items-center justify-center size-8">
                                                <Svgs.ArrowUp className={'scale-50'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <p className="">{item.category}</p>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="">
                            {column2.map((item) => (
                                <div key={item.id} className="space-y-5 cursor-pointer">

                                    <div className="relative h-64">
                                        <img src={item.image} alt={item.title} className="w-full h-full absolute object-cover rounded-xl" />
                                        <div className="absolute right-0 bottom-0 z-20 bg-[#F8955B] p-1 border-white border-l-8  rounded-tl-2xl border-t-8 border-solid">
                                            <div className="flex items-center justify-center size-8">
                                                <Svgs.ArrowUp className={'scale-50'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <p className="">{item.category}</p>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="">
                            {column3.map((item) => (
                                <div key={item.id} className="space-y-5 cursor-pointer">

                                    <div className="relative h-64">
                                        <img src={item.image} alt={item.title} className="w-full h-full absolute object-cover rounded-xl" />
                                        <div className="absolute right-0 bottom-0 z-20 bg-[#F8955B] p-1 border-white border-l-8  rounded-tl-2xl border-t-8 border-solid">
                                            <div className="flex items-center justify-center size-8">
                                                <Svgs.ArrowUp className={'scale-50'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <p className="">{item.category}</p>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices
