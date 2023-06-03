import Login from "../components/Login";

const Authentication = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2">
      <div>
        <img
          src={"/assets/plants.jpg"}
          alt={"Landing Image"}
          className="w-full h-screen object-cover hidden sm:block"
        />
        <p className="absolute bottom-5 left-5 text-white">
          Photo by&nbsp;
          <a
            href="https://unsplash.com/@fredmarriage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            freddie marriage
          </a>
          &nbsp; on&nbsp;
          <a
            href="https://unsplash.com/photos/UcfKYTan-LU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Unsplash
          </a>
        </p>
      </div>
      <Login />
    </div>
  );
};

export default Authentication;
