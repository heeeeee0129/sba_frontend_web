import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-b from-primary-default from-0% to-white to-35%">
      <div className="flex flex-col items-center justify-center gap-y-8 px-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="88"
          viewBox="0 -960 960 960"
          width="88"
          fill="#475569"
        >
          <path d="M76.615-152.307v-65.847q0-26.077 13.923-46.615 13.923-20.539 39.308-33.231 48.692-24.462 108.077-39.385 59.385-14.923 118.692-14.923 59.308 0 118.693 14.923T583.385-298q25.384 12.692 39.308 33.231 13.923 20.538 13.923 46.615v65.847h-560Zm40-40.001h480v-25.846q0-16.385-9.346-26.923-9.346-10.538-22.961-17.846-37.539-19.539-94.039-34.462-56.5-14.923-113.654-14.923-57.154 0-113.654 14.923-56.5 14.923-94.038 34.462-13.615 7.308-22.961 17.846-9.347 10.538-9.347 26.923v25.846Zm240-249.23q-51.384 0-85.692-34.308-34.308-34.308-34.308-90.308h-8.461q-6.693 0-11.039-4.346t-4.346-11.039q0-6.692 4.346-11.038t11.039-4.346h8.461q1.539-30.385 12.769-55.231 11.231-24.846 36.462-47.385v38q0 6.692 4.346 11.039 4.346 4.346 11.039 4.346 6.692 0 11.038-4.346 4.346-4.347 4.346-11.039V-714q8.231-3 18.616-5.27 10.384-2.269 21.384-2.269T378-719.27q10.385 2.27 18.615 5.27v52.461q0 6.692 4.347 11.039 4.346 4.346 11.038 4.346t11.039-4.346q4.346-4.347 4.346-11.039v-38q26 22.539 36.846 47.385 10.846 24.846 12.385 55.231h8.461q6.693 0 11.039 4.346t4.346 11.038q0 6.693-4.346 11.039t-11.039 4.346h-8.461q0 56-34.308 90.308-34.308 34.308-85.693 34.308Zm0-40.001q34.539 0 57.27-22.73 22.73-22.731 22.73-57.27h-160q0 34.539 22.731 57.27 22.731 22.73 57.269 22.73Zm301.539 115.385-2.923-28.461q-7.539-2-15.731-6.423t-13.961-10.193l-26.462 11.539-15.385-26.77 23.539-16.923q-1.539-4.538-1.539-8.307v-16.231q0-3.385 1.539-8.692l-23.539-16.923 15.385-26.77 26.462 11.539q5.538-5.539 13.846-10.077 8.307-4.539 15.846-6.539l2.923-28.461h30.769l2.923 28.461q7.539 2 15.846 6.539 8.308 4.538 13.847 10.077L748-520.308l15.385 26.77-23.539 16.923q1.539 5.307 1.539 8.692v16.231q0 3.769-1.539 8.307l23.539 16.923L748-399.692l-26.461-11.539q-5.77 5.77-13.962 10.193t-15.731 6.423l-2.923 28.461h-30.769Zm15.385-57.692q15.076 0 25.615-10.539 10.538-10.538 10.538-25.615 0-15.077-10.538-25.615-10.539-10.539-25.615-10.539-15.077 0-25.616 10.539-10.538 10.538-10.538 25.615 0 15.077 10.538 25.615 10.539 10.539 25.616 10.539Zm81.23-159.231-3.384-31.231q-11.308-2.23-23.808-9.038T707.539-640l-29.693 12.462-17.231-29.539 26.308-19.231q-2-5.769-2.769-11.846-.769-6.077-.769-11.846t.769-11.846q.769-6.077 2.769-11.846l-26.308-19.231 17.231-29.539L707.539-760q7.538-9.846 20.038-16.654t23.808-9.038l3.384-31.231h34.462l3.385 31.231q11.307 2.23 23.807 9.038 12.5 6.808 20.039 16.654l29.692-12.462 17.231 29.539-26.308 19.231q2 5.769 2.769 11.846.77 6.077.77 11.846t-.77 11.846q-.769 6.077-2.769 11.846l26.308 19.231-17.231 29.539L836.462-640q-7.539 9.846-20.039 16.654-12.5 6.808-23.807 9.038l-3.385 31.231h-34.462ZM772-645.385q23.308 0 38.962-15.653 15.653-15.654 15.653-38.962 0-23.308-15.653-38.962-15.654-15.653-38.962-15.653-23.308 0-38.961 15.653-15.654 15.654-15.654 38.962 0 23.308 15.654 38.962 15.653 15.653 38.961 15.653ZM356.615-192.308Z" />
        </svg>
        <p className="text-base text-center text-slate-800">개발 중인 페이지입니다.</p>
        <Link to="/home">
          <button className="bg-primary-default font-medium text-sm text-white shadow py-2.5 px-20 rounded-lg hover:bg-opacity-80">
            홈으로 이동
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
