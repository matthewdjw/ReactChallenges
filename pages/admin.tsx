import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CreateChallenge from "@/components/admin/CreateChallenge";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CreateChallenge />
      <Footer />
    </div>
  );
}
