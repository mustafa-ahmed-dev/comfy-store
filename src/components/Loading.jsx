const Loading = ({ size, type, loadingSize }) => {
  return (
    <div className={`${size} flex items-center justify-center`}>
      <span className={`loading ${type} loading ${loadingSize}`}></span>
    </div>
  );
};

export default Loading;
