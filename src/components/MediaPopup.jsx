function MediaPopup({
  language,
  selectedImage,
  setSelectedImage,
  selectedVideo,
  setSelectedVideo
}) {
  return (
    <>
      {/* Common Image Popup */}
      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="close-popup"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt={
              language === "en"
                ? "Activity"
                : "ಚಟುವಟಿಕೆ"
            }
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Common Video Popup */}
      {selectedVideo && (
        <div
          className="image-popup"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="close-popup"
            onClick={() => setSelectedVideo(null)}
          >
            ✕
          </button>

          <video
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "80vh",
              borderRadius: "15px"
            }}
          >
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}

export default MediaPopup;