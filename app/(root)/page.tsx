import BookList from '@/components/BookList';
import BookOverview from '@/components/BookOverview';
import { sampleBooks } from '@/constants/sample-books';

const Home = () => {
  return (
    <div>
      <BookOverview {...sampleBooks[0]} />
      {/* <BookList
        title='Popular Books'
        books={sampleBooks}
        containerClassName='mt-20'
      /> */}
    </div>
  );
};

export default Home;
