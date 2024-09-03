import Image from "next/image";

const GalleryPage = () => {
    return (
        <div>
            <div>
                <h1>Image optimization using regular image</h1>
                <img src="https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75" alt="next" className="mx-auto" />
            </div>

            <div>
                <h1>Image using IMage tag</h1>
                <Image
                    src="https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75"
                    alt="next"
                    width={500}
                    height={500}

                />
            </div>
        </div>
    );
};

export default GalleryPage;