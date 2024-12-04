import StarRating from "./Stars";
function ReviewForm() {
  return (
    <div className="flex flex-col bg-black h-full w-full">
      <form className="w-full mx-auto p-6 bg-gray-100 text-gray-900 rounded-md">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-4"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Review
          </label>
          <textarea
            class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none shadow-sm"
            placeholder="Write your review here..."
            rows="5"
          ></textarea>
        </div>
        <div className="mt-3">
          <StarRating />
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
