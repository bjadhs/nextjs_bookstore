import BookList from '@/components/BookList';
import BooksOverview from '@/components/BooksOverview';

const Home = () => {
  return (
    <div>
      <BooksOverview />
      <BookList />
    </div>
  );
};

export default Home;
