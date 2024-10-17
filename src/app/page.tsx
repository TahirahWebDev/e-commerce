import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import CategorySection from './components/Category';
import TopBrands from './components/TopBrands';
import DailyEssentials from './components/DailyEssentials';
import Footer from './components/Footer';

const products = [
  { id: 1, name: 'Galaxy S21 Ultra', price: '$1199', image: '/phone1.png' },
  { id: 2, name: 'Galaxy M13', price: '$799', image: '/phone2.png' },
  { id: 3, name: 'Galaxy A52s', price: '$999', image: '/phone3.png' },
  { id: 4, name: 'Galaxy S22 Ultra', price: '$1399', image: '/phone4.png' },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductGrid products={products} />
      <CategorySection />
      <TopBrands />
      <DailyEssentials />
      <Footer />
    </div>
  );
}
