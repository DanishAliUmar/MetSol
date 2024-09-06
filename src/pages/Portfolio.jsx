import Svgs from '@/Assets/svgs';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Photography', 'Research', 'Solution'];

  const portfolioData = [
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
    {
      id: 7,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 8,
      title: 'Research Project',
      category: 'Research',
      highted: true,
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 9,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-02.jpg',
      link: 'https://example.com/project2',
    },
    {
      id: 10,
      title: 'Solution Project',
      highted: true,
      category: 'Solution',
      image: '/Images/assets/blog-detail-03.jpg',
      link: 'https://example.com/project3',
    },
    {
      id: 11,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-04.jpg',
      link: 'https://example.com/project4',
    },
    {
      id: 12,
      highted: true,
      title: 'Solution Project',
      category: 'Solution',
      image: '/Images/assets/blog-detail-05.jpg',
      link: 'https://example.com/project5',
    },
    {
      id: 13,
      title: 'Research Project',
      category: 'Research',
      image: '/Images/assets/blog-detail-06.jpg',
      link: 'https://example.com/project6',
    },
    {
      id: 14,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
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

console.log('Column 1:', column1);
console.log('Column 2:', column2);
console.log('Column 3:', column3);

  return (
    <>
      
    </>
  )
}

export default Portfolio
