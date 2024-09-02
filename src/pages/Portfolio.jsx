import Svgs from '@/Assets/svgs';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Photography', 'Research', 'Solution'];

  const portfolioData = [
    {
      id: 1,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 1,
      title: 'Research Project',
      category: 'Research',
      highted: true,
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-02.jpg',
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Solution Project',
      highted: true,
      category: 'Solution',
      image: '/Images/assets/blog-detail-03.jpg',
      link: 'https://example.com/project3',
    },
    {
      id: 4,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-04.jpg',
      link: 'https://example.com/project4',
    },
    {
      id: 5,
      highted: true,
      title: 'Solution Project',
      category: 'Solution',
      image: '/Images/assets/blog-detail-05.jpg',
      link: 'https://example.com/project5',
    },
    {
      id: 6,
      title: 'Research Project',
      category: 'Research',
      image: '/Images/assets/blog-detail-06.jpg',
      link: 'https://example.com/project6',
    },
  ];

  const filteredPortfolio = portfolioData.filter((item) => {
    if (activeFilter === 'All') {
      return true;
    } else {
      return item.category === activeFilter;
    }
  });

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };


  return (
    <>
      <HeaderLayout heading={'Portfolio'} page={'Portfolio'} />
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
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="space-y-5 cursor-pointer">

                <div className="relative min-h-64">
                  <img src={item.image} alt={item.title} className="w-full h-full absolute object-cover rounded-xl" />
                  <div className="absolute right-0 bottom-0 z-20 bg-[#F8955B] p-1 border-white border-l-4  rounded-tl-3xl border-t-4 border-solid">
                    <div className="flex items-center justify-center size-8">
                      <Svgs.ArrowUp className={'scale-50'}/>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="">{item.category}</p>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
