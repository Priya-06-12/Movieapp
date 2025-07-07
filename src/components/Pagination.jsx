const Pagination = ({ page, setPage }) => (
  <div className="flex justify-center space-x-4 my-6">
    <button onClick={() => setPage(p => Math.max(p - 1, 1))} className="bg-blue-500 text-white px-4 py-1 rounded">Prev</button>
    <span className="text-lg">Page {page}</span>
    <button onClick={() => setPage(p => p + 1)} className="bg-blue-500 text-white px-4 py-1 rounded">Next</button>
  </div>
);

export default Pagination;