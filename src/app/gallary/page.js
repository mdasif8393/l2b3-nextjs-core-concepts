import Image from "next/image";
import batImage from '../../assets/bat.jpg';

const GalleryPage = () => {
    return (
        <div>
            <div>
                <h1>Image optimization using regular image</h1>
                <img src="https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75" alt="next" className="mx-auto" width={500}
                    height={500} />
            </div>


            <div>
                <h1 className="text-center mt-6">Image of Image compoentnt</h1>

                <Image
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMTJfM2RfcmVuZGVyX2lsbHVzdHJhdGlvbl9vZl9ibGFja19iYXRfYW5pbWFsX2lzb182MTQ5YTE5Mi1hMjliLTRkYzctOTI3My0xNDY3MGM0NzdhOWYucG5n.png"
                    alt="sa"
                    width={500}
                    height={500}
                    className="mx-auto"
                />
            </div>
            <div>
                <h1 className="text-center mt-6">Image of local storaget</h1>

                <Image
                    src={batImage}
                    alt="sa"
                    width={500}
                    height={500}
                    className="mx-auto"
                />
            </div>
        </div>
    );
};

export default GalleryPage;