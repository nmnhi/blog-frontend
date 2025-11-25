const LoadingPage = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 text-sm">Đang tải nội dung...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
