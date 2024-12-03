import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
      } catch (err) {
        setError('Failed to fetch book details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleEditBook = async () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    try {
      await axios.put(`http://localhost:5555/books/${id}`, data);
      enqueueSnackbar('Book edited successfully', { variant: 'success' });
      navigate('/');
    } catch (err) {
      enqueueSnackbar('Failed to edit the book. Please try again.', { variant: 'error' });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl font-bold my-4">Edit Book</h1>

      {loading && <Spinner />}
      {error && <div className="text-red-600 text-center mt-4">{error}</div>}

      {!loading && !error && (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-6 mx-auto shadow-lg bg-white">
          <div className="my-4">
            <label htmlFor="title" className="text-xl font-medium text-gray-500">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="my-4">
            <label htmlFor="author" className="text-xl font-medium text-gray-500">Author</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="my-4">
            <label htmlFor="publishYear" className="text-xl font-medium text-gray-500">Publish Year</label>
            <input
              id="publishYear"
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <button
            className="bg-sky-500 text-white font-medium px-6 py-2 rounded-md hover:bg-sky-600 transition m-4 self-end"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
