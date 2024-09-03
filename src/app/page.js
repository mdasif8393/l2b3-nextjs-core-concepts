import GalleryPage from "./gallary/page";

export const metadata = {
  title: "Home Page",
  description: "Home page with nextjs"
}

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <GalleryPage />
    </div>
  );
}
