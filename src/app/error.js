"use client"

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <h1 className="text-center text-red-700 text-4xl">{error.message}</h1>
            <button className="btn btn-primary">try again</button>
        </div>
    );
};

export default ErrorPage;