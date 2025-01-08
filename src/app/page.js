import Navbar from "@/components/Navbar";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <head>
        <title>Shashank Ranjan</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="m-0">
        <Navbar />
        <main className="flex min-h-screen flex-col container mx-auto px-2 py-2">
          <Body />
        </main>
        <Footer />
      </body>
    </>
  );
}
