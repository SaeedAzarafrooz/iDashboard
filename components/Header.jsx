export default function Header() {
  return (
    <div className="sticky top-0 w-full h-12 flex justify-between items-center shadow-md z-10 bg-white">
      <div className="px-4">Date and time info</div>
      <div className="px-4">SearchBar</div>
      <div className="flex">
        <div className="flex justify-between items-center">notif</div>
        <div className="flex flex-row-reverse items-center px-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full px-2"></div>
          <div className="px-2">username info</div>
        </div>
      </div>
    </div>
  );
}
