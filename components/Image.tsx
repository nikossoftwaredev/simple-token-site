const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      className="rounded-xl border border-accent shadow-xl"
      src={src}
      alt={alt}
    />
  );
};

export default Image;
