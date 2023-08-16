import UnderConstruction from "@/public/assets/images/underconstruction.png";
export default function Settings() {
  return (
    <main
      className="w-full h-screen flex flex-col justify-between items-center text-3xl text-gray-300 bg-white p-2"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPositionX: 800,
        backgroundPositionY: 270,
        backgroundSize: "40%",
        objectFit: "cover",
        backgroundImage: `url(${UnderConstruction.src})`,
      }}
    >
      <div>Settings page</div>
    </main>
  );
}
