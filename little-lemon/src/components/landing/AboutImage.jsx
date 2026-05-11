function AboutImage({image1, image2}) {
  return (
    <>
      <img src={image2} style={{ width: "320px", height: "456px" }} />
      <img
        src={image1}
        style={{
          width: "320px",
          height: "456px",
          zIndex: "1",
          position: "absolute",
          top: "125px",
          left: "137px",
        }}
      />
    </>
  );
}

export default AboutImage;
